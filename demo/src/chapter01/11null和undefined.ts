// 生命undefined类型，这样属性不需要被赋值也能输出
let str: string|undefined
console.log('str:', str)

function fn(data?:string) {
	// 单纯这么写会报错
	// data.toString()
	
	if(data)data.toString()
	data?.toString()
	data!.toString()
}
fn()

// any、unknown、undefined类型可以接受undefined值
// any、unknown、null类型可以接受null值
let data: any = undefined
let data1: undefined = undefined
let data2: unknown = undefined

export {
	data,
	data1,
	data2
}