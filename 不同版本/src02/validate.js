import Vue from 'vue'
import VeeValidate, { Validator} from 'vee-validate'
import zh_CN from  'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate)

Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  attributes: {
    phone:'请输入手机号',
    code:'请输入有效验证码',
    email: '请输入邮箱',
    pwd:'请输入密码'
  }
})
Validator.extend('phone', {
  validate: value => {
    return /^1\d{10}$/.test(value)
  },
  getMessage: field => field + '必须是11位'
})
Validator.extend('code', {
  validate: value => {
    return /\d{6}/.test(value)
  },
  getMessage: field => field + '必须6位'
})
