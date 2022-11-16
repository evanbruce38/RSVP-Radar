const jwt = require('jsonwebtoken');

const sercret = 'mysecret';
const expieration = '2h';

module.exports = {
    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret, {maxAge: expiration });
            req.user = data;
        } catch (err) {
            console.error(err);
            console.log('Invalid Token');
        }

        return req;
    },
    signToken: function ({ username, email, _id }) {
        const payload = { username, email, _id };
        return jwt.sign({ data: payload}, sercret, { expiresIn: expiration });
    },
};