import Api from '../../Config/Api'

// export const payload = {
//   bgRq: false,
//   bgImg: 'ela.svg',
//   bgClr: "xlLight-grey-bg",
//   mainTitle1: "Privacy Policy", 
//   hideDemoBtn: true
// }

export const payload = () => {
  return Api.get('headers/?type=Privacy').then(result => {
    if (result.status == 200) {
      return result.data[0];
    }
    return {};
  })
}