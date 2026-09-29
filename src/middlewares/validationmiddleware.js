const { body, validationResult } = require('express-validator');

// Validation for user registration
exports.validateUserRegistration = [
    body('username')
        .isString()
        .withMessage('Username is required')
        .notEmpty()
        .withMessage('Username should not be empty'),
    
    body('email')
        .isEmail()
        .withMessage('Valid email is required')
        .notEmpty()
        .withMessage('Email should not be empty'),

    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
        .notEmpty()
        .withMessage('Password should not be empty'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
    ];

// Validation for user login
exports.validateUserLogin = [
    body('email')
        .isEmail()
        .withMessage('Valid email is required')
        .notEmpty()
        .withMessage('Email should not be empty'),

    body('password')
        .notEmpty()
        .withMessage('Password should not be empty'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
    ];        