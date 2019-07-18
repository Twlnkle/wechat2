<template>
  <div id="foot">
    <ul>
        <li :class="{changeColor:item.isactive}" v-for="(item,index) in nav" :key="index" @click="changeState(index)">
            <i class="iconfont" v-html="item.face"></i>{{item.title}}
        </li>
    </ul>
  </div>
</template>
<script>
import menu from "./MenuData.js"
export default {
  name: "foot",
  data() {
    return {
        status:0,
        nav:null
    };
  },
  mounted() {
      this.nav=menu.nav;
      this.status=menu.s;
  },
  methods:{
      changeState(index){
        this.nav[this.status].isactive=false;
        this.nav[index].isactive=true;
        this.status=index;
        //编程式路由
        this.$router.push({
            path:this.nav[index].path
        })
        menu.nav=this.nav;
        menu.s=this.status;
      }
  }
};
</script>
<style lang='scss'>
.changeColor{
    color: green !important;
}
#foot{
    position: fixed;
    bottom: 0;
    left:0;
    width:100%;
    height: 4.6rem;
    z-index: 10;
    ul{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        background-color: #E5E5E5;
        li{
            flex:1;
            text-align: center;
            list-style: none;
            padding: 0.7rem 0;
            i{
                display: block;
                font-size: 1.7rem;
            }
            a{
                color: black;
                font-size: 1.1rem;
                text-decoration: none;
            }
        }
    }
}
</style>