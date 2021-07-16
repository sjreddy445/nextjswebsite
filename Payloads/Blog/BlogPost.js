import Api from '../../Config/Api'
export const blogs = (url) => {
    return Api.get(url).then(result => {
        if (result.status == 200) {
            return result.data;
        }
        return {};
    })
}
export const videos = (url) => {
    return Api.get(url).then(result => {
        if (result.status == 200) {
            return result.data;
        }
        return {};
    })
}

export const podcast = (url) => {
    return Api.get(url, { params: { _limit: 6, _sort: "episode:asc" } }).then(result => {
        if (result.status == 200) {
            return result.data;
        }
        return {};
    })
}

export const singleBlog = (id) => {
    return Api.get(`blogs/?slug=${id}`).then(result => {
        if (result.status == 200) {
            return result.data[0];
        }
        return {};
    })
}