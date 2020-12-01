import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'defaultPage',
            component: () => import(/* webpackChunkName : index */'@/layout/default'),
            redirect: "index",
            children: [
                {   
                    path: '/index', name: 'index', component: () => import(/* webpackChunkName : index */ '@/page/index')
                },
                {
                    path : '/changeCity', name : 'changeCity', component : () => import('@/page/changCity.vue'),
                },
                {
                    path :'/product/:name' , name : 'product', component : () => import('@/page/product'),
                }
            ]
        }
    ]
})
