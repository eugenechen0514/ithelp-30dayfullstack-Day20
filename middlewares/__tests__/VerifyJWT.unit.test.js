const VerifyJWT = require('../VerifyJWT');
const _ = require('lodash');

describe('VerifyJWT', () => {
    test('VerifyJWT() 要回傳一個 function', () => {
        const middleware = VerifyJWT();
        const actual = typeof middleware;
        const except = 'function';
        expect(actual).toEqual(except);
    });
});
