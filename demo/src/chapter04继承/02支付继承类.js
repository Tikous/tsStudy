"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Pay = /** @class */ (function () {
    function Pay(bank_card_no, balance, cost, tokenid) {
        this.bank_card_no = bank_card_no;
        this.balance = balance;
        this.cost = cost;
        this.tokenid = tokenid;
    }
    Pay.prototype.pay = function () {
        console.log('银行卡卡号', this.bank_card_no);
    };
    return Pay;
}());
var PayType;
(function (PayType) {
    PayType[PayType["WebChat"] = 1] = "WebChat";
    PayType[PayType["AliPay"] = 2] = "AliPay";
    PayType[PayType["CloudFlashPayment"] = 3] = "CloudFlashPayment";
})(PayType || (PayType = {}));
// 银行卡支付
var BankPay = /** @class */ (function (_super) {
    __extends(BankPay, _super);
    function BankPay(bank_card_no, balance, cost, tokenid, bank_network, bankno_type, bank_card_psw, custname) {
        var _this = _super.call(this, bank_card_no, balance, cost, tokenid) || this;
        _this.bank_network = bank_network;
        _this.bankno_type = bankno_type;
        _this.bank_card_psw = bank_card_psw;
        _this.custname = custname;
        return _this;
    }
    return BankPay;
}(Pay));
var MobilePay = /** @class */ (function (_super) {
    __extends(MobilePay, _super);
    function MobilePay(bank_card_no, balance, cost, tokenid, type, change, opendid, appid) {
        var _this = _super.call(this, bank_card_no, balance, cost, tokenid) || this;
        _this.type = type;
        _this.change = change;
        _this.opendid = opendid;
        _this.appid = appid;
        return _this;
    }
    MobilePay.prototype.pay = function () {
        // super相当于父类
        _super.prototype.pay.call(this);
        console.log('完成支付');
    };
    return MobilePay;
}(Pay));
var webChatPay = new MobilePay('1111', 100, 300, 'safdc', PayType.AliPay, 15, 'asdfsdafas', 'safsdafsaf');
console.log(webChatPay);
webChatPay.pay();
