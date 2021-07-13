import Api from '../../Config/Api'
export const payload = {
  mainTitle: "Brands we work with.",
  subTitle: "Enterprises in IT Services, BFSI",
  // brands: [
  //   {
  //     imgUrl: require("../../Assets/images/brands/wipro.png").default.src,
  //     alt: "Wipro"
  //   },
  //   {
  //     imgUrl: require("../../Assets/images/brands/Daimler.png").default.src,
  //     alt: "Daimler"
  //   },
  //   {
  //     imgUrl: require("../../Assets/images/brands/NTT_Data.png").default.src,
  //     alt: "NTT Data"
  //   },
  //   {
  //     imgUrl: require("../../Assets/images/brands/HDFC.png").default.src,
  //     alt: "HDFC"
  //   },
  //   {
  //     imgUrl: require("../../Assets/images/brands/HCL.png").default.src,
  //     alt: "HCL"
  //   },
  //   {
  //     imgUrl: require("../../Assets/images/brands/UST.png").default.src,
  //     alt: "UST Global"
  //   },
  //   {
  //     imgUrl: require("../../Assets/images/brands/virtusa.png").default.src,
  //     alt: "Virtusa"
  //   }
  // ]
}

export const getBrands = () => {
  return Api.get('brands').then(result => {
    if (result.status == 200) {
      return result.data;
    }
    return {};
  })
}