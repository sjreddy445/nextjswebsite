import Api from '../../Config/Api'

// export const payload = {
//     isContact: true,
//     normalText: 'Book a Demo Now',
//     strongText: "EDGE RECRUIT -",
//     redirectTo: '/contact'
// }


export const payload = () => {
  return Api.get('top-banners').then(result => {
    if (result.status == 200) {
      return result.data[0];
    }
    return {};
  })
}

export const topNavPayload = () => {
  return Api.get('top-navs').then(result => {
    if (result.status == 200) {
      return result.data;
    }
    return {};
  })
}

