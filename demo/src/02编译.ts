// tsc 文件名
let str: string = '123'

/* 
	编译配置：
	直接进行tsc编译了话，生成的js文件会被放在同级目录下，这样不好管理
	可以通过配置tsconfig.json来控制文件的输出路径
	配置"outDir": "./dist",  "rootDir": "./src"，然后在终端中在外层目录下执行tsc命令
*/


/* 
	编译优化：
	ts代码有错误的时候，我们直接进行tsc编译也是可以编译出来的
	但是我们希望如果有错误不让进行编译，就可以使用tsc --noEmitOnError命令来执行
	
	编译和运行同时进行: 使用ts-node + 文件名
*/
