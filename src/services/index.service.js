import { $http } from './index';

export const $getHotData = async () => {
    try {
        const res = await $http.get('/');
        const { status, data } = res.data;
        if (status === 200) {
            return data;
        }
        return false;
    } catch (err) {
        return false;
    }
};

export const $getHotDataById = async id => {
    try {
        const res = await $http.get(`/item/${id}`);
        const { status, data } = res.data;
        if (status === 200) {
            return data;
        }
        return false;
    } catch (err) {
        return false;
    }
};
