const User = require('../models/User')
class UserController {
    async register(req, res) {
        try {
            const newUser = await User.create(req.body)
            res.status(201).json(newUser)
        } catch (error) {
            console.log(error);
        }
    }

    async login(req, res) {
        try {
            const user = await User.findOne(req.body)
            if (user != null) {
                res.status(200).json(user)
            } else {
                res.status(404).json({
                    message:"not found"
                })
            }
        } catch (error) {
            
        }
    }
}

module.exports = new UserController