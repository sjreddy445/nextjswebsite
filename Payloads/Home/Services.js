import Api from '../../Config/Api'


export const getServices = () => {
  return Api.get('services').then(result => {
    if (result.status == 200) {
      return result.data;
    }
    return {};
  })
}

export const getServiceVideo = () => {
  return Api.get('service-videos/?type=home').then(result => {
    if (result.status == 200) {
      return result.data[0];
    }
    return {};
  })
}