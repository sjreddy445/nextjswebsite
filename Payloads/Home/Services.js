import Api from '../../Config/Api'
export const payload = {
  title: "Our solutions are personalised to the problem statement.",
  // serviceList : [
  //   {
  //     title: "Demand-supply forecasting",
  //   },
  //   {
  //     title: "Skill gap analysis",
  //   },
  //   {
  //     title: "Learning",
  //   },
  //   {
  //     title: "Changing skills mix",
  //   },
  //   {
  //     title: "Productivity improvement",
  //   },
  //   {
  //     title: "Flight risk",
  //   },
  //   {
  //     title: "Talent acquisition",
  //   },
  //   {
  //     title: "Resource optimization",
  //   },
  // ]
}

export const getServices = () => {
  return Api.get('services').then(result => {
    if (result.status == 200) {
      return result.data;
    }
    return {};
  })
}