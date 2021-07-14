import Api from '../../Config/Api'
// export const payload = [
//     {
//         img: require("../../Assets/images/Products/mobility/screenshots/mobility-1.jpg").default.src,
//         imgAlt: "AI based workforce allocation"
//     },
//     {
//         img: require("../../Assets/images/Products/mobility/screenshots/mobility-2.jpg").default.src,
//         imgAlt: "AI based workforce allocation"
//     },
//     {
//         img: require("../../Assets/images/Products/mobility/screenshots/mobility-3.jpg").default.src,
//         imgAlt: "AI based workforce allocation"
//     },
//     {
//         img: require("../../Assets/images/Products/mobility/screenshots/mobility-4.jpg").default.src,
//         imgAlt: "AI based workforce allocation"
//     },
// ]

export const payload = () => {
    return Api.get('product-screenshots/?type=mobility').then(result => {
      if (result.status == 200) {
        return result.data;
      }
      return {};
    })
  }
