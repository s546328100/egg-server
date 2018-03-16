module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const TimeSchema = new Schema({
        title: { type: String },
        start: { type: String },
        end: { type: String },
        backgroundColor: { type: String },
        sum: { type: Number },
        date: {
            year: { type: Number },
            month: { type: Number },
            day: { type: Number },
            startTime: { type: Number },
            endTime: { type: Number },
        },
        _id: { type: String },
    },{
        _id: false
    });

    return mongoose.model('Time', TimeSchema, 'Time');
};
