const logger = (req, res, next) =>{
    const method = req.method
    const url = req.url
    const time = ((new Date().getMonth() + 1) + '/' + (new Date().getDay() - 1) + "/" + (new Date().getYear() - 100) + ', ' + new Date().getHours() + ':' + new Date().getMinutes())
    console.log(method, url, time)
    next()
}
module.exports = logger;