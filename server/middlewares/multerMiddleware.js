const express = require('express')
const userController = require('../controller/userController')
const authMiddleware = require('../middlewares/authMiddleware')
const multermiddleware = require('../middlewares/multerMiddleware')

const router = new express.Router()

router.post('/register', userController.registerController)
router.post('/login', userController.loginController)
router.post('/gooogle-login', userController.googlelogin)
router.put('/user/edit/:id', authMiddleware, multermiddleware, userController.editUserController)

module.exports = router