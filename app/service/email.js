const Service = require('egg').Service;
const {uuid} = require('../lib/util');

class EmailService extends Service {
    async send(email) {
        const {ctx, app} = this;
        let text = uuid(8, 16);
        let attachment = [
            {
                data: `<div style="width: 520px; background: #f2f2f2; padding: 4px; margin: 0 auto;">
                            <div style="background: #fff;">
                                <div style="padding: 10px;">
                                    <h1 style="font-family: 'Playball', cursive; font-size: 2em; border-bottom: 1px solid #f2f2f2; padding: 5px 0; margin-bottom: 60px; margin-top: 0;">
                                        邮箱验证
                                    </h1>
                                    <p style="font-weight: bold; font-size: 18px;">
                                        您的验证码为：<span style="color: #df3539;">${text}</span>
                                    </p>
                                    <p style="color: #666; margin-bottom: 80px; font-style: italic;">
                                        有效时间为 30 分钟，请及时注册!
                                    </p>
                                    <p style="color: #666;">
                                        任何问题请联系：<a href="mailto:546328100@qq.com" target="_blank">546328100@qq.com</a>，感谢支持！
                                    </p>
                                </div>
                            </div>
                        </div>`,
                alternative: true
            }
        ];
        let result = await app.email.sendEmail('邮箱验证码 By Time-Gold', text, email, attachment);
        return result;
    }
}
module.exports = EmailService;
