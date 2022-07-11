import request from '../utils/request'

const getlogin = (data) => {
  return request({
    url: '/users/login',
    method: 'post',
    data
  })
}
const getInfo = () => {
  return request({
    url: '/users/getPermissionList',
    method: 'get'
  })
}
export default {
  getlogin,
  getInfo
}