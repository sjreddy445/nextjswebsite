import Api from '../../Config/Api'
// export const payload = {
//   bgRq: false,
//   bgImg: 'recruit.svg',
//   titleImg: "recruitLogo", 
//   imgAlt: "getedge Recruit Platform",
//   subtitle: "Talent Acquisition, Simplified.",
//   subHeader: {
//     title : "Take faster & better recruitment decisions",
//     items: [
//       {
//         icon: "vip-diamond",
//         msg: "Reduce your hiring cycle time; Leverage AI driven powerful search & match capabilities"
//       },
//       {
//         icon: "timer-line-dark",
//         msg: "Source across multiple channels from one application; including job boards, social networking sites and ATS database pool"
//       },
//       {
//         icon: "user-follow",
//         msg: "With various levers at your disposal, find the right person for the right job and improve the quality of hire"
//       }
//     ]
//   }
// }

export const payload = () => {
  return Api.get('headers/?type=Recruit').then(result => {
    if (result.status == 200) {
      return result.data[0];
    }
    return {};
  })
}
