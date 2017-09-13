const http = require('http');
const indexController = {
    index() {
        return async(ctx, next) => {
            ctx.body = await ctx.render('index.html');
        }
    },
    update() {
        return async(ctx, next) => {
            ctx.response.status = 200;
            ctx.response.message = "{status:'ok'}";
            //http.get('http://localhost:8888/add.php', (res) => { console.log('更新数据库点赞成功') });
        }
    }
}
export default indexController;