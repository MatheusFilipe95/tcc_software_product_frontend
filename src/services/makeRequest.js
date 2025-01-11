import axios from "axios";


const api = axios.create({
   baseURL: process.env.REACT_APP_SERVER_DOMAIN,
   withCredentials: true
});

export function makeRequest(url, options){
   return api(url, options)
      .then(res => res.data)
      .catch(error => Promise.reject(error?.response?.data?.message ?? "Error fetching data from API"))
}