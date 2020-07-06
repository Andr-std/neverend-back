const express = require('express');
const bcrypt = require("bcryptjs");
const { check } = require('express-validator');
const { asyncHandler, handleValidationErrors } = require("./utils");
const { getUserToken } = require("../auth");
const db = require('../db/models');



const router = express.Router();
const { User } = db;



const validateUserNameAndPassword = [
    check('email')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Email')
        .isEmail({ checkFalsy: true })
        .withMessage('Please provide a valid email format'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for password'),
    handleValidationErrors
];

router.post("/", validateUserNameAndPassword, asyncHandler(async (req, res, next) => {

    const { email, password } = req.body;
    const user = await User.findOne({
        where: {
            email,
        },
    });
    User.prototype.validatePassword = function (password) {

        return bcrypt.compareSync(password, this.password.toString());
    }
    if (!user || !user.validatePassword(password)) {
        const err = new Error("Login failed");
        err.status = 401;
        err.title = "Login failed";
        err.errors = ["The provided credentials were invalid."];
        return next(err);
    }
    const token = getUserToken(user);
    res.json({ token, user: { id: user.id, firstName: user.firstName } });
}));


module.exports = router;
