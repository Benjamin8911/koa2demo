class PraiseButton {
    constructor(num, element) {
        this.num = num;
        this.element = element;
    }
    clickAction() {
        this.element.click(() => {
            debounce(()=>{
                if (this.num < 10) {
                    //  取消蒙版
                    this.element.css('-webkit-filter', 'grayscale(0)');
                    //  开启动画
                    $('#animation').addClass('num');
                    this.num = add(this.num);
                    //  异步请求php接口
                    axios.get('/add').then(function() { console.log('数据库点赞+1') });
                    //  结束动画
                    setTimeout(function() {
                        $('#animation').removeClass('num');
                    }, 500);
                } else {
                    //  显示蒙版
                    this.element.css('-webkit-filter', 'grayscale(1)');
                    this.num = 0;
                }
            }, 1000, 1000)
        });
    }
}
class Thumb extends PraiseButton {
    constructor(num, element) {
        super(num, element);
    }
}
export
default {
    Thumb
}