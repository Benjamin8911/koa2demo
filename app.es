import config from './config/config'
import Koa from 'koa';
import router from 'koa-simple-router';
import serve from 'koa-static';
import render from 'koa-swig';
import convert from 'koa-convert';
import initController from './controller/initController';
import co from 'co';
import 'babel-register';
import 'babel-polyfill';
const app = new Koa();
initController.init(app,router);
app.context.render = co.wrap(render({
    root: config.get('viewsDir'),
    autoscape: true,
    cache: 'memory',
    ext: 'html',
    writeBody: false
}));

//  静态资源文件
app.use(convert(serve(config.get('staticDir'))));
app.listen(config.get('port'), () => {
    console.log('Server is running');
});

export default app;