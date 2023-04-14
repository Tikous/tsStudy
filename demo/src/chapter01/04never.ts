// never的实际场景

// checkType 方法穷尽了 DataFlow 的所有可能类型
// 使用 never 避免出现未来扩展新的类没有对象类型的实现，目的就是写出类型绝对安全的代码
type DataFlow = string | number
function checkType (dataFlow: DataFlow) {
	if (typeof dataFlow === 'string') {
		console.log('字符串类型', dataFlow.length)
	} else if (typeof dataFlow === 'number') {
		console.log('数值类型', dataFlow.toFixed(2))
	} else {
		// 由于联合类型中的string和number已经被过滤掉，那么它剩下的就是never类型了
		console.log('dataFlow目前为never类型', dataFlow)
	}
}
checkType('123')
checkType(123)