import Api from '../../Config/Api'


// export const payload = {
//     bgRq: false,
//     bgImg: 'sitemap.svg',
//     bgClr: "white-bg",
//     imgAlt: "Sitemap",
//     mainTitle1: "Sitemap.", 
//     hideDemoBtn: true
//   }


  export const payload = () => {
    return Api.get('headers/?type=Sitemap').then(result => {
      if (result.status == 200) {
        return result.data[0];
      }
      return {};
    })
  }