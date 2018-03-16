'use strict';

const Controller = require('../core/base_controller');

let events = [];

class TimeController extends Controller {
    async list() {
        let result = await this.ctx.service.time.list();
        // this.success(result);
        this.ctx.body = result;
    }

    async create() {
        let body = this.ctx.request.body;
        let result = await this.ctx.service.time.create(body);
        this.success('信息已录入。');
    }

    async modify() {
      let {_id} = this.ctx.params;
      let body = this.ctx.request.body;

      let result = await this.ctx.service.time.modify(_id, body);
      this.success('信息已修改。');
    }

    async remove() {
      let {_id} = this.ctx.params;
      let result = await this.ctx.service.time.remove(_id);
      this.success('信息已删除。');  
    }
}

module.exports = TimeController;
