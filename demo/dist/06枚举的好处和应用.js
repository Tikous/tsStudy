"use strict";
// 有默认值和可以自增值，节省编码时间
// 语义清晰，可读性强
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumAudistStatus = void 0;
// const Status = {
// 	MANAGER_ADUIT_FAIL: -1,
// 	NO_ADUIT: 0,
// 	MANAGER_ADUIT_SUCCESS: 1,
// 	FINAL_ADUIT_SUCCESS: 2
// }
// // 审核类
// class MyAduit {
// 	这里status的类型引用了number，可读性不强
// 	getAduitStatus(status: number): void {
// 		if (status === Status.NO_ADUIT) {
// 			console.log('没有审核')
// 		} else if (status === Status.MANAGER_ADUIT_SUCCESS) {
// 			console.log('经理审核通过')
// 		} else if (status === Status.FINAL_ADUIT_SUCCESS) {
// 			console.log('财务审核通过')
// 		}
// 	}
// }
var EnumAudistStatus;
(function (EnumAudistStatus) {
    EnumAudistStatus[EnumAudistStatus["MANAGER_ADUIT_FAIL"] = -1] = "MANAGER_ADUIT_FAIL";
    EnumAudistStatus[EnumAudistStatus["NO_ADUIT"] = 0] = "NO_ADUIT";
    EnumAudistStatus[EnumAudistStatus["MANAGER_ADUIT_SUCCESS"] = 1] = "MANAGER_ADUIT_SUCCESS";
    EnumAudistStatus[EnumAudistStatus["FINAL_ADUIT_SUCCESS"] = 2] = "FINAL_ADUIT_SUCCESS";
})(EnumAudistStatus = exports.EnumAudistStatus || (exports.EnumAudistStatus = {}));
// 审核类
class MyAduit {
    getAduitStatus(status) {
        if (status === EnumAudistStatus.NO_ADUIT) {
            console.log('没有审核');
        }
        else if (status === EnumAudistStatus.MANAGER_ADUIT_SUCCESS) {
            console.log('经理审核通过');
        }
        else if (status === EnumAudistStatus.FINAL_ADUIT_SUCCESS) {
            console.log('财务审核通过');
        }
    }
}
const aduit = new MyAduit();
aduit.getAduitStatus(EnumAudistStatus.NO_ADUIT);
