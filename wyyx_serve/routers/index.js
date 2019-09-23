var express = require('express');
var router = express.Router();
const md5 = require('blueimp-md5')
const UserModel = require('../models/UserModel')
const _filter = {'pwd': 0, '__v': 0} // 查询时过滤掉
const sms_util = require('../util/sms_util')
const users = {}
const ajax = require('../api/ajax')
// const tokenUtil = require('../util/toten_util')

/*
密码登陆
 */
router.post('/login_pwd', function (req, res) {
  const email = req.body.email
  const pwd = md5(req.body.pwd)
  console.log('/login_pwd', email, pwd, req.session)

  UserModel.findOne({email})
    .then((user) => {
      if (user) {
        if (user.pwd !== pwd) {
          res.send({code: 1, msg: '用户名或密码不正确!'})
        } else {
          req.session.userid = user._id
          // const token = tokenUtil.generateToken(name)
          // req.session.token = token
          res.send({code: 0, data: {_id: user._id, email: user.email, phone: user.phone}})
        }
        return new Promise(() => {
        }) // 返回一个不调用resolve()/reject()的promise对象
      } else {
        return UserModel.create({email, pwd})
      }
    })
    .then((user) => {
      req.session.userid = user._id
      const data = {_id: user._id, email: user.email}
      // 3.2. 返回数据(新的user)
      res.send({code: 0, data})
    })
    .catch(error => {
      console.error('/login_pwd', error)
    })
})

/*
发送验证码短信
*/
router.get('/sendcode', function (req, res, next) {
  //1. 获取请求参数数据
  var phone = req.query.phone;
  //2. 处理数据
  //生成验证码(6位随机数)
  var code = sms_util.randomCode(6);
  //发送给指定的手机号
  console.log(`向${phone}发送验证码短信: ${code}`);
  sms_util.sendCode(phone, code, function (success) {//success表示是否成功
    if (success) {
      users[phone] = code
      console.log('保存验证码: ', phone, code)
      res.send({"code": 0})
    } else {
      //3. 返回响应数据
      res.send({"code": 1, msg: '短信验证码发送失败'})
    }
  })
})

/*
短信登陆
*/
router.post('/login_sms', function (req, res, next) {
  var phone = req.body.phone;
  var code = req.body.code;
  console.log('/login_sms', phone, code);
  if (users[phone] != code) {
    res.send({code: 1, msg: '手机号或验证码不正确'});
    return;
  }
  //删除保存的code
  delete users[phone];


  UserModel.findOne({phone})
    .then(user => {
      if (user) {
        req.session.userid = user._id
        res.send({code: 0, data: user})
      } else {
        //存储数据
        return new UserModel({phone}).save()
      }
    })
    .then(user => {
      req.session.userid = user._id
      res.send({code: 0, data: user})
    })
    .catch(error => {
      console.error('/login_sms', error)
    })

})

/*
根据sesion中的userid, 查询对应的user
 */
router.get('/userinfo', function (req, res) {
  // 取出userid
  const userid = req.session.userid
  // 查询
  UserModel.findOne({_id: userid}, _filter)
    .then(user => {
      // 如果没有, 返回错误提示
      if (!user) {
        // 清除浏览器保存的userid的cookie
        delete req.session.userid

        res.send({code: 1, msg: '请先登陆'})
      } else {
        // 如果有, 返回user
        res.send({code: 0, data: user})
      }
    })
})


router.get('/logout', function (req, res) {
  // 清除浏览器保存的userid的cookie
  delete req.session.userid
  // 返回数据
  res.send({code: 0})
})
module.exports = router;