import Api from '../../Config/Api'

// export const payload = [
//   {
//     name: "Arjun Pratap",
//     title: "CEO",
//     imgUrl: require("../../Assets/images/people/arjun.png").default.src,
//     desc: "Worked with tech organizations like SpeedERA Networks and Akamai Technologies Under his leadership, EDGE Networks raised its ‘Series A’ funding, and has been awarded numerous accolades in the field of HR tech"
//   },
//   {
//     name: "Dinesh Menon",
//     title: "Head of Business Operations",
//     imgUrl: require("../../Assets/images/people/dinesh.png").default.src,
//     desc: "Has earlier led HR strategy for industry behemoths such as IBM and JPMorgan Chase. Most recently he led business strategy & Ops for an E Com transformation startup before joining EDGE "
//   },
//   {
//     name: "Jacob Chandy Varghese",
//     title: "Head of Engineering",
//     imgUrl: require("../../Assets/images/people/jacob.png").default.src,
//     desc: "Has over two decades of global experience in Product Engineering leadership roles"
//   },
//   {
//     name: "Suranjan Pramanik",
//     title: "Chief Business Officer",
//     imgUrl: require("../../Assets/images/people/suranjan-pramanik.png").default.src,
//     desc: "Suranjan heads our North America operations as we set up. He manages Sales and Marketing across Edge. He is based in Plano, Texas."
//   }, 
//   {
//     name: "Rahul Kulhari",
//     title: "Head of Data Science",
//     imgUrl: require("../../Assets/images/people/rahul.png").default.src,
//     desc: "Started off his career as a Data Scientist at EDGE Networks, and rose to become the Head of Data Science for the organization"
//   },
  
//   {
//     name: "Shreekant Bhoot",
//     title: "Head of Finance",
//     imgUrl: require("../../Assets/images/people/shreekant.png").default.src,
//     desc: "A senior Chartered Accountant with over 20 years of experience in the services, manufacturing, and finance sectors. Has worked for industry leaders like LG, Bausch & Lomb, Jindal Steel, and Infosys"
//   } 
// ]

export const payload = (type) => {
  return Api.get(`people/?type=${type}`).then(result => {
    if (result.status == 200) {
      return result.data;
    }
    return {};
  })
}