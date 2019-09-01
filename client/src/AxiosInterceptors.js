import axios from 'axios';

export default () => {

  //global configurations. Great way to optimize the code
  // axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
  axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
  axios.defaults.headers.post['Content-Type'] = 'application/json';

  axios.interceptors.request.use(request => {
    console.log(request);
    //Edit request config
    return request;
  }, error => {
    console.log(error);
    //promise so that it still forwards it our request as written on component so then we can handle it with the catch method. This is good when you have a local task that updates the UI but globally you want to log it on the server
    return Promise.reject(error);
  });

  axios.interceptors.response.use(response => {
    console.log(response);
    //Edit request config
    return response;
  }, error => {
    console.log(error);
    console.log(error.response)


    return Promise.reject(error);
  });
};