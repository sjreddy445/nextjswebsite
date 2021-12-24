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

export const allBlog = () => {
    return Api.get(`blogs/`).then(result => {
        if (result.status == 200) {
            return result.data;
        }
        return {};
    })
}


export const allBlogWithparmas = (pageNumber) => {
    return Api.get('blogs/', { params: { _limit: 80, _start: 0 + (pageNumber * 80), _sort: "created_at:desc" } }).then(result => {
        if (result.status == 200) {
            return result.data;
        }
    })
}


export const allBlogCount = () => {
    return Api.get(`blogs/count`).then(result => {
        if (result.status == 200) {
            return result.data;
        }
        return {};
    })
}


export const blogPopup = () => {
    return Api.get(`blog-popups`).then(result => {
        if (result.status == 200) {
            return result.data[0];
        }
        return {};
    })
}


