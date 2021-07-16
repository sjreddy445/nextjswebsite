import Api from '../../Config/Api'
export const payload = () => {
  return Api.get('blog-page-sections').then(result => {
    if (result.status == 200) {
      return result.data;
    }
    return {};
  })
}