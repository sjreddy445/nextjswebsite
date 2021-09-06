import Api from '../../Config/Api'

export const payload = () => {
  return Api.get('headers/?type=PathFinder').then(result => {
    if (result.status == 200) {
      return result.data[0];
    }
    return {};
  })
}

export const getServiceVideo = () => {
  return Api.get('service-videos/?type=pathfinder').then(result => {
    console.log("result"), result
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