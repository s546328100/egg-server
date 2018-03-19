module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const UserSchema = new Schema({
        email: { type: String },
        userName: { type: String },
        password: { type: String },
        state: { type: Number },
        createTime: { type: Number },
        updateTime: { type: Number },
    });

    return mongoose.model('User', UserSchema, 'User');
};
