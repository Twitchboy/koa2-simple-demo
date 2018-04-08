const fs = require('fs');

/**
 * *  处理 js 文件, 将内部的路由，划分、匹配好
 * @param {*} router 
 * @param {*} mapping 
 */
function addMapping (router, mapping) {
    for (let url in mapping) {
        if (url.startsWith('GET ')) {
            // 如果url类似"GET xxx":
            let path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } 
        else if (url.startsWith('POST ')){
            // 如果url类似"POST xxx":
            let path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } 
        else {
            // 无效 URL
            console.log(`invalid URL: ${url}`);
        }
    }
}

/**
 * * 添加 router 控制器
 * @param {object} router 
 */
function addControllers (router, dir) {
    // 读取 controllers 目录下所有文件
    fs.readdirSync(__dirname + '/' + dir)
    // 过滤出'.js' 文件
    .filter((f) => {
        return f.endsWith('.js');
    })
    // 处理每个 js 文件
    .forEach((f) => {
        console.log(`process controller: ${f}...`);
        // 导入 js 文件
        let mapping = require(__dirname + '/' + dir + '/' + f);
        // 匹对路由，注册到 router 中间件里
        addMapping(router, mapping);
    });
}

module.exports = (dir) => {
    let controllers_dir = dir || 'controllers', // 如果不传参数，扫描目录默认为'controllers'
        router = require('koa-router')();
    addControllers(router, controllers_dir);

    return router.routes();
}
