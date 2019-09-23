//包含多个间接修改状态方法的对象
import {
  RECEIVE_KINGKONGS,
  RECEIVE_SHOPGUIDES,
  RECEIVE_CATEGORYS,
  RECEIVE_SEARCHCONTENT,
  RECEIVE_HOTKEYWORD
} from './mutation-types'
import {
  reqMsite,
  reqShopGuide,
  reqCategorys,
  reqSearchContent,
  reqDefaultKeyword
} from '../api'
export default {
  //异步kingkongs
  async getKingkongs({
    commit
  }) {
    //发送异步ajax请求
    const result = await reqMsite()
    if (result.code === 0) {
      //提交一个mutation
      const kingkongs = result.data
      commit(RECEIVE_KINGKONGS, {
        kingkongs
      })
    }
  },
  async getShopGuides({
    commit
  }) {
    //发送异步ajax请求
    const result = await reqShopGuide()
    if (result.code === 0) {
      //提交一个mutation
      const shopGuides = result.data
      commit(RECEIVE_SHOPGUIDES, {
        shopGuides
      })
    }
  },
  async getCategorys({
    commit
  }) {
    //发送异步ajax请求
    const result = await reqCategorys()
    if (result.code === 0) {
      //提交一个mutation
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {
        categorys
      })
    }
  },
  async getSearchContent({
    commit
  }, keyword) {
    console.log(keyword)
    //发送异步ajax请求
    const result = await reqSearchContent(keyword)
    
    if (result.code === "200") {
      //提交一个mutation
      const searchContent = result.data
      commit(RECEIVE_SEARCHCONTENT, {
        searchContent
      })
    }
  },
  async getDefaultKeyword({
    commit
  }) {
    //发送异步ajax请求
    const result = await reqDefaultKeyword()
    if (result.code === "200") {
      console.log(result.data)
      //提交一个mutation
      const hotKeywordVOList = result.data.hotKeywordVOList
      const defaultKeyword = result.data.defaultKeyword
      commit(RECEIVE_HOTKEYWORD, {
        hotKeywordVOList, defaultKeyword
      })
    }
  }
}