const route = require('express').Router()
const query = require('../utils/mysql')
const fs = require('fs')

//查询图标是否存在
function selectOptions(req, res) {
    const { name } = req.body
    const sql = `SELECT id FROM echarts WHERE name='${name}'`

    query(sql, function (err, rows) {
        if (err) {
            console.log('数据库操作失败');
        }
        rows[0] != null ? res.send({ data: rows, code: 200, msg: "该图表名称已存在！" }) : res.send({ data: rows, code: 200, msg: "" })
    })
}
//保存图表
function saveOptions(req, res) {
    const { name, options, image } = req.body

    const option = JSON.stringify(options)
    const arr = image.split(',')
    // const mime = arr[0].match(/:(.*?);/)[1]
    const buffer = Buffer.from(arr[1], 'base64')
    const path = `./server/public/image/${new Date().getTime()}${name}.png`
    fs.writeFile(path, buffer, (err) => {
        err ? console.log(err + '写入失败') : console.log('写入成功');
    })
    const filePath = path.slice(1)
    const sql = `INSERT INTO echarts (name,options,image) VALUES ('${name}','${option}','${filePath}')`
    query(sql, function (err, rows) {
        if (err) {
            console.log('数据库操作失败');
        }
        res.send({ code: 200, data: rows, msg: "保存成功" })

    })
}
//获取所有图表
function getAllOptions(req, res) {
    const sql = `SELECT id,name,options,image FROM echarts`
    query(sql, function (err, rows) {
        if (err) {
            console.log('数据库连接错误');
        }
        res.send({ code: 200, data: rows, msg: "查询成功" })
    })
}


//删除图表
function deleteOptions(req, res) {
    const { id } = req.query
    const sql = `DELETE FROM echarts WHERE id = ${id}`
    query(sql, function (err, rows) {
        if (err) {
            console.log('数据库连接错误');
            res.status(500)
        }
        res.send({ code: 200, data: rows, msg: "删除成功!" })
    })
}

route.post('/saveOptions', saveOptions)
route.get('/getAllOptions', getAllOptions)
route.post('/selectOption', selectOptions)
route.get('/deleteOptions', deleteOptions)
module.exports = route