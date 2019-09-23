//包含多个直接修改状态方法的对象
import {
  RECEIVE_KINGKONGS, RECEIVE_SHOPGUIDES, RECEIVE_CATEGORYS, RECEIVE_SEARCHCONTENT, RECEIVE_HOTKEYWORD
} from './mutation-types'
export default {
  [RECEIVE_KINGKONGS](state, {
    kingkongs
  }) {
    state.kingkongs = kingkongs
  },
  [RECEIVE_SHOPGUIDES](state, {
    shopGuides
  }) {
    state.shopGuides = shopGuides
  },
  [RECEIVE_CATEGORYS](state, {
    categorys
  }) {
    state.categorys = categorys
  },
  [RECEIVE_SEARCHCONTENT](state, {
    searchContent
  }) {
    state.searchContent = searchContent
  },
  [RECEIVE_HOTKEYWORD](state, {
    hotKeywordVOList, defaultKeyword
  }) {
   state.hotKeywordVOList = hotKeywordVOList
   state.defaultKeyword = defaultKeyword
  }
}