import Api from '../../Config/Api'
// export const payload = [
//   {
//     title : "Grant of License",
//     body : "Edge grants you a revocable, non-exclusive, non-transferable, limited right to use the application and to access and us the application in accordance with the terms and conditions of this License, the usage rules and any master service agreement or any other agreements (“Collectively Related Agreements”) executed earlier between you and Edge."
//   },
//   {
//     title : "Ownership",
//     body : "Edge retains ownership in all intellectual property rights in and to the Edge’s content and software and all underlying technology and associated documentation related thereto. You authorize Edge to use any feedback and ideas you provide in connection with your use of the software application or service or HIREalchemy Magnet Extension. You can email your feedback on admin@hirealchemy.com"
//   },
//   {
//     title : "Limitations & restrictions on usage of application",
//     body : "Unless expressly authorized by EdGE in writing or otherwise permitted under applicable law, you will not:- <br><br> (i) Sell, resell, transfer, sublicense or assign your rights under this license (except as expressly provided herein); <br><br> (ii) Decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt the application; <br><br> (iii) Make any modifications, adaptation, improvement, enhancement, translation or derivative work from the application; <br><br> (iv) Violate any applicable laws, rules or regulations in connection with your access or use of application; <br><br> (v) Remove, alter or obscure any proprietary notice (including any notice of copyright or trademark) of EdGE or its affiliates, partners, suppliers or the licensors of the application; <br><br> (vi) Use the application for any revenue generating endeavour, commercial enterprise, or other purpose for which it is not designed or intended; <br><br> (vii) Use, install or permit the application to exist on more than one browser at a time or any other device or computer; <br><br> (viii) Make the application available over a network or other environment permitting access or use by multiple users at the same time; <br><br> (ix) Use the application for creating a product, service or software offered specifically by EdGE; <br><br> (x) Use the application to send automated queries to any website or to send any unsolicited commercial e-mail; <br><br> (xi) Use any proprietary information or interfaces of EdGE or any other intellectual property belonging to EdGE in the design, development, manufacture, licensing or distribution of any applications, accessories or devices for use with the application."
//   },
//   {
//     title : "Use by authorized users",
//     body : "You may allow Authorized Users to use the application solely on your behalf for your internal operations. You are responsible for ensuring that Authorized Users comply with the terms of this ELA and you are liable for any breach of the same by such Authorized Users."
//   },
//   {
//     title : "Infringement ",
//     body : "User acknowledges and agree that, in the event of any third party claim that the Application, or your possession or use of application infringes any third party’s intellectual property rights, user will be responsible for the investigation, defence, settlement and discharge of any such claims of intellectual property infringement. User will promptly notify EdGE in writing of such a claim."
//   },
//   {
//     title : "Termination",
//     body : "EdGE may in its sole and absolute discretion, at any time and for any or no reason, suspend or terminate this License and the rights afforded to users hereunder with or without prior notice. Furthermore, if user fail to comply with any terms and conditions of this License, then this License and any rights afforded to users hereunder shall terminate automatically, without any notice or other action by EdGE. Upon termination of this License, user shall cease all use of the application and uninstall the application."
//   },
//   {
//     title : "Warranty Disclaimer",
//     body : "User acknowledge and agree that the application is provided on “As Is” and “As Available” basis, and that your use or reliance upon the application and any third party content and services accessed thereby is at your sole risk and discretion. EdGE and its affiliates, partners, suppliers and licensors hereby disclaim any and all representations, warranties and guarantees regarding the application and third party content and services, whether express, implied or statutory and including, without limitation, the implied warranties of merchantability, fitness for a particular purpose and or non-infringement . Furthermore, EdGE and its affiliates, partners, suppliers and licensors make no warranty that: <br><br> (i) The application or third-party content and services will meet your requirements; <br><br> (ii) The application or third-party content and services will be uninterrupted, accurate, reliable, timely, secure or error-free; <br><br> (iii) The quality of any products, services, information, or other material accessed or obtained by user through application will be as represented or meet user expectations; or <br><br> (iv) Any errors in the application or third-party content and services will be corrected. "
//   },
//   {
//     title : "Limitation of Liability",
//     body : "Under no circumstances EdGE or its affiliates, partners, suppliers and licensors be liable for any direct, indirect, incidental, consequential, special or exemplary damages for loss of profits, revenue data, or data use incurred by user or any third party, arising from or in connection with users access or use of or inability to access or use the application."
//   }
// ]

export const payload = () => {
  return Api.get('elas').then(result => {
    if (result.status == 200) {
      return result.data;
    }
    return {};
  })
}