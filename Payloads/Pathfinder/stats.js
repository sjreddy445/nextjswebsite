import Api from '../../Config/Api'
// export const payload = [
//     {
//       number: "50%",
//       text: "increase in inbound internal fulfilment through IJP"
//     },
//     {
//       number: "5%",
//       text: "improvement in bench optimization"
//     },
//     {
//       number: "10%",
//       text: "reduction in Attrition due to bench issues"
//     }
//   ]

  export const payload = () => {
    return Api.get('product-stats/?type=pathfinder').then(result => {
      if (result.status == 200) {
        return result.data;
      }
      return {};
    })
  }
