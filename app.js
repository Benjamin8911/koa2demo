'use strict';

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaSimpleRouter = require('koa-simple-router');

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaSwig = require('koa-swig');

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _koaConvert = require('koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _initController = require('./controller/initController');

var _initController2 = _interopRequireDefault(_initController);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

require('babel-register');

require('babel-polyfill');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  静态资源
var app = new _koa2.default();
_initController2.default.init(app, _koaSimpleRouter2.default);
app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
    root: _config2.default.get('viewsDir'),
    autoscape: true,
    cache: 'memory',
    ext: 'html',
    writeBody: false
}));

//  静态资源文件
app.use((0, _koaConvert2.default)((0, _koaStatic2.default)(_config2.default.get('publicDir'))));
app.listen(_config2.default.get('port'), function () {
    console.log('Server is running');
});
