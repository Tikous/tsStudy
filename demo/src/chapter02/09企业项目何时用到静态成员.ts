class DateUtil {
	// 静态方法不是越多越好
	static formatDate() {}
	static diffDateByDay() {}
	static diffDateByHour() {}
	static timeConversion(restTime: number) {}
}

DateUtil.formatDate()

/* 
	当我们new这个时间工具类的实例的时候，我们不需要new多个实例出来
	这个时候我们可以使用两种方法解决：
		1. 静态方法； 2. 单例模式
*/

export {}