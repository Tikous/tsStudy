/* 
	在使用baseUrl和path来设置了别名之后
	只是支持我们可以引入
	但是在编译运行阶段则需要依靠第三方工具，如webpack、vite等的支持
*/

import { a } from '@/chapter03/one'

console.log(a)