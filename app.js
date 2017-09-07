const http = require('http');
const Koa = require('koa');
const path = require('path');
const router = require('koa-simple-router');
const serve = require('koa-static'); //  静态资源
const convert = require('koa-convert'); //  koa1转换器
const render = require('koa-swig'); //  模板引擎
const co = require('co'); //  
const app = new Koa();

app.context.render = co.wrap(render({
    root: path.join(__dirname, './views'),
    autoscape: true,
    cache: 'memory',
    ext: 'html',
    writeBody: false
}));
app.use(router(_ => {
    _.get('/add', async(ctx, next) => {
        ctx.response.status = 200;
        ctx.response.message = "{status:'ok'}";
        http.get('http://localhost:8888/add.php', (res) => { console.log('更新数据库点赞成功') });
    });
    _.get('/index/index', async(ctx, next) => {
        ctx.body = await ctx.render('index.html');
    });
}));
//  静态资源文件
app.use(convert(serve(path.join(__dirname, './public'))));
app.listen(3000, () => {
    console.log('Server is running');
});