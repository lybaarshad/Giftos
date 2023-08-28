const { body, validationResult } = require('express-validator');

const signUpValidation = [

    body('name').notEmpty().withMessage(' Name is required'),
    body('email').isEmail(),
    body('password').isStrongPassword().withMessage('Password must be at least 6 characters one Capital Letter One small Letter and One special'),

];


const LogInValidation = [

    body('email').isEmail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];


module.exports = {
    signUpValidation,
    LogInValidation

};