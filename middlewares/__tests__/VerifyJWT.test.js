const VerifyJWT = require('../VerifyJWT');

describe('VerifyJWT', () => {
    test('VerifyJWT() 要回傳一個 function', () => {
        const middleware = VerifyJWT();
        const actual = typeof middleware;
        const except = 'function';
        expect(actual).toEqual(except);
    });
});
