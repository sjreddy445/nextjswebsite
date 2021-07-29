import Api from '../../Config/Api'
export const payload = () => {
    return Api.get('footers').then(result => {
        if (result.status == 200) {
            return result.data[0];
        }
    })
}
export const socialLinks = () => {
    return Api.get('social-links').then(result => {
        if (result.status == 200) {
            return result.data[0];
        }
    })
}