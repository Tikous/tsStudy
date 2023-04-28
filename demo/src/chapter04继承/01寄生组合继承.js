function Vechile(brandNo, price) {
	this.brandNo = brandNo
	this.price = price
}
Vechile.prototype.sale = function() {
	console.log(this + '销售')
}

function Bus(brandNo, price, seatNo) {
	Vechile.apply(this, [brandNo, price])
	this.seatNo = seatNo
}

function protoExtendsWithMdl(ParentClass, SonClass) {
	function Middle() {
		this.constructor = SonClass
	}
	Middle.prototype = ParentClass.prototype
	SonClass.prototype = new Middle()
}
protoExtendsWithMdl(Vechile, Bus)

let bus = new Bus('大巴', 20, 64)
console.log('bus', bus)
bus.sale()