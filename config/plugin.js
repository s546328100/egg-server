'use strict';

// had enabled by egg
// exports.static = true;
exports.mongoose = {
    enable: true,
    package: 'egg-mongoose'
};

exports.cors = {
    enable: true,
    package: 'egg-cors'
};

exports.email = {
    enable: true,
    package: 'egg-mail'
};
