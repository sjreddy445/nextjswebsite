import Api from '../../Config/Api'
// export const payload = [
//     {
//       number: "10%",
//       text: "Increase in Internal fulfilment rate"
//     },
//     {
//       number: "50%",
//       text: "Improvement in bench optimization"
//     },
//     {
//       number: "60%",
//       text: "Reduction in time spent by hiring manager"
//     },
//     {
//         number: "20%",
//         text: "Reduction in TAT to fill demands"
//       }
//   ]

export const payload = () => {
  return Api.get('product-stats/?type=pathfinder').then(result => {
    if (result.status == 200) {
      return result.data;
    }
    return {};
  })
}
