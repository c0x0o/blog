var express = require('express');
var app = express();

var conf = require('./config');



/******************************************
 *
 * 第三方中间件
 *
 ******************************************/
 var bodyParser = require('body-parser');
 var multer = require('multer');



/******************************************
 *
 * 应用中间件
 *
 ******************************************/
var article = require('./src/article');



/******************************************
 *
 * TODO:启动预处理
 *
 ******************************************/
// 设置模板引擎jade
app.set('views', conf.path.template);
app.set('view engine', 'jade');



/******************************************
 *
 * 站点蓝图
 *
 ******************************************/
// 静态文件路由
app.use('/resource', express.static(
	conf.base+conf.path.static, 
	{
		index: false
	}
));

// 添加公用中间件

// for parsing application/json
//app.use(bodyParser.json()); 
// for parsing application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true })); 
// for parsing multipart/form-data
//app.use(multer()); 

// 文章模块


/******************************************
 *
 * 启动
 *
 ******************************************/
var server = app.listen(conf.server.port, function(){});