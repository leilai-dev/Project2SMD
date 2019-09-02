import axios from 'axios';

export default () => {

  // 전역 설정
  // axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
  // axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
  // axios.defaults.headers.post['Content-Type'] = 'application/json';

  // 요청 객체 전송시
  axios.interceptors.request.use(request => {
    console.log(request);
    // 추가 수정 가능
    return request;
  }, error => {
    console.log(error);
    // 에러 발생하는 경우 프라미스 객체 전달
    return Promise.reject(error);
  });

  axios.interceptors.response.use(response => {
    console.log(response);

    return response;
  }, error => {
    // 응답 객체 에러 발생 시 error.response 상태코드 확인 후 공통 처리 가능
    console.log(error);
    console.log(error.response)

    return Promise.reject(error);
  });
};