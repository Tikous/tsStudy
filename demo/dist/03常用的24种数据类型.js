"use strict";
/*
    基本的数据类型
    number, string, boolean, symbol, null, undefined
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.n = exports.obj3 = exports.obj2 = exports.obj1 = exports.str = exports.data3 = exports.data2 = exports.data = void 0;
/*
    根类型 Object, {}
    设置Object，那么它可以是任何类型的父类型，所以可以设置任何值
    {}是Object的简写，两者其实是一样的
*/
let data = 3;
exports.data = data;
/*
    对象类型
    Array, object, function
*/
let data2 = {};
exports.data2 = data2;
let data3 = 123;
exports.data3 = data3;
// 枚举类型 enum
/*
    其他特殊类型
    any, unknown, never, void, 元组（tuple）,可变元组
*/
/*
    合成类型
    联合类型，交叉类型
*/
// 联合类型 或的关系
let str = 'abc';
exports.str = str;
let obj1 = { username: '123' };
exports.obj1 = obj1;
let obj2 = { age: 23 };
exports.obj2 = obj2;
let obj3 = {
    username: '123',
    age: 123
};
exports.obj3 = obj3;
let n = 3; // 只能给1、2、3
exports.n = n;
function isStartUp(increase) {
    if (increase) {
        console.log('open');
    }
    else {
        console.log('close');
    }
}
isStartUp(1);
