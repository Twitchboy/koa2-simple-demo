const indexHtml = `
    <form action="/signin" method="post">
        <p>Name: <input name="name" value="koa" type="text"/></p>
        <p>Password: <input name="password" type="password" /></p>
        <p><input type="submit" value="Submit" /></p>
    </form>
`;

const fn_index = async (ctx, next) => {
    ctx.response.body = indexHtml;
}

const fn_signin = async (ctx, next) => {
    const name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`Signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '123') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    }
    else {
        ctx.response.body = `
            <h1>Login failed!</h1>
            <p><a href="/">Try again</a></p>
        `;

    }
}

module.exports = {
    'GET /': fn_index,
    'POST /signin': fn_signin
}
