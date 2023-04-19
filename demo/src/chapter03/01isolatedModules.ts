interface AB {
	name: string
}
interface CD {
	name: string
}
/* 
	在tsconfig.json文件中 isolatedModules 配置项
	开启之后，可以检查export interface的情况
	ts当中的interface是ts专有的，那么如果说进行编译了话js里边是没有这一项的
	按照规范导出需要写成export type
*/
export type { AB, CD }