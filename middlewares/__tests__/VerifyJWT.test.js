const VerifyJWT = require('../VerifyJWT');
const _ = require('lodash');

describe('VerifyJWT', () => {
    test('VerifyJWT() 要回傳一個 function', () => {
        const middleware = VerifyJWT();
        const actual = typeof middleware;
        const except = 'function';
        expect(actual).toEqual(except);
    });

    test('當 request 的 cookie token 值為有效，就會換下一個 regular middleware', (done) => {
        const validJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJpbGx5IiwiZW1haWwiOiJiaWxseUBnbWFpbC5jb20iLCJpYXQiOjE1NDAwMTg2ODQsImV4cCI6MTU0MTAxODY4NH0.BHWWQbxWeaeCRLgjmT9xoAD_LXTGkmX6zcTKoncv_Uk';
        const middleware = VerifyJWT();

        const res = {};
        _.set(res, 'cookies.token', validJWT); // 用 lodash 的　set() 設定值，相當於 const res = {cookie: {token: validJWT}}
        
        middleware(res, null, (error) => {
            done(error); // 告訴 Jest 此測試結束。若 error 為空 (即 next()) , 測試通過，若　error 非空(即 next(error))，測試失敗。
        });
        });
    });
});
