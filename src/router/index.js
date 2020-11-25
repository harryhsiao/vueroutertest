import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/components/HelloWorld';
import cards from '@/components/pages/page';
import childel from '@/components/pages/child';
import childel2 from '@/components/pages/child2';
import childel3 from '@/components/pages/child3';


export default new VueRouter({

    routes: [
        {
            name: '首頁',
            path: '/index',
            component: Home,
        },
        {
            name: '卡片',
            path: '/cardpage',
            component: cards,
            children: [

                {
                    name: '卡片一',
                    path: '',
                    component: childel,
                }, 
                {
                    name: '卡片二',
                    path: 'child2',
                    component: childel2,
                }, 
                {
                    name: '卡片三',
                    path: 'child3',
                    component: childel3,
                },
            ]
        }

    ]

});