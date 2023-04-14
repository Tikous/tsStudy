"use strict";
// 用来存放一组固定常量的序列
/*
    枚举分为数字枚举和字符串枚举
*/
// 数字枚举 数字枚举，设置了某一项之后，后边的项会自动递增
// 在编译之后，我们会发现数字枚举的底层是双向的映射
var Week;
(function (Week) {
    Week[Week["Monday"] = 1] = "Monday";
    Week[Week["Tuesday"] = 2] = "Tuesday";
    Week[Week["Wednesday"] = 3] = "Wednesday";
    Week[Week["Thirsday"] = 4] = "Thirsday";
    Week[Week["Friday"] = 5] = "Friday";
    Week[Week["Saturday"] = 6] = "Saturday";
    Week[Week["Sunday"] = 7] = "Sunday";
})(Week || (Week = {}));
console.log(Week.Monday);
console.log(Week['Monday']);
// 反向取值
console.log(Week[1]); // Monday
console.log(Week[5]); // Friday
// 字符串枚举
var WeekEnd;
(function (WeekEnd) {
    WeekEnd["Monday"] = "Monday";
    WeekEnd["Tuesday"] = "Tuesday";
    WeekEnd["Wednesday"] = "Wednesday";
    WeekEnd["Thirsday"] = "Thirsday";
    WeekEnd["Friday"] = "Friday";
    WeekEnd["Saturday"] = "Saturday";
    WeekEnd["Sunday"] = "Sunday";
})(WeekEnd || (WeekEnd = {}));
// 字符串枚举无法反向取值
console.log(WeekEnd.Monday);
console.log(WeekEnd["Monday"]);
