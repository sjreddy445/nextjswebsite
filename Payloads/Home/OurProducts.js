import Api from '../../Config/Api'
// export const payload = [
//   {
//     logo: require('../../Assets/images/Products/pathfinderLogo.svg').default.src,
//     caption: "Talent Transformation, Simplified..",
//     alt: "Edge Pathfinder",
//     pageUrl: "pathfinder",
//     captionClass: "text-white",
//     bgColor: "#181e2e",
//     imgUrl : require('../../Assets/images/Products/pathfinder/slider/pathfinder-bg.svg').default.src
//   },
//   {
//     logo: require('../../Assets/images/Products/recruitLogo.svg').default.src,
//     caption: "Simplify reskill, invest or maintain decisions.",
//     alt: "Edge Recruit",
//     pageUrl: "recruit",
//     bgColor: "#ededed", 
//     imgUrl : require('../../Assets/images/Products/recruit/slider/recruit-bg.svg').default.src
//   },
//   {
//     logo: require('../../Assets/images/Products/mobilityLogo.svg').default.src,
//     caption: "Talent Acquisition, Simplified.",
//     alt: "Edge Mobility",
//     pageUrl: "mobility",
//     bgColor: "#ffebde", 
//     imgUrl : require('../../Assets/images/Products/mobility/slider/mobility-bg.svg').default.src
//   },
// ]


export const payload = () => {
  return Api.get('our-products').then(result => {
    if (result.status == 200) {
      return result.data;
    }
    return {};
  })
}