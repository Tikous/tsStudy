"use strict";
/*
    相同点：any和unknown可以是任何类的父类
    不同点：any也可以是任何类的子类
           不能拿unknown类型的变量来获取任何属性和方法
    
    等号左边的是父类类型，右边的是子类类型
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.xxxFun = exports.ref = exports.getData2 = exports.getData1 = exports.num1 = exports.data1 = exports.num = void 0;
// let num: Array<string> = ['ab', 'df']
// let data: any = num
// any也可以是任何类的子类
let data = ['ab', 'df'];
let num = data;
exports.num = num;
let data1 = ['ab', 'df'];
exports.data1 = data1;
let num1 = data1;
exports.num1 = num1;
function getData1(data) {
    console.log(data.name);
}
exports.getData1 = getData1;
function getData2(data) {
    // 不能拿unknown类型的变量来获取任何属性和方法
    // 即使传递过来的参数当中有相应的属性也不能获取到
    console.log(data.name);
}
exports.getData2 = getData2;
// 当我只是想将参数传递到某个方法然后再进行后续传递，可以使用unknown
function ref(value) {
    return xxxFun(value);
}
exports.ref = ref;
function xxxFun(value) {
}
exports.xxxFun = xxxFun;
