import Api from '../../Config/Api'

export const payload = () => {
  return Api.get('headers/?type=Recruit').then(result => {
    if (result.status == 200) {
      return result.data[0];
    }
    return {};
  })
}


export const getServiceVideo = () => {
  return Api.get('service-videos/?type=recruit').then(result => {
    if (result.status == 200) {
      if (result.data.length > 0) {
        return result.data[0];
      }
      else {
        return null;
      }
    }
    return null;
  })
}