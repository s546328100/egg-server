const {Controller} = require('egg');

class BaseController extends Controller {
    success(data) {
        this.ctx.body = {
            code: 0,
            result: data
        };
    }
}

module.exports = BaseController;
