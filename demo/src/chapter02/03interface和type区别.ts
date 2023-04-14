/* 
	1.定义类型的范围不同
		interface只能定义对象类型
		type可以定义任何类型，基本类型、联合类型、交叉类型、元组
	2.接口或类可以extends一个或者多个接口，type不行
	3.用type交叉类型&可以让类型中的成员合并成一个新type类型，但接口不能
	4.接口可以合并声明
*/
interface Car {
	brandNo: string
}
interface Plane {
	No: string
	brandNo: string
}
type TypeVechile = Car | Plane
let vechile: TypeVechile = { brandNo: '奔驰', No: '111'}

// 继承
// interface A extends B,C

// type交叉类型
type Group = { groupName: string, memberNum: number }
type GroupInfoLog = { info: string, happen: string }
type GroupMember = Group & GroupInfoLog

let data: GroupMember = {
	groupName: '001',
	memberNum: 10,
	info: '集体爬山',
	happen: '111'
}

// 合并声明
interface Error {
	name: string
}
interface Error {
	message: string
	stack?: string
}
let error: Error = {
	message: '空指针',
	name: 'NullPointException'
}

export { data, error }