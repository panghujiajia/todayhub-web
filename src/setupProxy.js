const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://192.168.0.12:8888',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',
            },
        })
    );
};
