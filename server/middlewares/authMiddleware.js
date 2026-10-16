const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
    console.log("inside authentication middleware")

    const token = req.headers['authorization']?.split(' ')[1]
    console.log(token)

    if (token) {
        try {
            const jwtResponse = jwt.verify(token, process.env.JWT_SECRET)
            console.log(jwtResponse)
            req.payload = jwtResponse.userEmail
            next()
        } catch (err) {
            res.status(401).json("invalid token....please login again")
        }
    } else {
        res.status(401).json("token not found....please login again")
    }
}

module.exports = authMiddleware