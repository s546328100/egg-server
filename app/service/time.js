const Service = require('egg').Service;

class TimeService extends Service {
    async list() {
        let result = await this.ctx.model.Time.find({});
        return result;
    }

    async create(body) {
        let {_id, title, start, end, backgroundColor} = body;

        let sDate = new Date(start);
        let eDate = new Date(end);

        let startHours = sDate.getHours() + (sDate.getMinutes() === 30 ? 0.5 : 0);
        let endHours = eDate.getHours() + (eDate.getMinutes() === 30 ? 0.5 : 0);
        let sum = (endHours - startHours) * 2;

        let date = {
            year: sDate.getFullYear(),
            month: sDate.getMonth() + 1,
            day: sDate.getDate(),
            startTime: sDate.getTime(),
            endTime: eDate.getTime()
        };

        let result = await this.ctx.model.Time.create({title, start, end, backgroundColor, date, _id, sum});
        return result;
    }

    async modify(_id, body) {
        let {start, end} = body;
        delete body._id;

        if (start && end) {
            let sDate = new Date(start);
            let eDate = new Date(end);

            let startHours = sDate.getHours() + (sDate.getMinutes() === 30 ? 0.5 : 0);
            let endHours = eDate.getHours() + (eDate.getMinutes() === 30 ? 0.5 : 0);
            body.sum = (endHours - startHours) * 2;

            body.date = {
                year: sDate.getFullYear(),
                month: sDate.getMonth() + 1,
                day: sDate.getDate(),
                startTime: sDate.getTime(),
                endTime: eDate.getTime()
            };
        }

        let result = await this.ctx.model.Time.findOneAndUpdate({_id}, {$set: body});
        return result;
    }

    async remove(_id) {
        let result = await this.ctx.model.Time.remove({_id});
        return result;
    }
}
module.exports = TimeService;
