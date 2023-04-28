class Order {
	orderid!: boolean
	ordername!: string
	static count: number
	printOrd() {}
	static getCount() {}
}

// type OrdIdType = Order['orderid']

// 获取类当中属性的名称，并将这些名称生成联合类型的type
// type OrdInstanceAttrNames = keyof Order

/* 
	使用T extends object，目的是为了约束传进来的类型是object类型的
*/
type InstancePropKeys<T extends object> = keyof T
type OrdPropKeys = InstancePropKeys<Order>