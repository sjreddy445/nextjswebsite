import Api from '../../Config/Api'
// export const payload = {
//   bgRq: false,
//   bgImg: 'mobility.svg',
//   titleImg: "mobilityLogo", 
//   imgAlt: "getEdge Mobility tool",
//   subtitle: "Comprehensive employee view driving internal mobility",
//   subHeader: {
//     title : "Simplify reskill, invest or maintain decisions",
//     items: [
//       {
//         icon: "user-heart-dark",
//         msg: "Increase internal talent fulfilment percentages, driven by employee aspirations and organisation policies"
//       },
//       {
//         icon: "line-chart-dark",
//         msg: "Increase visibility to deployable employee pool"
//       },
//       {
//         icon: "timer-line-dark",
//         msg: "Decrease dependency on external fulfilment resulting in lower cost per hire"
//       }
//     ]
//   }
// }

export const payload = () => {
  return Api.get('headers/?type=Mobility').then(result => {
    if (result.status == 200) {
      return result.data[0];
    }
    return {};
  })
}