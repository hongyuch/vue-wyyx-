// 引入相关路由组件
const MSite = () => import('../pages/MSite/MSite.vue')
// import MSite from '../pages/MSite/MSite.vue'
const Search = () => import('../pages/Search/Search.vue')
// import Search from '../pages/Search/Search.vue'
const CategoryList = () => import('../pages/CategoryList/CategoryList.vue')
const Category = () => import('../pages//CategoryList/Category/Category.vue')
// import Category from '../pages/Category/Category.vue'
const Identifying = () => import('../pages/Identifying/Identifying.vue')
const Find = () => import('../pages/Identifying/Find/Find.vue')
const Select = () => import('../pages/Identifying/Select/Select.vue')
// import Identifying from '../pages/Identifying/Identifying.vue'
const ShoppingCart = () => import('../pages/ShoppingCart/ShoppingCart.vue')
// import ShoppingCart from '../pages/ShoppingCart/ShoppingCart.vue'
const Profile = () => import('../pages/Profile/Profile.vue')
// import Profile from '../pages/Profile/Profile.vue'
const Login = () => import('../pages/Profile/Login/Login.vue')
// import Login from '../pages/Login/Login.vue'
const Register = () => import('../pages/Profile/Register/Register.vue')

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
    path: '/CategoryList',
    component: CategoryList,
    meta: {
      showFooter: true
    },
    children: [
      {
        path: '/CategoryList/category',
        // path: '/CategoryList/category/:id',
        component: Category,
        meta: {
          showFooter: true
        }
      },
      {
        path: '',
        redirect: '/CategoryList/category'
      }
     ]
  },
  {
    path: '/identifying',
    component: Identifying,
    meta: {
      showFooter: true
    },
    children: [
      {
        path: '/identifying/find',
        component:Find,
        meta: {
          showFooter: true
        }
      },
      {
        path: '/identifying/select',
        component: Select,
        meta: {
          showFooter: true
        }
      },
      {
        path: '',
        redirect: '/identifying/find'
      }
    ]
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
    component: Profile,
    children:[
      {
        path: '/profile/login',
        component: Login
      },
      {
        path: '/profile/register',
        component: Register
      }
    ]
  },
  {
    path: '/',
    redirect: '/msite'
  }
]
