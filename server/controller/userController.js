const users = require('../Models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.registerController = async (req, res) => {
    console.log("inside registration logic")
    const { username, email, password } = req.body

    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(409).json("User already exist!..please login")
        } else {
            const encryptedPassword = await bcrypt.hash(password, 10)
            const newUser = await users.create({ username, email, password: encryptedPassword })
            res.status(200).json(newUser)
        }
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.loginController = async (req, res) => {
    const { email, password } = req.body

    try {
        const existingUser = await users.findOne({ email })

        if (existingUser) {
            const isPswdMatch = await bcrypt.compare(password, existingUser.password)

            if (isPswdMatch) {
                const token = jwt.sign(
                    { userEmail: email, role: existingUser.role },
                    process.env.JWTSECRET,
                    { expiresIn: '1d' }
                )
                res.status(200).json({ user: existingUser, token })
            } else {
                res.status(404).json("invalid Password")
            }
        } else {
            res.status(409).json("invalid Email....Please Register")
        }
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.googleLoginController = async (req, res) => {
    const { username, email, picture } = req.body

    try {
        let user = await users.findOne({ email })

        if (!user) {
            const randomPassword = await bcrypt.hash(email + Date.now(), 10)
            user = await users.create({
                username,
                email,
                password: randomPassword,
                picture
            })
        }

        const token = jwt.sign(
            { userEmail: user.email, role: user.role },
            process.env.JWTSECRET,
            { expiresIn: '1d' }
        )
        res.status(200).json({ user, token })
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.editUserController = async (req, res) => {
    try {
        const { id } = req.params
        const { username, Password, bio } = req.body
        const updateData = { username, bio }
        if (req.file) {
            updateData.picture = req.file.filename
        }
        const updatedUser = await users.findByIdAndUpdate(id, updateData, { new: true })
        res.status(200).json({ message: "update request received", user: updatedUser })
    } catch (err) {
        res.status(500).json({ message: "update failed", error: err.message })
    }
}