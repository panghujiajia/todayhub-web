const env = process.env.NODE_ENV;

console.log(env);

const configs = {
    // 生产环境
    production: {
        url: 'https://api.todayhub.cn/todayhub',
    },
    // 开发环境
    development: {
        url: 'https://api.todayhub.cn/todayhub',
    },
};

export default configs[env];
