import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cars from '../views/Cars.vue'
import AutoRepHome from '../views/AutorepHome.vue'
import AutoReps from '../views/Autoreps.vue';
import Signin from '../views/Sign/user.vue';
import UserAccount from '../views/Account/userAccount.vue';

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
          path:'/autorep/:id',
          name: 'Auto Rep',
          component: AutoRepHome,
          meta: {
            allowAnonymous: true
          }
        },

        {
          path: '/autoreps',
          name: 'AutoReps',
          component: AutoReps,
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
          path: '/ads-complete',
          name: 'Ads-Complete',
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
          name: 'Default Sign',
          component: Signin,
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
          path: '/dealer-signup',
          name: 'Dealer-Signup',
          component: () => import('../views/Register/dealer-register.vue'),
          meta: {
            allowAnonymous: true
          }
        },
        {
          path: '/autorep-register',
          name: 'AutoRep-Register',
          component: () => import('../views/Register/autorep-register.vue'),
          meta: {
            allowAnonymous: true
          }
        },
        {
          path: '/autorep',
          name: 'AutoRep',
          component: () => import('../views/Register/autorep.vue'),
          meta: {
            allowAnonymous: true
          }
        },
        {
          path: '/user-filters',
          component: () => import('../views/Account/user-filters.vue')
        },
        {
          path: '/seller/sign',
          component: () => import('../views/EmployerSign')
        },
        {
          path: '/pricing-and-packages',
          component: () => import('../views/Seller/pricing.vue')
        },
        {
          path: '/compare-research',
          component: () => import('../views/cars/compare.vue')
        }
      ]
   },
  {
    path: '/automarketrep/:id',
    name: 'AutoRep Home',
    component: AutoRepHome
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
          path: '',
          name: 'user-account',
          component: UserAccount,
         
       },

        {
          path: 'credits',
          name: 'Credit',
          component: () => import('../views/Account/Credits.vue'),
        },
        {
          path: 'business-card',
          name: 'BusinessCard',
          component: () => import('../views/Account/BusinessCard.vue')
        },
        {
          path: 'invites',
          name: 'Invite',
          component:() => import('../views/Invite.vue')
        },

        {
          path: 'build',
          name: 'build-add',
          component: () => import ('../views/cars/build.vue'),
          meta: {
            allowAnonymous: false
          }
        },
        {
            path: 'my-ads',
            name: 'car-ads',
            component: () => import ('../views/Account/ads.vue')
        },
        {
          path: 'edit-profile',
          name: 'edit-profile',
          component: () => import('../views/Account/edit-profile.vue')
        },
        {
          path: 'edit/vehicle/:id/car',
          name: 'Edit-Vehicle',
          component: () => import('../views/Account/car-details.vue')
        },
        {
          path: 'uploader',
          name: 'Account-uploader',
          component: () => import ('../views/Resume/index.vue')
        },
        {
            path: 'payment-methods',
            name: 'Payment-Methods',
            component: () => import('../views/Account/payment-methods.vue')
         },
         {
          path: 'plans',
          name: 'User-Plans',
          component: () => import('../views/Account/plans.vue')
         },
         {
          path: 'activity',
          name: 'Activity',
          component: () => import('../views/Account/activity.vue')
         },
         {
             path: 'browse-dealer',
             name: 'Browse-Dealer',
             component: () => import('../views/Account/browse-dealer.vue')
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
  mode: 'history',
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
