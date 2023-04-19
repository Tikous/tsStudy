// 单例模式第二种实现方式

class DateUtil {
	static dateUtil: DateUtil
	static getInstance() {
		if (!this.dateUtil) {
			this.dateUtil = new DateUtil()
		}
		return this.dateUtil
	}
	private constructor() {
		console.log('创建对象。。。')
	}
	formatDate() {
		console.log('fomatDate')
	}
	diffDateByDay() {}
	diffDateByHour() {}
	timeConversion(restTime: number) {}
}

const dateUtil1 = DateUtil.getInstance()
const dateUtil2 = DateUtil.getInstance()
console.log(dateUtil1 === dateUtil2)

export {
	DateUtil
}