import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const  classification=()=>import('@/views/classification/Classification')
const  home=()=>import('@/views/home/Home')
const  my=()=>import('@/views/my/My')
const  shoppingCart=()=>import('@/views/shoppingCart/ShoppingCart')
const routes=[
    {
        path:'',
        redirect:'/home',
        component:home,
    },
    {
        path:'/home',
        component:home
    },
    {
        path:'/classification',
        component:classification
    },
    {
        path:'/shoppingCart',
        component:shoppingCart
    },
    {
        path:'/my',
        component:my
    },
]

const router=new VueRouter({
    routes:routes,
    mode:'history'
})

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
    console.log(location);
  return originalPush.call(this, location).catch(err => err)
}
export default router
