const Service = require('egg').Service;

class TimeService extends Service {
    async list() {
        let result = await this.ctx.model.Time.find({});
        return result;
    }

    async create(body) {
        let {_id, title, start, end, backgroundColor} = body;

        let _date = new Date(start);
        let date = {
            year: _date.getFullYear(),
            month: _date.getMonth() + 1,
            day: _date.getDate(),
            startTime: _date.getTime(),
            endTime: new Date(end).getTime()
        };

        let result = await this.ctx.model.Time.create({title, start, end, backgroundColor, date, _id});
        return result;
    }

    async modify(_id, body) {
        delete body._id;
        let result = await this.ctx.model.Time.findOneAndUpdate({_id}, {$set: body});
        return result;
    }

    async remove(_id) {
        let result = await this.ctx.model.Time.remove({_id});
        return result;
    }
}
module.exports = TimeService;
