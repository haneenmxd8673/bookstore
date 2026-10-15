const express=require('express')
const userController=require('../controller/userController')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

router.put('/user/edit/:id', upload.single('picture'), userController.editUserController)

//to set up routes outside express server,create Object for Router class in express
const router=new express.Router()

//register
router.post('/register',userController.registerController)
router.post('/login',userController.loginController)
router.post('/google-login', userController.googleLoginController)

module.exports=router