<template>
  <div id="search">
      <div class="head">
          <i class="iconfont" @click="toback">&#xebc6;</i>
          设置备注和聊天
      </div>
      <div class="inputMark">
          备注名：
          <input type="text" :value="nick" ref="markValue">
      </div>
      <button class="confirm" @click="toSetMark">确定</button>
  </div>
</template>
<script>
import axios from "axios";
// import originData from "../../Mock/mock.js";
import Mock from "mockjs";
export default {
  data() {
    return {
        nick:"",
        data:null,
        id:null,
        thisIndex:null
    };
  },
  mounted(){
      this.nick=this.$route.query.nick;
      this.id=this.$route.query.id;
      this.thisIndex=this.$route.query.thisIndex;
      
      axios.get("/chat").then((res)=>{
          this.data=res.data.result;
      });      
  },
  methods:{
      toback(){
          this.$router.back(-1);
      },
      toSetMark(){
          let value=this.$refs.markValue.value;
          //确定修改备注之后 修改data数据
           this.data[0].nickname=value;
            //需要修改原始数据？？？？？？？？？？？？？？？？？？？？？？？？？？？
            // console.log(this.data);
            // Mock.mock("/chat",this.data);
      }
  }
};
</script>
<style lang='scss' scope>
// 
html,body{
    background-color: #EDEDED;
}
#search{
    .head{
        padding-left: 1rem;
        width: 100%;
        height: 4rem;
        line-height: 4rem;
        border-bottom: 1px solid rgb(218, 218, 218);
        font-size: 1.2rem;
        i{
            margin-right: 0.3rem;
            color: rgb(112, 112, 112);
        }
    }
    .inputMark{
        padding-top: 1.3rem;
        padding-left: 1rem;
        font-size: 1.2rem;
        margin-bottom: 2rem;
        input{
            display: block;
            font-size: 1.2rem;
            width: 85%;
            height: 3rem;
            margin: 0 auto;
            margin-top: 1.5rem;
            border-radius: 0.5rem;
            padding-left: 0.7rem;
            border: none;
            outline: none;
            color: rgb(158, 157, 157);
        }
    }
    .confirm{
        font-size: 1.3rem;
        color: white;
        letter-spacing: 5px;
        display: block;
        width: 7rem;
        height: 3rem;
        background-color: green;
        border-radius: 0.6rem;
        margin: 0 auto;
        outline: none;
    }
}
</style>