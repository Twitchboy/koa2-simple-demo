const fetch = require('node-fetch');

const get = async (url, params) => {
    const response =  await fetch(url, {
        method: 'GET',
        headers: {},
        params: params
    });
    return await response.json();
};

const post = async (url, params) => {
    console.log('params', params);
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        // headers: { 'Content-Type': 'application/json' },
        body: params
    });
    return await response.json();
}

module.exports =  {
    get,
    post
}