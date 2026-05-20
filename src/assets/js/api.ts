import axios from 'axios'
//import { ElMessage } from 'element-plus'

const instance = axios.create();
instance.defaults.baseURL = "/api"

instance.interceptors.request.use((config)=> {
  config.headers.interviewerName = `Yu_Zheng`;
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default {
  test() {
    return instance.get(`/`).then(res=>res.data)
  },
  getAccounts() {
    return instance.get(`/accounts`).then(res=>res.data)
  },
  getAccountById(x) {
    return instance.get(`/accounts/${x}`).then(res=>res.data)
  },
  createAccount(x) {
    return instance.post(`/create-account`,x).then(res=>res.data)
  },
  updateAccount(x) {
    return instance.patch(`/update-account/${x.id}`,x).then(res=>res.data)
  },
  delAccount(x) {
    return instance.delete(`/delete-account/${x}`).then(res=>res.data)
  }
}
