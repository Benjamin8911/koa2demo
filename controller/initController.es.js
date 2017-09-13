import indexController from './indexController'
const initController = {
    init(app, router) {
        app.use(router(_ => {
        	_.get('/index/index', indexController.index());
            _.get('/index/add', indexController.update());
        }));
    }
}
export default initController;