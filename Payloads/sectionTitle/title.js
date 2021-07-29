import Api from '../../Config/Api'
export const payload = (data) => {
    return Api.get(`section-titles/?type=${data}`).then(result => {
        if (result.status == 200) {
            return result.data[0];
        }
        else {
            return {};
        }
    })
}
