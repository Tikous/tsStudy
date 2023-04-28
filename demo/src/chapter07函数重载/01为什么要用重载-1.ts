type Message = {
	id: number,
	type: MessageType,
	sendmessage: string
}
enum MessageType {
	'Image' = 1,
	'Audio' = 2
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

// 可以根据id或者type来进行搜索
function searchMsg(condition: MessageType | number): Message | undefined | Message[] {
	if (typeof condition === 'number') {
		return messages.find(msg => condition === msg.id)
	} else {
		return messages.filter(msg => condition === msg.type)
	}
}
/* 
	直接使用类型断言，可以拿到提示，但是这种写法显得代码很长，不好理解
	一般这种类型断言是最后的处理手段
*/
// (searchMsg(1) as Message).id
// (searchMsg(MessageType.Image) as Message[]).forEach((item) => {})