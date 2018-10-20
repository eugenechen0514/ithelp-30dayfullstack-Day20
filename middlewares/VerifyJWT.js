const _ = require('lodash');
const jsonwebtoken = require('jsonwebtoken');

const SECRET = 'YOUR_JWT_SECRET'; // 要合簽發時一樣，所以可以放在 ./configs/config.js 中

async function verifyJWT(jwt, {secret}) {
    if (!jwt) {
        return Promise.reject(new Error('No JWT'));
    }
    const decoded = jsonwebtoken.verify(jwt, secret);
    return decoded;
}


module.exports = function (options = {}) {
    // tokenPath 是取出 token 的路徑
    const {tokenPath = 'cookies.token', secret = SECRET} = options; 
    return function (req, res, next) {
        const jwt = _.get(req, tokenPath);
        verifyJWT(jwt, {secret})
            .then(decoded => {
                console.log(decoded);
                next(); // next middleware
            })
            .catch(next);
    };
}


