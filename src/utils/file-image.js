const BASE64_TO_FILE = (base64, filename) => {
    return new Promise(resolve => {
        const arr = base64.split(',')
        const mime = arr[0].match(/:(.*?);/)[1]
        const bstr = Buffer(arr[1], 'base64')
        let n = bstr.length
        const u8arr = new Uint8Array(n)
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n)
        }
        resolve(new File([u8arr], filename, { type: mime }))
    })
}

module.exports = BASE64_TO_FILE
