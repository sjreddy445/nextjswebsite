import Api from '../../Config/Api'
export const payload = () => {
  return Api.get('blog-page-sections').then(result => {
    if (result.status == 200) {
      return result.data;
    }
    return {};
  })
}
export const allBVP = (url) => {
  return Api.get(url,{ params: { _limit: 6, _sort: "created_at:desc" } }).then(result => {
    if (result.status == 200) {
      return result.data;
    }
    return {};
  })
}