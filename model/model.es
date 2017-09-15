import rp from 'request-promise';
class indexModel {
    constructor(ctx) {
        this.ctx = ctx;
    }
    update() {
        const options = {
            method: "GET",
            url: "http://localhost:8888/praise.php"
        }
        return new Promise((resolve, reject) => {
            rp(options).then(result => {
                const info = JSON.parse(result);
                if (info.success) {
                    resolve({ data: 1 });
                } else {
                    reject({ data: 0 });
                }
            });
        });
    }
}
export default indexModel;