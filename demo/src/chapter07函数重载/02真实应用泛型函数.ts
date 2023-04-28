// 快速排序
function quickSort<E>(arr: Array<E>): Array<E> {
	if (arr.length < 2) return arr
	var left: Array<any> = []
	var right: Array<any> = []
	var mid = arr.splice(Math.floor(arr.length / 2), 1)[0]
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < mid) {
			left.push(arr[i])
		} else {
			right.push(arr[i])
		}
	}
	return quickSort(left).concat(mid, quickSort(right))
}
var numArr = [3, 1, 8.5, 9, 20, 15, 17, 8]
const result = quickSort(numArr)
result.forEach((item) => {
	console.log(item)
})
var strArr = ['bc', 'ccc', 'aaa', 'qqq']
const strResult = quickSort(strArr)
strResult.forEach((item) => {
	console.log(item)
})
export { quickSort }