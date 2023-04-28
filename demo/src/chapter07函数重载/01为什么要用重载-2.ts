type Message = {
	id: number,
	type: MessageType,
	sendmessage: string
}
enum MessageType {
	'Image' = 'Image',
	'Audio' = 'Audio'
}
let messages: Message[] = [
	{
		id: 1,
		type: MessageType.Image,
		sendmessage: 'aaaaaa'
	},
	{
		id: 2,
		type: MessageType.Audio,
		sendmessage: 'bbbbb'
	},
	{
		id: 3,
		type: MessageType.Image,
		sendmessage: 'ccccc'
	},
	{
		id: 4,
		type: MessageType.Audio,
		sendmessage: 'ddddd'
	}
]

function searchMsg(condition: MessageType): Message[] // 重载签名
function searchMsg(condition: number): Message | undefined // 重载签名
function searchMsg(condition: MessageType | number): Message | undefined | Message[] { // 实现签名
	/* 
		实现签名的形参类型、个数，以及返回值的类型、个数必须完全兼容上边的重载签名
	*/
	if (typeof condition === 'number') {
		return messages.find(msg => condition === msg.id)
	} else {
		return messages.filter(msg => condition === msg.type)
	}
}
console.log(searchMsg(1))
searchMsg(MessageType.Image).forEach((item) => {
	console.log(item)
})

export {}