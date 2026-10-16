const express = require('express')
const userController = require('../controller/userController')
const multer = require('multer')
const authMiddleware = require('../middlewares/authMiddleware')
const upload = multer({ dest: 'uploads/' })

const router = new express.Router()

router.post('/register', userController.registerController)
router.post('/login', userController.loginController)
router.put('/user/edit/:id', authMiddleware, upload.single('picture'), userController.editUserController)

module.exports = router