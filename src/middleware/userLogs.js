const fs = require ('fs')
const path = require ('path')

const userLogsPath = path.join(__dirname, '../logs/userLogs.txt');

module.exports =  (req,res,next) => {
    fs.appendFileSync(userLogsPath, 'El usuario ingreso a la ruta: ' + req.url + '\n')
    next()
}

