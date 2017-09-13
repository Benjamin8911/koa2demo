'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = function () {
    function PraiseButton(num, element) {
        _classCallCheck(this, PraiseButton);

        this.num = num;
        this.element = element;
    }

    _createClass(PraiseButton, [{
        key: 'clickAction',
        value: function clickAction() {
            var _this = this;

            this.element.click(function () {
                debounce(function () {
                    if (_this.num < 10) {
                        //  取消蒙版
                        _this.element.css('-webkit-filter', 'grayscale(0)');
                        //  开启动画
                        $('#animation').addClass('num');
                        _this.num = add(_this.num);
                        //  异步请求php接口
                        axios.get('/index/add').then(function () {
                            console.log('数据库点赞+1');
                        });
                        //  结束动画
                        setTimeout(function () {
                            $('#animation').removeClass('num');
                        }, 500);
                    } else {
                        //  显示蒙版
                        _this.element.css('-webkit-filter', 'grayscale(1)');
                        _this.num = 0;
                    }
                }, 1000, 1000);
            });
        }
    }]);

    return PraiseButton;
}();

var Thumb = function (_PraiseButton) {
    _inherits(Thumb, _PraiseButton);

    function Thumb(num, element) {
        _classCallCheck(this, Thumb);

        return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, num, element));
    }

    return Thumb;
}(PraiseButton);

exports.default = {
    Thumb: Thumb
};
