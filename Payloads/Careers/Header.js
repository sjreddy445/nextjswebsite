import Api from '../../Config/Api'
// export const payload = {
//   bgRq: false,
//   bgImg: 'careers.svg',
//   bgClr: "orange-bg",
//   mainTitle1: "Careers.",
//   imgAlt: "career planning and development",
//   // mainTitle2: "People.",
//   subtitle: "Find opportunities to work with us", 
//   hideDemoBtn: true
// } 

export const payload = () => {
  return Api.get('headers/?type=Career').then(result => {
    if (result.status == 200) {
      return result.data[0];
    }
    return {};
  })
}