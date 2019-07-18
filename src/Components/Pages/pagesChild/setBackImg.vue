<template>
  <div id="setImg">
    <div class="head">
      <i class="iconfont back" @click="toback">&#xebc6;</i>
      <span class="chatInfo">聊天背景</span>
    </div>
    <div class="content">
      <div class="chooseImg">
        选择背景图
        <i class="iconfont">&#xebc7;</i>
      </div>
      <div class="chooseImg">
        从相册中选择
        <i class="iconfont">&#xebc7;</i>
      </div>
      <div class="chooseImg">
        拍一张
        <i class="iconfont">&#xebc7;</i>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      thisIndex:null,
      data:null,
    };
  },
  mounted(){
    this.thisIndex=this.$route.query.thisIndex;
    axios.get("/chat").then((res)=>{
      this.data=res.data.result;
    })
    console.log(this.data);
  },
  methods:{
    toback(){
      this.$router.go(-1);
    }
  }
};
</script>
<style lang='scss'>
html,body{
  background-color: #e5e5e5;
}
.head {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 3.5rem;
  background-color: #e5e5e5;
  display: flex;
  flex-direction: row;
  line-height: 3.5rem;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  .back {
    flex: 0.1;
    padding-left: 1rem;
  }
  .chatInfo {
    flex: 1.2;
  }
}
.content{
  width:100%;
  position: relative;
  top: 3.5rem;
  padding-left: 1rem;
  background: white;
  font-size: 1.3rem; 
  div{
    width: 100%;
    line-height: 4.3rem;
    border-bottom: 1px solid rgb(212, 212, 212);
    i{
      float: right;
      font-size: 1.3rem;
      color: silver;
      margin-right: 1.8rem;
    }
  }
}
</style>