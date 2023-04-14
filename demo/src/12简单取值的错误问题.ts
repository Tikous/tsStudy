let obj = {username: 'wangwu', age: 23}
// 使用let定义的时候，这个username不是一个固定的字符串，因此在获取的时候类型判定会报错
// let username = 'username'
const username = 'username'
let u = obj[username]

// 这种使用方式是错误的
let obj1:object = {username1: 'wangwu', age: 23}
const username1 = 'username1'
let u1 = obj1[username1]