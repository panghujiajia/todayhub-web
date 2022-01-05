import './index.css';
const arr = [
    {
        title: '陕西妇联回应孕妇在医院门口等2小时后流产,国药和科兴疫苗可预防奥密克戎重症',
        heat: '251.8',
        link: 'https://s.weibo.com/',
    },
    {
        title: '国药和科兴疫苗可预防奥密克戎重症',
        heat: '251.8',
        link: 'https://s.weibo.com/',
    },
    {
        title: '美国将幽门螺旋杆菌列为明确致癌物物物',
        heat: '综艺 559940',
        link: 'https://s.weibo.com/',
    },
    {
        title: '2岁宝宝泳池里拉肚子',
        heat: '251.8',
        link: 'https://s.weibo.com/',
    },
    {
        title: '西安疫情是武汉封城后最严重的一回',
        heat: '251.8',
        link: 'https://s.weibo.com/',
    },
    {
        title: '南京一男子地铁骚扰女性被扇耳光',
        heat: '251.8',
        link: 'https://s.weibo.com/',
    },
    {
        title: '郑州新增1例确诊9例无症状',
        heat: '251.8',
        link: 'https://s.weibo.com/',
    },
    {
        title: '已有13名中国航天员飞上太空',
        heat: '251.8',
        link: 'https://s.weibo.com/',
    },
    {
        title: '男生放假刚回家就被亲妈送去隔离',
        heat: '251.8',
        link: 'https://s.weibo.com/',
    },
];
const hotItem = [...arr, ...arr, ...arr].map((item, index) => {
    return (
        <div className="hot-item flex justify-between my-2">
            <div className="inline-flex flex-1">
                <span
                    className={[
                        'hot-number text-base text-right w-4 mr-2 text-gray-400 ',
                        index === 0 ? 'text-red-700 font-normal' : '',
                        index === 1 ? 'text-pink-600 font-normal' : '',
                        index === 2 ? 'text-yellow-400 font-normal' : '',
                    ].join('')}
                >
                    {index + 1}
                </span>
                <a href={item.link} className="flex-1" target="_blank">
                    <p className="hot-title text-gray-900 hover:underline hover:text-blue-600 hover:font-medium">
                        {item.title}
                    </p>
                </a>
            </div>
            <span className="hot-heat text-sm leading-6 ml-2 text-gray-400 text-right">
                {item.heat}万
            </span>
        </div>
    );
});
function Column() {
    return (
        <div className="hot-column-container rounded w-full mb-4 md:w-1/2 xl:w-1/3 2xl:w-1/4">
            <div className="mx-0 sm:mx-2 pb-4 bg-white">
                <div className="hot-classify font-bold p-4 shadow-sm w-full">
                    微博热搜
                </div>
                <div className="hot-content-wrap h-96 sm:h80 overflow-scroll pt-2 px-2 sm:px-4">
                    {hotItem}
                </div>
            </div>
        </div>
    );
}
export default Column;
