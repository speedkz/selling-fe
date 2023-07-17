import type { RouteRecordRaw } from 'vue-router'
export const authRoutesName = {
  signin: 'signin',
  signup: 'signup',
  createAccount: 'createAccount'
}

const authRoutes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/auth',
    redirect: 'auth/signin',
    children: [
      {
        name: authRoutesName.signin,
        path: 'signin',
        component: () => import('@/views/auth/SignIn.vue')
      },
      {
        name: authRoutesName.signup,
        path: 'sign-up',
        component: () => import('@/views/auth/VerifyEmail.vue')
      },
      {
        name: authRoutesName.createAccount,
        path: 'create-account',
        component: () => import('@/views/auth/CreateAccount.vue')
      }
    ]
  }
]

export default authRoutes
