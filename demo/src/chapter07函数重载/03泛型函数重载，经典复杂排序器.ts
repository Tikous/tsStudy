import { quickSort } from './02真实应用泛型函数'

var chineseArr = ['武汉', '郑州', '石家庄', '太原', '济南']

let cnStr = '武汉' // w
let cnStr2 = '郑州' // z
console.log(cnStr.localeCompare(cnStr2, 'zh-CN')) // 前边比后边小，返回-1；前边比后边大，返回1

function sortChinese(arr: Array<string>): Array<string> {
	return arr.sort(function(preStr, curStr) {
		return preStr.localeCompare(curStr, 'zh-CN')
	})
	return arr
}

console.log(sortChinese(chineseArr))

// 判断是否是中文
function isChinese(arr: Array<string>):boolean {
	var pattern = /[\u4e00-\u9fa5]/g
	// 字符串中一个是中文，就返回true
	return chineseArr.some(function(item) {
		return pattern.test(item)
	})
}

export {}