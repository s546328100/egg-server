module.exports = () => {
    return async function(ctx, next) {
        try {
            await next();
        } catch (err) {
        }
    };
};
