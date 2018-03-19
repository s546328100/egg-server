'use strict';

module.exports = appInfo => {
    const config = (exports = {});
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1521007719312_3038';

    // add your config here
    config.middleware = ['errorHandler'];

    config.security = {
        csrf: {
            enable: false
        }
    };

    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
        credentials: true
    };

    config.mongoose = {
        url: 'mongodb://39.106.220.86:27017/Sss',
        options: {}
    };

    config.email = {
        username: 's546328100@163.com',
        password: 's983922645',
        host: 'smtp.163.com',
        sender: 's546328100@163.com'
    };

    return config;
};
