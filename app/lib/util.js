'use strict';

const crypto = require('crypto');

module.exports = {sleep, request, sign, uuid};

function sleep(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time);
    });
}

function request(obj) {
    let results = {};

    let promises = [];
    for (let key in obj) {
        let promise = obj[key];
        results[key] = undefined;

        if (promise && promise.then)
            promises.push(
                promise.then(function(result) {
                    results[key] = result;
                })
            );
        else results[key] = promise;
    }

    return Promise.all(promises).then(function() {
        return results;
    });
}

function sign(args, appSecret) {
    let keys = Object.keys(args);
    if (keys.length === 0) return '';
    let arr = keys.sort();
    let str = '';
    arr.forEach(key => (str += ''.concat(key, '=', args[key], '&')));
    str += appSecret;

    let md5 = crypto.createHash('md5');
    md5.update(str);
    return md5.digest('hex');
}

function uuid(len, radix) {
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    let uuid = [],
        i;
    radix = radix || chars.length;

    if (len) {
        // Compact form
        for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)];
    } else {
        // rfc4122, version 4 form
        let r;

        // rfc4122 requires these characters
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';

        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | (Math.random() * 16);
                uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
            }
        }
    }

    return uuid.join('');
}
