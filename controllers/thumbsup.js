const fetch = require('../utils/fetch.js');

const fn_app_get = async (ctx, next) => {
    const url = 'http://127.0.0.1:8000/thumbsup/';
    await fetch.get(url)
        .then(res => {
            if (res.code === 200) {
                const data = res.data;
                ctx.response.status = 200;
            }
        })
        .catch(err => {
            console.log(err);
        })
}

const fn_app_post = async (ctx, next) => {
    const id = ctx.request.body.id || '';
    const url = 'http://127.0.0.1:8000/thumbsup/add';
    const data = `id=${id}`;
    await fetch.post(url, data)
                .then(res => {
                    if (res.code === 200) {
                        const data = res.data;
                        ctx.response.status = 200;
                        ctx.response.body = data;
                    }
                })
                .catch(err => {
                    console.log(err);
                });
}

module.exports = {
    "GET /thumbsup": fn_app_get,
    "POST /thumbsup": fn_app_post
};