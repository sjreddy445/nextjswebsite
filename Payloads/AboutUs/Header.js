import Api from '../../Config/Api'
// export const payload = {
//   bgRq: false,
//   bgImg: 'about-us.svg',
//   bgClr: "orange-bg",
//   imgAlt: "getEdge company",
//   mainTitle1: "People’s",   
//   mainTitle2: "People.",
//   subtitle: "Helping you make smart talent decisions", 
//   hideDemoBtn: true
// } 

export const payload = () => {
  return Api.get('headers/?type=AboutUs').then(result => {
    if (result.status == 200) {
      return result.data[0];
    }
    return {};
  })
}