const jwt = require('jsonwebtoken');
const config = require('../config');

exports.verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(403).json({ error: 'A token is required for authentication' });

    jwt.verify(token, config.jwtSecret, (err, user) => {
        if (err) return res.status(401).json({ error: 'Invalid Token' });
        req.user = user;
        next();
    });
};