import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

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
        }
            ]
        }
    ]
})
