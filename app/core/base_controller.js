const {Controller} = require('egg');

class BaseController extends Controller {
    success(data) {
        this.ctx.body = {
            code: 0,
            result: data
        };
    }

    fail(data, code = 1000) {
        this.ctx.body = {
            code: code,
            result: data
        };
    }
}

module.exports = BaseController;
