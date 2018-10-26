import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ComponentDetail from '@/components/cm-component-detail'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/home',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/component/:id',
            name: 'component',
            component: ComponentDetail
        }
    ]
})

