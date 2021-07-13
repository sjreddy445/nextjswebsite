import Api from '../../Config/Api'
// export const payload = [
//   {
//     url: 'https://youtu.be/iFCVqi2C_OE',
//     title: 'NASSCOM: HR Summit 2018 - Session XI A: Panel Discussion'
//   },
//   {
//     url: 'https://www.youtube.com/watch?v=u7c86oNUe4M',
//     title: 'Future of Artificial Intelligence | Arjun Pratap | TEDxSMIT'
//   },
//   {
//     url: 'https://www.youtube.com/watch?v=D4XRcUO7VcA',
//     title: 'Arjun Pratap, founder & CEO of EdGE Networks at BW HR Strategy Conclave Dec 2017'
//   },
// ]

export const payload = () => {
  return Api.get('life-videos').then(result => {
    if (result.status == 200) {
      return result.data;
    }
    return {};
  })
}