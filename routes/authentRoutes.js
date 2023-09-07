const express = require('express')
const { registerController, loginController, currentUserController, } = require('../controllers/authentControllers')
const authentMiddleware = require('../middlewares/authentMiddleware')


const router = express.Router()

//routes
//REGISTER || POST
router.post('/register', registerController)

//LOGIN || POST
router.post('/login', loginController)

//GET CURRENT USER || GET
router.get('/current-user',authentMiddleware, currentUserController)


module.exports = router;