import axios from 'axios';


const Api = axios.create(
  {
    baseURL: "https://api.getedge.ai/",
    timeout: 30000,
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    // }
  });


// interceptor for all the requests
Api.interceptors.request.use(function (config) {
  // Do something before request is sent

  return config;

}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// interceptor for all the responses
Api.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  console.log("error",error)
  if (401 === error.response.status || undefined || error.response.status===502) {
    // console.log("its a 401!");
    //return
    // localStorage.clear();
  } else {
    // console.log("Sorry, something went wrong")
    return Promise.reject(error);
  }
});





export default Api
