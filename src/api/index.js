import axios from "axios";

// export const api_url ="http://127.0.0.1:8003/api/survey";
// https://api-survey-1.fewnu.app/api/
export const instance = axios.create({
    baseURL: 'https://api-survey-1.fewnu.app/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });