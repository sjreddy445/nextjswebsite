import Api from '../../Config/Api'
// export const payload = [
//     {
//       number: "30%",
//       text: "Reduce in overall Time to Hire"
//     },
//     {
//       number: "3X",
//       text: "Faster Screening of Profiles"
//     },
//     {
//       number: "60%",
//       text: "Reduction in Job Posting to Shortlist Time"
//     },
//     {
//         number: "10%",
//         text: "Reduction in Dependency on Job Boards"
//       }
//   ]

  export const payload = () => {
    return Api.get('product-stats/?type=recruit').then(result => {
      if (result.status == 200) {
        return result.data;
      }
      return {};
    })
  }

