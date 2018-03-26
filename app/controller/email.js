'use strict';

const Controller = require('../core/base_controller');

class EmailController extends Controller {
    async send() {
        let {email} = this.ctx.request.body;
        let result = await this.ctx.service.email.send(email);
        if (result.code === 0) {
            await this.app.redis.setex(`email_${email}`, 60 * 30, result.msg.text);
            this.success('邮箱验证码已发送，请注意查收。');
        } else {
            this.fail('邮箱验证码发送失败，请稍后再试！');
        }
    }
}

module.exports = EmailController;
