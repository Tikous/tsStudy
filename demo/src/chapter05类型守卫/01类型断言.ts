/* 
	类型断言，类型转换是需要有重叠的
	不能从一个string转为number
	
	类型断言一定是前后之间有关系的
	一般我们常常用在将父类转换为子类的这种情况
*/
export class Vechile {
	static count: number = 3
	public brand: string
	public vechileNo: string
	public days: number
	public total: number = 0
	constructor(brand_: string, vechileNo_: string, days_: number) {
		this.brand = brand_
		this.vechileNo = vechileNo_
		this.days = days_
	}
	public caclulateRent() {
		console.log(this.brand + '车牌号为' + this.vechileNo + '开始被租')
		return 0
	}
}

class Car extends Vechile {
	public type: string
	constructor(brand_: string, vechileNo_: string, days_: number, type_: string) {
		super(brand_, vechileNo_, days_)
		this.type = type_
	}
	public getPriceByType() {
		let rentMoneyByDay: number = 0
		if (this.type === '普拉多巡洋舰') {
			rentMoneyByDay = 800
		} else if (this.type === '凯美瑞旗舰版') {
			rentMoneyByDay = 400
		} else if (this.type === '威驰智行版') {
			rentMoneyByDay = 200
		}
		return rentMoneyByDay
	}
	public caclulateRent() {
		super.caclulateRent()
		return this.days * this.getPriceByType()
	}
}

class Bus extends Vechile {
	public seatNum: number
	constructor(brand_: string, vechileNo_: string, days_: number, seatNum_: number) {
		super(brand_, vechileNo_, days_)
		this.seatNum = seatNum_
	}
	public getPriceBySeatNum() {
		let rentMoneyByDay: number = 0
		if (this.seatNum <= 16) {
			rentMoneyByDay = 800
		} else if (this.seatNum > 16) {
			rentMoneyByDay = 1600
		}
		return rentMoneyByDay
	}
	public caclulateRent() {
		super.caclulateRent()
		return this.days * this.getPriceBySeatNum()
	}
}

class Truck extends Vechile {
	ton!: number
	constructor(brand_: string, type_: string, days_: number, ton_: number) {
		super(brand_, type_, days_)
		this.ton = ton_
	}
	CalRentPrice() {
		let rentMoneyByDay: number = 0
		if (this.ton <= 500) {
			rentMoneyByDay = 750
		} else if (this.ton > 500) {
			rentMoneyByDay = 1350
		}
		return rentMoneyByDay
	}
	public calRent() {
		return this.CalRentPrice()
	}
}


class Customer {
	rent(vechile: Vechile ) {
		/* 
			在这里我们拿到vechile之后，在编译之前它的类型我们并不确定
			如果我们想要拿到Car里边的type了话是不可以的
			那么这个时候我们可以使用类型断言来改变它的类型
		*/
		let car = vechile as Car
		console.log(car.type)
		return car.caclulateRent()
	}
}

let cust: Customer = new Customer()
let car: Car = new Car('AA', 'ss', 20, '普拉多巡洋舰')
cust.rent(car)

export { Car, Bus, Truck, Customer }