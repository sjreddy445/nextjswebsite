import Api from '../../Config/Api'
// export const payload = {
//     logo: [
//         {
//             imgUrl: require("../../Assets/images/awards/award-IE20.png").default.src,
//             link:'https://media.londonandpartners.com/news/india-s-best-companies-selected-for-mayor-of-london-s-ie20-business-programme',
//             alt: "IE20"
//         },
//         {
//             imgUrl: require("../../Assets/images/awards/award-deloitte.png").default.src,
//             link:'https://www2.deloitte.com/content/dam/Deloitte/in/Documents/technology-media-telecommunications/in-tmt-techfast50-2016-winners-noexp.pdf',
//             alt: "Deloitte",
//         },
//         {
//             imgUrl: require("../../Assets/images/awards/award-google.png").default.src,
//             link:'https://developers.googleblog.com/2017/05/announcing-fourth-class-of-launchpad.html',
//             alt: "Google Launchpad",
//         },
//         {
//             imgUrl: require("../../Assets/images/awards/award-emerge.png").default.src,
//             link:'https://inc42.com/buzz/meet-top-50-emerging-startups-nasscom-emerge-50-2016-awards/',
//             alt: "Emerge"
//         },
//     ]
// }

export const payload = () => {
    return Api.get('awards').then(result => {
      if (result.status == 200) {
        return result.data;
      }
      return {};
    })
  }