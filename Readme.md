# Koa 学习

作为一个WEB服务框架，都是围绕核心服务展开的;

什么是核心服务？

接收一个客服端 HTTP 请求，然后服务会响应，请求和响应简还有一道解析的过程；
在解析请求、响应请求的中间会有一些第三方的 中间件 （日志、表单解析...）来增强服务的能力；
Koa 至少要提供 请求、解析、响应数据以及中间件这些核心能力的封装，同时还需要有一个能够串连他们执行上下的能力，单个请求周期角度来看 web服务的能力。
从整个网站、后端服务来看，能够提供请求、响应、解析、中间件、http流程全链路这些服务能力的综合体来看作成一个应用服务对象。

```
==================

HTTP 接收 解析 响应

中间件   执行上下文

==================

全放到 KOA 对应的就是： 

=====================
Application Context
Request     Response
Middlewares 
Session     Cookie

```

