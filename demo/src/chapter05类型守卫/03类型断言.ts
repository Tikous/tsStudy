let symid = Symbol('userid')
let user = { [symid]: 101, username: 'wangwu', age: 22 }
let uname = 'username'
let userid = user[symid]
let username = user[uname as any]
test({ usernam: 'wangwu', age: 23})
function test(data: unknown) {
	console.log(data)
}

export {}