const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

const del = require('del');
const webserver = require('gulp-webserver');

/* css文件 */
const cssHandler = function() {
	return gulp.src('./src/css/*.css')
		.pipe(autoprefixer())
		.pipe(cssmin())
		.pipe(gulp.dest('./dist/css'))
}


/* js文件 */
const jsHandler = function(){
    return gulp.src('./src/js/*.js')          
    .pipe(babel({presets:['@babel/env']}))    
    .pipe(uglify())                           
    .pipe(gulp.dest('./dist/js'))             
}

/* html文件 */
const htmlHandler = function(){
    return gulp.src('./src/pages/*.*')    // 设定打包的html文件位置
           .pipe(htmlmin({
               removeAttributeQuotes : true ,       //  打包时删除属性上的双引号
               removeComments : true ,              //  删除程序中的注释内容
               collapseBooleanAttributes : true ,   //  删除布尔属性中定义的属性值
               collapseWhitespace : true ,          //  删除程序中多余的空格,只删除标签之前的空格,标签内部和内容的空格不会删除
               minifyCSS : true ,                   //  压缩HTML标签中的css程序代码
               minifyJS : true ,                    //  压缩html标签中的js代码
           }))
           .pipe(gulp.dest('./dist/pages'))         // 将 打包压缩的程序,存储在指定位置上
}


/* 图片 */
const imgHandler = function(){
    return gulp.src('./src/images/**/*')        // 指定要移动的图片的文件夹位置
           .pipe(gulp.dest('./dist/images'))   // 指定移动到的文件夹位置
}

/* 资源 */
const libHandler = function(){
    return gulp.src('./src/lib/**/*')        // 指定要移动的资源的文件夹位置
           .pipe(gulp.dest('./dist/lib'))   // 指定移动到的文件夹位置
}

const webserverHandler = function(){
    return gulp.src('./dist')           // 指定的路径是压缩文件的路径,也就是在服务器上运行的都是压缩文件,提高页面中程序的执行效率
    .pipe(webserver({
        host : '10.36.133.243',            // 定义的域名地址,目前使用本地域名地址127.0.0.1,实际项目中,根据项目需求而定
        port : 3000 ,                   // 定义端口号
        open : './pages/index.html' ,   // 默认打开执行的网页,也就是 输入 127.0.0.1:8080 直接打开的网页
                                        // 之前在 node.js 中 通过内置http模块 执行访问请求时 必须有 文件名称  127.0.0.1:8080/index.html
                                        // 在 gulp 中 搭建的服务器 , 有默认的打开页面设定, 直接输入 127.0.0.1:8080 即可
        livereload : true ,             // 热启动 当文件内容,代码,css,js等发生改变时,会自动重新加载页面,执行效果,不用手动刷新                                       
		
		//代理
		proxies:[
			
			{
				source:'/goods_list',
				target:'http://127.0.0.1/gaoqingpingshop/dist/lib/server/goods_list.php'
				// target:'./dist/lib/server/goods_list'
			},
			{
				source:'/goods_detail',
				target:'http://127.0.0.1/gaoqingpingshop/dist/lib/server/goods_detail.php'
				// target:'./dist/lib/server/goods_list.php'
			}
		]
    }))
}

const delHandler = function() {
	return del(['./dist']);
}

const watchHandler = function(){
    gulp.watch('./src/css/*.css' , cssHandler);         // 监听 css 文件
    gulp.watch('./src/js/*.js' , jsHandler);            // 监听 js 文件
    gulp.watch('./src/pages/*.html' , htmlHandler);     // 监听 html 文件
    gulp.watch('./src/images/**/*' , imgHandler);        // 监听 图片 文件  
	gulp.watch('./src/lib/**/*');
}

//将任务功能和/或组合操作组合成同时执行的较大操作
module.exports.default = gulp.series(
    delHandler,
    gulp.parallel(cssHandler,jsHandler,htmlHandler,imgHandler,libHandler),   //  默认的,第一次,初始化,先执行一次所有的打包规范
    webserverHandler,       // 通过 gulp 启动一个服务器 gulp 运行到 webserverHandler 会自动打开设定的默认页面,不用做任何操作
    watchHandler,
	
)


// cssHandler();
// delHandler();
// watchHandler();


//创建任务
// gulp.task('first',()=>{
// 	console.log("我是第一个gulp执行的任务");
// 	gulp.src('./src/css*.css')
// 	    .pipe(gulp.dest('./dist/css'));
// })

// gulp.task('htmlmin',()=>{
// 	gulp.src('./src/*.html')
// 	    .pipe(htmlmin({collapseWhitespace:true}))
// 		.pipe(gulp.dest('./dist'));
// })

// gulp.task('autoprefixer',()=>{
// 	return gulp.src('./src/css/*.css')
// 	       .pipe(autoprefixer({
// 	                cascade: true, //是否美化属性值 默认：true 像这样：
// 	                remove:true //是否去掉不必要的前缀 默认：true 
// 	            }))
// 	            .pipe(gulp.dest('./dist/css'));
// })

// gulp.task('cssmin',()=>{
// 	gulp.src('./src/css/*.css')
// 	    .pipe(cssmin())
// 	    .pipe(gulp.dest('./dist/css'));
// })

// gulp.task('jsmin',()=>{
// 	gulp.src('./src/js/*.js')
// 	        .pipe(babel({presets: ['@babel/env']}))
// 			.pipe(uglify())
// 	        .pipe(gulp.dest('./dist/js'))
// })


// gulp.task('copy',()=>{
// 	gulp.src('./src/images/*')
// 	.pipe(gulp.dest('./dist/images'))
// })


// gulp.task('del',()=>{
// 	return del(['./dist']);
// })
