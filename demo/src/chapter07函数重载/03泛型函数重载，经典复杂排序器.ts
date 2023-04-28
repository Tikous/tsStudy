import { quickSort } from './02真实应用泛型函数'

var chineseArr = ['武汉', '郑州', '石家庄', '太原', '济南']

let cnStr = '武汉' // w
let cnStr2 = '郑州' // z
console.log(cnStr.localeCompare(cnStr2, 'zh-CN')) // 前边比后边小，返回-1；前边比后边大，返回1

export {}