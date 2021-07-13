
import Api from '../../Config/Api'
// export const payload = {
//   bgRq: false,
//   bgImg: 'women_header.png',
//   imgAlt: "getedge HR solutions",
//   bgClr: "light-sliver-bg",
//   mainTitle1: "Talent decisions,",
//   mainTitle2:"Simplified.",
//   subtitle: "A future-proof Talent Marketplace solution "
// }


export const payload = () => {
  return Api.get('headers/?type=Home').then(result => {
    if (result.status == 200) {
      return result.data[0];
    }
    return {};
  })
}