"use strict";
// 可索引签名
Object.defineProperty(exports, "__esModule", { value: true });
exports.p = void 0;
let p = {
    name: 'ok',
    price: 100,
    // 有了可索引签名，就算出现了interface里边没有定义的属性也没有问题
    account: 100,
    des: '111',
    [Symbol('123')]: 100,
    100: 'ok',
    fun() { }
};
exports.p = p;
