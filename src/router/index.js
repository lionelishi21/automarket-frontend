import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cars from '../views/Cars.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Home/index.vue')
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '/cars',
        name: 'cars-list',

        component: () => import('../views/Cars.vue')
      },
      {
        path: '/car/details/:id',
        name: 'car-details',
        component: () => import('../views/cars/details.vue')
      },
      {
        path: '/signin',
        name: 'Signin',
        component: () => import('../views/Sign/user.vue')
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('../views/Register/user.vue')
      },
      {
        path: '/user-onboarding',
        name: 'User-Onboard',
        component: () => import('../views/Register/onboarding.vue')
      },
      {
        path: '/dealer-register',
        name: 'Dealer-Register',
        component: () => import('../views/Register/dealer.vue')
      },
      {
        path: '/user-filters',
        name: 'User-Filter',
        component: () => import('../views/Account/user-filters.vue')
      },
      {
        path: '/seller/sign',
        name: 'Employer-signin',
        component: () => import('../views/EmployerSign')
      },
      {
        path: '/pricing-and-packages',
        name: 'seller-pricing',
        component: () => import('../views/Seller/pricing.vue')
      }
    ]
  },
  {
    path: '/sell',
    name: 'sell',
    component: () => import ('../views/Seller.vue'),
    children: [
      {
        path: '',
        name: 'seller-signin',
        component: () => import('../views/Seller/signin.vue')
      }
    ]
  },
  {
    path: '/uploader',
    name: 'uploader',
    component: () => import ('../views/Uploader/index.vue'),
    children: [
        {
          path: '',
          name: 'uploader-form',
          component: () => import('../views/Uploader/start.vue')
        },
        {
          path: 'resume',
          name: 'uploader-resume',
          component: () => import ('../views/Uploader/resume.vue')
        }
    ]
  },
  {
    path: '/account',
    name: 'account',
    component: () => import ('../views/Account/index.vue'),
  },
  {
    path: '/my-account',
    name: 'My-account',
    component: () => import ('../views/Account/index.vue'),
    children: [
      {
          path: '',
          name: 'user-account',
          component: () => import ('../views/Account/userAccount.vue'),
      },
      {
        path: '/build/:id',
        name: 'build-add',
        component: () => import ('../views/cars/build.vue')
      },
      {
          path: '/my-ads',
          name: 'car-ads',
          component: () => import ('../views/Account/ads.vue')
      },
      {
        path: '/checkout/:batch_id/:plan/car',
        name: 'checkout-car',
        component: () => import ('../views/Seller/checkout.vue')
      },
      {
        path: '/edit-profile',
        name: 'edit-profile',
        component: () => import('../views/Account/edit-profile.vue')
      },
      {
        path: 'uploader',
        name: 'Account-uploader',
        component: () => import ('../views/Resume/index.vue')
      },
      {
          path: '/payment-methods',
          name: 'Payment-Methods',
          component: () => import('../views/Account/payment-methods.vue')
       },
       {
        path: '/plans',
        name: 'User-Plans',
        component: () => import('../views/Account/plans.vue')
       }
    ]
  },
  {
    path: '/getting-started',
    name: 'starter',
    component: () => import ('../views/Onboarding.vue'),
    children: [
        {
          path: '',
          name: 'getting-started',
          component: () => import ('../views/Onboarding/index.vue')
        }
    ]

  },


]

const router = new VueRouter({
  routes,
  linkActiveClass: "active", // active class for non-exact links.
  linkExactActiveClass: "active" // active class for *exact* links.
})

export default router
