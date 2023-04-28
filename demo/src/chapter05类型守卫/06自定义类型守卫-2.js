"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cal = void 0;
function cal(num) {
    if (isNum(num)) {
        num + 2;
    }
    else {
        num.split('');
    }
}
exports.cal = cal;
function isNum(num) {
    return typeof num === 'number';
}
