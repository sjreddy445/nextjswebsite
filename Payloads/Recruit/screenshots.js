import Api from '../../Config/Api'
// export const payload = [
//     {
//         img: require("../../Assets/images/Products/recruit/screenshots/Recruit-1.jpg").default.src,
//         imgAlt: "GetEdge HR talent Acquisition"
//     },
//     {
//         img: require("../../Assets/images/Products/recruit/screenshots/Recruit-2.jpg").default.src,
//         imgAlt: "GetEdge HR talent Acquisition"
//     },
//     {
//         img: require("../../Assets/images/Products/recruit/screenshots/Recruit-3.jpg").default.src,
//         imgAlt: "GetEdge HR talent Acquisition"
//     },
// ]

export const payload = () => {
    return Api.get('product-screenshots/?type=recruit').then(result => {
      if (result.status == 200) {
        return result.data;
      }
      return {};
    })
  }
