const fs = require ('fs')
const path = require ('path')

const userLogsPath = path.join(__dirname, '../logs/userLgos.txt');
const userLogs = fs.readFileSync(userLogsPath, 'utf-8')

module.exports =  (req,res,next) => {
    fs.appendFileSync(userLogsPath, 'El usuario ingreso a la ruta: ' + req.url + '\n')
    next()
}

