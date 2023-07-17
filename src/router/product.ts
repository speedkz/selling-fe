import type { RouteRecordRaw } from 'vue-router'

const productRoutes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/product',
    name: 'product',
    children: [
      {
        name: 'listProduct',
        path: 'list',
        component: () => import('@/views/product/ListProduct.vue')
      },
      {
        name: 'showProduct',
        path: 'show/:id',
        component: () => import('@/views/product/ShowProduct.vue')
      },
      {
        name: 'editProduct',
        path: 'edit/:id',
        component: () => import('@/views/product/EditProduct.vue')
      }
    ]
  }
]

export default productRoutes
