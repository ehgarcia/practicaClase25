const express = require ('express')
const router = express.Router();

//Controller
const mainController = require ('../controllers/mainController')

//router.get()
router.get('/', mainController.index)

module.exports = router;