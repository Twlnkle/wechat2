//安装 导入 使用 配置 实例化 挂载
import Vue from "vue"
import vueRouter from "vue-router"
import Chat from ".././Components/Pages/Chat.vue"
import User from ".././Components/Pages/User.vue"
import Find from ".././Components/Pages/Find.vue"
import My from ".././Components/Pages/My.vue"
import chatInterface from "../Components/Pages/pagesChild/chatInterface.vue"
import More from "../Components/Pages/pagesChild/more.vue"
import detailMsg from "../Components/Pages/pagesChild/detailMsg.vue"
import Search from "../Components/Pages/pagesChild/searchChatLog.vue"
import setMark from "../Components/Pages/pagesChild/setMark.vue"
import setBackImg from "../Components/Pages/pagesChild/setBackImg.vue"

Vue.use(vueRouter);

const routes=[
    {
        path:"/",
        component:Chat
    },
    {
        path:"/User",
        component:User
    },
    {
        path:"/Find",
        component:Find
    },
    {
        path:"/My",
        component:My
    },
    {
        path:"/chatInterface",
        component:chatInterface
    },
    {
        path:"/chatInterface/more",
        component:More
    },
    {
        path:"/chatInterface/more/detailMsg",
        component:detailMsg
    },
    {
        path:"/chatInterface/more/Search",
        component:Search
    },
    {
        path:"/chatInterface/more/detailMsg/setMark",
        component:setMark
    },
    {
        path:"/chatInterface/more/setBackImg",
        component:setBackImg
    },
]

let router=new vueRouter({
    routes
})

export default router