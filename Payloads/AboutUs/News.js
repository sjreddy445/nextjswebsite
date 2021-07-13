import Api from '../../Config/Api'
// export const payload = [
//   {
//     url: "https://yourstory.com/2020/10/leveraging-ai-startup-edge-networks-talent-jobs"
//   },
//   {
//     url: "https://www.ungender.in/how-ai-can-eliminate-bias-make-hiring-inclusive-interview-aparna-devi-moola/"
//   },
//   {
//     url: "https://www.moneycontrol.com/news/trends/zoom-out-heres-a-peek-at-the-future-of-hiring-with-artificial-intelligence-6046541.html?__twitter_impression=true/amp"
//   },
//   {
//     url: "https://thestartuplab.in/how-edge-networks-is-leveraging-ai-and-helping-companies-take-the-right-talent-acquisition-decision/"
//   }
// ]


export const payload = () => {
  return Api.get('edge-news').then(result => {
    if (result.status == 200) {
      return result.data;
    }
    return {};
  })
}