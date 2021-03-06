import Api from '../../Config/Api'
// export const payload = [
//     {
//         img: require("../../Assets/images/Products/pathfinder/screenshots/Pathfinder-1.jpg").default.src,
//         imgAlt: "getEdge Pathfinder AI"
//     },
//     {
//         img: require("../../Assets/images/Products/pathfinder/screenshots/Pathfinder-2.jpg").default.src,
//         imgAlt: "getEdge Pathfinder AI"
//     },
//     {
//         img: require("../../Assets/images/Products/pathfinder/screenshots/Pathfinder-3.jpg").default.src,
//         imgAlt: "getEdge Pathfinder AI"
//     },
// ]

export const payload = () => {
    return Api.get('product-screenshots/?type=pathfinder').then(result => {
      if (result.status == 200) {
        return result.data;
      }
      return {};
    })
  }
