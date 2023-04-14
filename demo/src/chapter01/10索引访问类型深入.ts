const symid = Symbol('production')
interface Product {
	[symid]: number | string,
	name: string,
	price: number,
	account: number,
	buy(): void
}

type A = Product['name']
// type A = Product.name // 不可用
type B = Product['account' | 'price']
type C = Product[typeof symid]

type PKeys = keyof Product // 相当于："name"|"price"|"account"|"buy"|typeof symid
let pKeys: PKeys = "account"
/* 
	等同于: let pKeys: "name"|"price"|"account"|"buy"|typeof symid
*/

// 这种写法可以将Product当中的类型一一列举出来
type AllKeys<T> = T extends any?T:never
type PKesy2 = AllKeys<keyof Product>

export {
	A, B, C, pKeys, PKesy2
}