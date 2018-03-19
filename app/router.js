'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;
    router.get('/time/list', controller.time.list);
    router.post('/time/create', controller.time.create);
    router.post('/time/modify/:_id', controller.time.modify);
    router.post('/time/remove/:_id', controller.time.remove);

    router.post('/email/send', controller.email.send);
};
