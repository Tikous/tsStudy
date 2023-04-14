type ResolveType = (resolve_success: any) => any
type RejectType = (reject_fail: any) => any

class Promise {
	public resolveFunc!: ResolveType
	public rejectFunc!: RejectType
	constructor(promiseParams:(resolve: ResolveType, reject: RejectType) => any) {
		this.resolveFunc = (resolve_success: any): any => {
			console.log(resolve_success)
		}
		this.rejectFunc = (reject_fail: any): any => {
			console.log(reject_fail)
		}
		promiseParams(this.resolveFunc, this.rejectFunc)
	}
	
}

new Promise((resolve: ResolveType, reject: RejectType) => {
	resolve('成功了')
	reject('失败了')
})

export {}