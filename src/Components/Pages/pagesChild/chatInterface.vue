<template>
  <div id="chatInterface">
    <!-- <p>{{id}}</p> -->
    <div class="chathead">
      <i class="iconfont back" @click="toback">&#xebc6;</i>
      <span class="nickname">{{nick}}</span>
      <i class="iconfont more" @click="tomore">&#xebc5;</i>
    </div>
    <div class="midchat" ref="setscrollTop">
      <v-detail :send="sendMsg" :parent="this" ref="information"></v-detail>
    </div>
    <div class="chatfoot">
      <i class="iconfont horn" @click="changeiconfont" v-html="iconfont"></i>
      <input ref="inputtxt" class="txt" :type="istype" :value="istxt" @keypress="sendmsg">
      <i class="iconfont smile">&#xebb7;</i>
      <i class="iconfont add">&#xebb3;</i>
      <!-- &#xebd3; -->
    </div>
  </div>
</template>
<script>
import detailInfo from "./detailInfo.vue";
export default {
  components: {
    "v-detail": detailInfo,
  },
  data() {
    return {
      id: null,
      nick: "",
      iconfont: "&#xebbf;",
      isshow: false,
      istype: "text",
      istxt: "",
      sendMsg: "",
      detailmsg: null, //子组件
      face:"",
      chatid:"",
      tel:null,
      region:"",
      thisIndex:null,
      backImg:"",
    };
  },
  mounted() {
    this.id = this.$route.query.id;
    this.nick = this.$route.query.nick;
    this.detailmsg = this.$refs.information;
    this.face=this.$route.query.url;
    this.chatid = this.$route.query.chatid;
    this.tel=this.$route.query.tel;
    this.region=this.$route.query.region;
    this.thisIndex=this.$route.query.thisIndex;
    this.backImg=this.$route.query.backImg;
    
  },
  methods: {
  tomore(){
    this.$router.push({
      path:"/chatInterface/more",
      query:{
        url:this.face,
        nick:this.nick,
        chatid:this.chatid,
        tel:this.tel,
        region:this.region,
        id:this.id,
        thisIndex:this.thisIndex,
        backImg:this.backImg,
      }
    })
  },
    toback() {
      this.$router.go(-1);
    },
    changeiconfont() {
      if (!this.isshow) {
        //切换打字图标
        this.isshow = true;
        this.iconfont = "&#xebd3;";
        this.istype = "button";
        this.istxt = "按住 说话";
      } else {
        //切换语音图标
        this.isshow = false;
        this.iconfont = "&#xebbf;";
        this.istype = "text";
        this.istxt = "";
      }
    },
    sendmsg(e) {
      let con = this.$refs.inputtxt.value;
      let content = con.replace(/(^\s*)|(\s*$)/g, "");
      if (e.keyCode == 13 && content != "") {
        this.sendMsg = content;
        //调用子组件里面的方法
        this.detailmsg.saveMsg(this.sendMsg);
        this.$refs.inputtxt.value = "";
        this.detailmsg.autoresponse(this.sendMsg);
      }
      if(content=""){
        this.$refs.inputtxt.value = "";
      }
       
    }
  }
};
</script>
<style lang='scss'>
html,
body {
  background-color: #edecef;
}
#chatInterface {
  width: 100%;
  height: 100%;
  // height: auto;
  .chathead {
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
    .back {
      flex: 0.07;
      margin-left: 0.5rem;
    }
    .nickname {
      flex: 0.8;
      text-align: left;
    }
    .more {
      flex: 0.09;
      text-align: right;
    }
  }
  .midchat {
    height: 100%;
    width: 100%;
  }
  .chatfoot {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 4rem;
    background-color: #e5e5e5;
    display: flex;
    flex-direction: row;
    .horn {
      flex: 0.5;
      position: relative;
      top: 0.5rem;
      line-height: 3rem;
      font-size: 2rem;
      left: 0.7rem;
    }
    .smile {
      flex: 0.5;
      position: relative;
      top: 0.5rem;
      line-height: 3rem;
      font-size: 2rem;
      left: 0.6rem;
    }
    .add {
      position: relative;
      flex: 0.5;
      top: 0.5rem;
      line-height: 3rem;
      font-size: 2rem;
      left: 0.3rem;
    }
    .txt {
      position: relative;
      top: 0.8rem;
      flex: 2.5;
      width: 100%;
      border: 1px solid silver;
      border-radius: 0.5rem;
      height: 2.5rem;
      outline: none;
      box-sizing: border-box;
      padding-left: 1rem;
      background-color: white;
    }
  }
}
</style>