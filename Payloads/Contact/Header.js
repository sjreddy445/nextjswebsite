import Api from '../../Config/Api'
// export const payload = {
//   bgRq: false,
//   bgImg: 'about-us.svg',
//   bgClr: "dark-orange-bg",
//   imgAlt: "getEdge talent management company",
//   mainTitle1: "Hello.", 
//   hideDemoBtn: true
// }

export const payload = () => {
  return Api.get('headers/?type=Contact').then(result => {
    if (result.status == 200) {
      return result.data[0];
    }
    return {};
  })
}