/*
  与后台交互模块
 */
import ajax from './ajax'
const BASE = '/api'
const BASE_URL = '/API'

//获取msite的列表
export const reqMsite = () => ajax('/msite')
//获取shopGuide
export const reqShopGuide = () => ajax('/shopguide')
//获取categorys
export const reqCategorys = () => ajax('/categorys')
//获取关键字搜索/xhr/search/searchAutoComplete.json
export const reqSearchContent = (keyword) => ajax(BASE_URL + `/xhr/search/searchAutoComplete.json?keywordPrefix=${keyword}`)
//获取关键字搜索/xhr/search/searchAutoComplete.json
export const reqDefaultKeyword = () => ajax(BASE_URL + `/xhr/search/init.json`)
// 用户名密码登陆
export const reqPwdLogin = (email, pwd) => ajax(BASE + '/login_email', {
  email,
  pwd
})
// 手机号验证码登陆
export const reqPhoneLogin = (phone, code) => ajax(BASE + '/login_phone', {
  phone,
  code
})