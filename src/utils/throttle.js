function throttle(func, wait) {
    let timeout

    return function () {
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null
                func.call(this, arguments)
            }, wait)
        }
    }
}
function debounce(func, wait) {
    let timeout = null

    return function () {
        clearTimeout(timeout)
        timeout = setTimeout(function () {
            func()
        }, wait)
    }
}

module.exports = {
    throttle,
    debounce
}