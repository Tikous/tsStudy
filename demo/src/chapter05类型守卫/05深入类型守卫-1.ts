class Pay {
	bank_card_no: string // 捆绑银行卡号
	balance: number // 银行卡余额
	cost: number // 消费费用
	tokenid: string // 登录后用户访问令牌
	constructor(bank_card_no: string, balance: number, cost: number, tokenid: string) {
		this.bank_card_no = bank_card_no
		this.balance = balance
		this.cost = cost
		this.tokenid = tokenid
	}
	pay() {
		console.log('银行卡卡号', this.bank_card_no)
	}
}

enum PayType {
	WebChat = 1,
	AliPay = 2,
	CloudFlashPayment = 3
}

// 银行卡支付
class BankPay extends Pay {
	bank_network: string // 银行网点
	bankno_type: string // 银行卡类型
	bank_card_psw: string // 银行卡密码
	custname: string // 顾客姓名
	constructor(bank_card_no: string, balance: number, cost: number, tokenid: string,
	bank_network: string, bankno_type: string, bank_card_psw: string, custname: string) {
		super(bank_card_no, balance, cost, tokenid)
		this.bank_network = bank_network
		this.bankno_type = bankno_type
		this.bank_card_psw = bank_card_psw
		this.custname = custname
	}
}

class MobilePay extends Pay {
	type: PayType
	change: number // 支付平台零钱
	opendid: string // 用户识别身份id
	appid: string // 小程序 appid
	constructor(bank_card_no: string, balance: number, cost: number, tokenid: string,
	type: PayType, change: number, opendid: string, appid: string
	) {
		super(bank_card_no, balance, cost, tokenid)
		this.type = type
		this.change = change
		this.opendid = opendid
		this.appid = appid
	}
	pay() {
		// super相当于父类
		super.pay()
		console.log('完成支付')
	}
	// ......
}

class Customer {
	pay(payMethod: BankPay | MobilePay) {
		// 使用in的类型守卫写法，判断这个方法中是否含有对应的属性
		if ('appid' in payMethod) {
			payMethod.appid
		}
	}
}

let webChatPay = new MobilePay('111', 300, 100, 'safasdf', PayType.WebChat, 10, '4466', 'sdfdsfsdf')
webChatPay.pay()
let cust = new Customer()
cust.pay(webChatPay)

export {}