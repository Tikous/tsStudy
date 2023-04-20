/* 
	"typeRoots": ["node_modules/@types"]
	设置第三方依赖的声明文件的目录
	因为第三方依赖引入之后，往往是js的代码，那么我们需要安装对应的@types依赖
	@types里边放置的都是一些.d.ts声明文件
	这样一来引入的第三方的依赖就可以正常的使用了
*/

/* 
	"types": ["node"]
	当我们使用了类似于require()这种node的commonjs规范的时候
	我们首先需要安装@types/node
	然后需要在types这里给添加上node类型，这样ts可以识别出来
	
	这个配置项一般只需要配置 node 即可，就可以支持node相关的依赖
*/
// const fs = require('fs')

// export { fs }