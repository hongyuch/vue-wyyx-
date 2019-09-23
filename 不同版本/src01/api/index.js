/*
  与后台交互模块
 */
import ajax from './ajax'

//获取msite的列表
export const reqMsite = () => ajax('/msite')
//获取shopGuide
export const reqShopGuide = () => ajax('/shopguide')
//获取categorys
export const reqCategorys = () => ajax('/categorys')