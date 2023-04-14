type TypeStuObj = { username: string, age: number, phone: string }

function info (stuObj: TypeStuObj) {
	console.log(stuObj.username, stuObj.age)
	return 3
}

let stuObj: TypeStuObj = { username: 'wangwu', age: 23, phone: '111' }
info(stuObj)

// 函数解构
function subInfo({username, age}: TypeStuObj) {
	console.log(username, age)
	return 3
}
subInfo(stuObj)

export {}
