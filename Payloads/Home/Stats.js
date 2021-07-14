import Api from '../../Config/Api'
// export const payload = [
//   {
//     number: "40%",
//     text: "Reduction in time to fulfil."
//   },
//   {
//     number: "2X",
//     text: "Improvement in fitment."
//   },
//   {
//     number: "2%",
//     text: "Improvement in employee utilization."
//   }
// ]

export const payload = () => {
  return Api.get('product-stats/?type=home').then(result => {
    if (result.status == 200) {
      return result.data;
    }
    return {};
  })
}
