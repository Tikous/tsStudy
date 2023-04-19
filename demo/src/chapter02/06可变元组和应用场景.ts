// 可变元组
let customers: [string, number, string, ...any[]] = 
['wangwu', 23, 'xxx路', '111', 22312]

// 可变元组解构
let [custname, age, address, ...rest]: [string, number, string, ...any] = 
['wangwu', 23, 'xxx路', '111', 22312]
console.log('rest', rest)