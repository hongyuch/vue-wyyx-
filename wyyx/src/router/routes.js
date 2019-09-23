// 引入相关路由组件
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages//Search/Search.vue'
import Category from '../pages/Category/Category.vue'
import Identifying from '../pages/Identifying/Identifying.vue'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

export default [{
    path: '/msite',
    component: MSite,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/category',
    component: Category,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/identifying',
    component: Identifying,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/shoppingCart',
    component: ShoppingCart,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    redirect: '/msite'
  }
]
