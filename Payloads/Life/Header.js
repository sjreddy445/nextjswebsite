import Api from '../../Config/Api'
// export const payload = {
//   bgRq: false,
//   bgCover : require("../../Assets/images/Headers/life_at_edge.jpg").default.src,
//   bgClr: "white-bg rectangular bottomtext text-white bottomgradient",
//   mainTitle1: "Life @ EDGE", 
//   subtitle: "Come experience a heady mix of tech, talent and creativity. Fall in love with your job once more!",
//   hideDemoBtn: true
// }

export const payload = () => {
  return Api.get('headers/?type=Life').then(result => {
    if (result.status == 200) {
      return result.data[0];
    }
    return {};
  })
}