import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cars from '../views/Cars.vue'
import { isLoggedIn } from '../utils/auth.js'


Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import(/* webpackChunkName: "about" */ '../views/Home/index.vue'),
          meta: {
            allowAnonymous: true
          }

        },
        {
          path: '/privacy',
          name: 'Privacy',
          component: () => import('../views/Privacy.vue'),
          meta: {
            allowAnonymous: true
          }
        },
        {
          path: '/terms',
          name: 'Terms',
          component: () => import('../views/Terms.vue'),
          meta: {
            allowAnonymous: true
          }
        },
        {
          path: '/about',
          name: 'about',
          component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
          meta: {
            allowAnonymous: true
          }
        },
        {
          path: '/invoice/:invoiceId',
          name: 'user-invoice',
          component: () => import('../views/Invoice.vue')
        },
        {
          path: '/order-complete',
          name: 'Order-Complete',
          component: () => import( '../views/Seller/completed.vue'),
        },
        {
          path: '/cars',
          name: 'cars-list',
          component: () => import('../views/Cars.vue'),
           meta: {
             allowAnonymous: true
           }
        },
        {
          path: '/car/details/:id',
          name: 'car-details',
          component: () => import('../views/cars/details.vue'),
           meta: {
             allowAnonymous: true
           }
        },
        {
          path: '/signin',
          name: 'signin',
          component: () => import('../views/Sign/user.vue'),
          meta: {
            allowAnonymous: true
          }
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('../views/Register/user.vue'),
          meta: {
            allowAnonymous: true
          }
        },
        {
          path: '/user-onboarding',
          name: 'User-Onboard',
          component: () => import('../views/Register/onboarding.vue'),
          meta: {
            allowAnonymous: true
          }
        },
        {
          path: '/dealer-register',
          name: 'Dealer-Register',
          component: () => import('../views/Register/dealer.vue'),
          meta: {
            allowAnonymous: true
          }
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
    path: '/checkout/:plan/credit',
    name: 'checkout-car',
    component: () => import ('../views/Seller/checkout.vue')
  },
  {
    path: '/my-account',
    name: 'My-account',
      component: () => import ('../views/Account/index.vue'),
      children: [
        {
          path: '/credits',
          name: 'Credit',
          component: () => import('../views/Account/Credits.vue'),


        },
        {
          path: '/invites',
          name: 'Invite',
          component:() => import('../views/Invite.vue')
        },
        {
            path: '',
            name: 'user-account',
            component: () => import ('../views/Account/userAccount.vue'),
           
        },
        {
          path: '/build',
          name: 'build-add',
          component: () => import ('../views/cars/build.vue')
        },
        {
            path: '/my-ads',
            name: 'car-ads',
            component: () => import ('../views/Account/ads.vue')
        },
        {
          path: '/edit-profile',
          name: 'edit-profile',
          component: () => import('../views/Account/edit-profile.vue')
        },
        {
          path: '/edit/vehicle/:id/car',
          name: 'Edit-Vehicle',
          component: () => import('../views/Account/car-details.vue')
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
         },
         {
          path: '/activity',
          name: 'Activity',
          component: () => import('../views/Account/activity.vue')
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

router.beforeEach((to, from, next) => {
  if (to.name == 'signin' && isLoggedIn()) {
    next({ path: '/' })
  } else if (!to.meta.allowAnonymous && !isLoggedIn()) {
    next({
      path: '/signin',
      query: { redirect: to.fullPath }
    })
  } else if (to.name == 'register' && isLoggedIn()) {
    next({ path: '/' })
  }  else {
    next()
  }
})

export default router
