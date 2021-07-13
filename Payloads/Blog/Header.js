
import Api from '../../Config/Api'

// export const payload = {
//   bgRq: false,
//   bgImg: 'blog.svg',
//   bgClr: "light-grey-bg",
//   mainTitle1: "Blog +",
//   mainTitle2: "Resources",
//   subtitle: "A directory of resources to keep you moving forward",
//   hideDemoBtn: true
// }

export const payload = () => {
  return Api.get('headers/?type=Blog').then(result => {
    if (result.status == 200) {
      return result.data[0];
    }
    return {};
  })
}