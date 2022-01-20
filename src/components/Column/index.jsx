import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import zh from 'dayjs/locale/zh';
dayjs.extend(relativeTime);
dayjs.locale(zh);
const refresh = (id, onAppRefresh) => {
    onAppRefresh(id);
};
const formatDate = time => {
    return dayjs(time).fromNow();
};
function Column(props) {
    const { name, data, id, onAppRefresh, create_time } = props;
    const hotItem = data.map((item, index) => {
        return (
            <div className="flex justify-between my-2" key={index}>
                <div className="inline-flex flex-1">
                    <span
                        className={[
                            'text-base text-right w-4 mr-2 text-gray-400 ',
                            index === 0 ? 'text-red-700 font-normal' : '',
                            index === 1 ? 'text-pink-600 font-normal' : '',
                            index === 2 ? 'text-yellow-400 font-normal' : '',
                        ].join('')}
                    >
                        {index + 1}
                    </span>
                    <a
                        href={item.link}
                        className="flex-1"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <p className="text-gray-900 text-base hover:underline mb-0 hover:text-blue-600 hover:font-medium">
                            {item.title}
                        </p>
                    </a>
                </div>
                <span className="text-sm leading-6 ml-2 text-gray-400 text-right">
                    {item.extra}
                </span>
            </div>
        );
    });
    return (
        <div className="rounded w-full mb-4 md:w-1/2 xl:w-1/3 2xl:w-1/4">
            <div className="mx-0 sm:mx-2 pb-4 bg-white">
                <div className=" p-4 shadow-sm w-full flex justify-between">
                    <div className="flex items-center">
                        <h2 className="font-bold mr-2 text-lg">{name}</h2>
                        <span>{formatDate(create_time)}</span>
                    </div>
                    <span
                        className="cursor-pointer"
                        onClick={() => refresh(id, onAppRefresh)}
                    >
                        <svg
                            t="1642651614844"
                            className="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="4371"
                            width="20"
                            height="20"
                        >
                            <path
                                d="M684.032 403.456q-17.408-8.192-15.872-22.016t11.776-22.016q3.072-2.048 19.968-15.872t41.472-33.28q-43.008-49.152-102.4-77.312t-129.024-28.16q-64.512 0-120.832 24.064t-98.304 66.048-66.048 98.304-24.064 120.832q0 63.488 24.064 119.808t66.048 98.304 98.304 66.048 120.832 24.064q53.248 0 100.864-16.896t87.04-47.616 67.584-72.192 41.472-90.624q7.168-23.552 26.624-38.912t46.08-15.36q31.744 0 53.76 22.528t22.016 53.248q0 14.336-5.12 27.648-21.504 71.68-63.488 132.096t-99.84 103.936-128.512 68.096-148.48 24.576q-95.232 0-179.2-35.84t-145.92-98.304-98.304-145.92-36.352-178.688 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352q105.472 0 195.584 43.52t153.6 118.272q23.552-17.408 39.424-30.208t19.968-15.872q6.144-5.12 13.312-7.68t13.312 0 10.752 10.752 6.656 24.576q1.024 9.216 2.048 31.232t2.048 51.2 1.024 60.416-1.024 58.88q-1.024 34.816-16.384 50.176-8.192 8.192-24.576 9.216t-34.816-3.072q-27.648-6.144-60.928-13.312t-63.488-14.848-53.248-14.336-29.184-9.728z"
                                p-id="4372"
                                fill="#515151"
                            ></path>
                        </svg>
                    </span>
                </div>
                <div className="h-96 sm:h80 overflow-scroll pt-2 px-2 sm:px-4">
                    {hotItem}
                </div>
            </div>
        </div>
    );
}
export default Column;
