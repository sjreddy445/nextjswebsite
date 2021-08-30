import EventEmitter from "events";

export const event = new EventEmitter();

export const YouTubeGetID = (url) => {
  url = url?.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  //eslint-disable-next-line
  if (url)
    return undefined !== url[2] ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
}

export const DashToUpper = (str) => {
  let words = str.match(/([^-]+)/g) || [];
  words.forEach(function (word, i) {
    words[i] = word[0].toUpperCase() + word.slice(1);
  });
  return words.join(' ');
}

export const AddCmsImgBaseUrl = (img) => {
  // const baseUrl  = "https://api.getedge.ai"
  const baseUrl = "https://api.getedge.ai"
  return baseUrl + img
}