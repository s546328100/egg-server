const Service = require('egg').Service;

class UserService extends Service {
    async create(body) {
        body.state = 1;
        body.createTime = new Date().getTime();
        body.updateTime = new Date().getTime();

        let result = await this.ctx.model.User.create(body);
        return result;
    }
}
module.exports = UserService;
