'use strict';

const Controller = require('../core/base_controller');

class EmailController extends Controller {
    async send() {
        let {email} = this.ctx.request.body;
        let result = await this.ctx.service.email.send(email);
        this.ctx.body = result;
    }
}

module.exports = EmailController;
