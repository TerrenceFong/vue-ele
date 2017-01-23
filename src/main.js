import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'

import App from './App'

import 'common/stylus/index.styl'

Vue.use(VueRouter)
Vue.use(VueResource)

let router = new VueRouter({
	linkActiveClass: 'active'
})

router.map({
	'/goods': {				// 商品
        name: 'goods',
        component: function(resolve) {
            require(['components/goods/goods.vue'], resolve)
        }
    },
    '/ratings': {				// 评论
        name: 'goods',
        component: function(resolve) {
            require(['components/ratings/ratings.vue'], resolve)
        }
    },
    '/seller': {				// 商家
        name: 'goods',
        component: function(resolve) {
            require(['components/seller/seller.vue'], resolve)
        }
    }
})

// fastclick => 消除点击300ms延迟
FastClick.attach(document.body)

router.start(App, '#app')

router.go('/goods')