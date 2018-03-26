'use strict';

const Controller = require('../core/base_controller');

class UserController extends Controller {
    async create() {
        let body = this.ctx.request.body;
        let {email, code} = body;

        let verifyCode = await this.app.redis.get(`email_${email}`);
        if (!code || code !== verifyCode) return this.fail('验证码错误！');

        let result = await this.ctx.service.user.create(body);
        this.success(result);
    }
}

module.exports = UserController;
