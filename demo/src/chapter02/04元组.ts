/* 
	满足以下3点的数组就是元组
		1.定义时每个元素的类型都确定
		2.元素值的数据类型必须是当前元素定义的类型
		3.元素值的个数必须和定义时的个数相同
*/
// 元组一旦确定下来不可以改变
let salary: [string, number, number, number, number]
	= ['wangwu', 5000, 5000, 5000, 5000]

export { salary }