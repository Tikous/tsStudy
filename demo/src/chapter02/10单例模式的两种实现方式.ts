// 单例模式：一个类只允许外部获取到它的唯一一个实例对象

// 单例模式第一种实现方式
class DateUtil {
	// 在内部声明静态的的实例，这样在外部调用的时候，不管调用几次都指向一个值
	static dataUtil = new DateUtil() // 立即创建单例模式，饿汉式单例模式
	// 将constructor设置为私有的，那么这个时候外部就无法new这个类
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
console.log('abc')
const dataUtil1 = DateUtil.dataUtil
const dataUtil2 = DateUtil.dataUtil
console.log(dataUtil1 === dataUtil2) // true
dataUtil1.formatDate()

/* 
	输出顺序：
		创建对象。。。
		abc
		true
		fomatDate
	执行输出之后，会发现很特别的一点就是“创建对象”先输出，
	这其实算是一种缺陷，因为什么都还没有做就先执行了构造方法，消耗了空间
*/

export {
	DateUtil
}