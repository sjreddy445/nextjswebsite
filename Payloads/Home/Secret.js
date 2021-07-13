import Api from '../../Config/Api'
// export const payload = {
//   mainTitle: "Our flagship product",
//   subTitle: "Pathfinder, an AI-based employee experience that helps you shape your career.",
//   imgUrl: require("../../Assets/images/Home/edge_graph.png").default.src,
//   youtube: "https://youtu.be/7jMkwj8cDTA"

// }


export const payload = () => {
  return Api.get('secrets').then(result => {
    if (result.status == 200) {
      return result.data[0];
    }
    return {};
  })
}

