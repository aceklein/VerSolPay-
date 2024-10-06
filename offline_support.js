export const saveDataOffline = (key, data) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(data));
    }
};

export const getDataOffline = (key) => {
    if (typeof window !== 'undefined') {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }
};