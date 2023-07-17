import axios, { AxiosError } from 'axios'
import { notification } from 'ant-design-vue'

const $axios = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    timeout: 10000
  }
})
$axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error: AxiosError) {
    notification.error({
      message: error.message
    })
    return Promise.reject(error)
  }
)
export default $axios
