// 使用as const，可以使数组或者对象真正变成常量，其中的每一项都不可改变
const account = [10, 40, 50, 60, 90] as const

account[1] = 100
