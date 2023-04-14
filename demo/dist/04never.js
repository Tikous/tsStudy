"use strict";
// never的实际场景
function checkType(dataFlow) {
    if (typeof dataFlow === 'string') {
        console.log('字符串类型', dataFlow.length);
    }
    else if (typeof dataFlow === 'number') {
        console.log('数值类型', dataFlow.toFixed(2));
    }
    else {
        // 由于联合类型中的string和number已经被过滤掉，那么它剩下的就是never类型了
        console.log('dataFlow目前为never类型', dataFlow);
    }
}
checkType('123');
checkType(123);
