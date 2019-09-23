//使用mockjs提供mock数据接口
import Mock from 'mockjs'
import data from './data.json'

// 指定监听的url和对应的json数据模板
//返回kingkongs的接口
Mock.mock('/msite', {
  code: 0,
  data: data.kingkongs
})
//返回shopGuide的接口
Mock.mock('/shopguide', {
  code: 0,
  data: data.shopGuides
})
//返回categorys的接口
Mock.mock('/categorys', {
  code: 0,
  data: data.categorys
})