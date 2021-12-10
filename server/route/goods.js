const route = require('express').Router()
const query = require('../utils/mysql')
function getGoods(req,res){
    const sql = 'SELECT * from goods'
    query(sql,function(err, rows, ){
        
        if(err){
            console.log('数据库连接错误');
        }

       res.send({code:200,data:rows,msg:"查询成功"})
    })
}

route.get('/goods',getGoods)

module.exports = route