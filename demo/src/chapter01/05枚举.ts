// 用来存放一组固定常量的序列

/* 
	枚举分为数字枚举和字符串枚举
*/

// 数字枚举 数字枚举，设置了某一项之后，后边的项会自动递增
// 在编译之后，我们会发现数字枚举的底层是双向的映射
enum Week {
	Monday = 1,
	Tuesday,
	Wednesday,
	Thirsday,
	Friday,
	Saturday,
	Sunday
}
console.log(Week.Monday)
console.log(Week['Monday'])
// 反向取值
console.log(Week[1]) // Monday
console.log(Week[5]) // Friday

// 字符串枚举
enum WeekEnd {
	Monday = "Monday",
	Tuesday = "Tuesday",
	Wednesday = "Wednesday",
	Thirsday = "Thirsday",
	Friday = "Friday",
	Saturday = "Saturday",
	Sunday = "Sunday"
}
// 字符串枚举无法反向取值
console.log(WeekEnd.Monday)
console.log(WeekEnd["Monday"])