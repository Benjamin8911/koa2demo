import indexModel from '../model/indexModel'
const indexController = {
    index() {
        return async(ctx, next) => {
            ctx.body = await ctx.render('index.html',{
                title:"点赞"
            });
        }
    },
    update() {
        return async(ctx, next) => {
            const indexM = new indexModel();
            const data = indexM.update();
            ctx.body = data;
        }
    }
}
export default indexController;