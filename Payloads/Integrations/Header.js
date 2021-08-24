
import Api from '../../Config/Api'
export const payload = () => {
  return Api.get('headers/?type=integrations').then(result => {
    if (result.status == 200) {
      return result.data[0];
    }
    return {};
  })
}