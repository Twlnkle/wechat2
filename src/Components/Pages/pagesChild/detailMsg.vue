<template>
  <div id="detailMsg">
    <div class="head">
      <i class="iconfont back" @click="toback">&#xebc6;</i>
      <i class="iconfont more">&#xebc5;</i>
    </div>
    <div class="faceInfo">
      <img :src="this.url">
      <div class="textInfo">
        <p class="nick" v-html="this.nick"></p>
        <p class="region">昵称：{{this.nick}}</p>
        <p class="region">微信号：{{this.chatid}}</p>
        <p class="region">地区：{{region}}</p>
      </div>
    </div>
    <div class="msgList">
      <!-- <div class="chatlog" @click="setRemark"> -->
      <div class="chatlog" @click="toSetMark">
        设置备注和标签
        <!-- <i class="iconfont" @click="searchChatLog">&#xebc7;</i> -->
        <i class="iconfont">&#xebc7;</i>
      </div>
      <!-- <div class="chatlog" @click="setBackImg"> -->
      <div class="chatlog">
        电话号码
        <span class="tel">{{this.tel}}</span>
      </div>
    </div>

    <div class="msgList">
      <div class="chatlog">
        朋友圈
        <i class="iconfont">&#xebc7;</i>
      </div>

      <div class="chatlog">更多信息</div>
    </div>

    <div class="block">
      <!-- <div class="chatlog" @click="setRemark"> -->
      <div class="audio" @click="toChatInterface">
        <i class="iconfont">&#xebe3;</i>
        发消息
      </div>
      <div class="audio">
        <i class="iconfont">&#xebfa;</i>
        音视频通话
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: "",
      nick: "",
      chatid: "",
      tel: null,
      region: "",
      id:"",
      thisIndex:null,
    };
  },
  mounted() {
    this.url = this.$route.query.url;
    this.nick = this.$route.query.nick;
    this.chatid = this.$route.query.chatid;
    this.tel = this.$route.query.tel;
    this.region = this.$route.query.region;
    this.id = this.$route.query.id;
    this.thisIndex = this.$route.query.thisIndex;
  },
  methods: {
      toSetMark(){
          //路由跳转到设置备注页面
          this.$router.push({
              path:"/chatInterface/more/detailMsg/setMark",
              query:{
                  nick:this.nick,
                  id:this.id,
                  thisIndex:this.thisIndex
              }
          })
      },
    toChatInterface() {
      this.$router.push({
        path: "/chatInterface",
        query: {
          id: this.id,
          nick: this.nick,
          url: this.url,
          chatid: this.chatid,
          tel: this.tel,
          region: this.region,
          thisIndex:this.thisIndex
        }
      });
    },
    toback() {
      this.$router.back(-1);
    },
    setRemark() {
      //路由跳转到设置备注和标签页
    }
  }
};
</script>
<style lang='scss' scope>
body,
html {
  background-color: EDECEF;
}
#detailMsg {
  .head {
    padding: 0 1rem;
    height: 4rem;
    line-height: 4rem;
    font-size: 1.3rem;
    background-color: white;
    .back {
      float: left;
    }
    .more {
      float: right;
    }
  }
  .faceInfo {
    padding-left: 1rem;
    background-color: white;
    // border-bottom: 1px solid rgb(231, 231, 231);
    height: 12rem;
    img {
      margin-top: 1rem;
      width: 5rem;
      height: 5rem;
      border-radius: 0.8rem;
    }
    .textInfo {
      position: relative;
      top: -4.8rem;
      margin-left: 6.5rem;
      .nick {
        font-size: 1.5rem;
        font-weight: bold;
      }
      .region {
        color: silver;
        margin-top: 0.5rem;
        font-size: 1.1rem;
      }
    }
  }
  .msgList {
    position: relative;
    //   top: 1rem;
    border-top: 1px solid rgb(235, 235, 235);
    border-bottom: 1px solid rgb(235, 235, 235);
    margin-bottom: 0.5rem;
    .chatlog {
      width: 100%;
      height: 4rem;
      background-color: white;
      padding-left: 1rem;
      line-height: 4rem;
      font-size: 1.3rem;
      i {
        position: absolute;
        right: 1.8rem;
        color: silver;
      }
      .tel {
        color: rgb(7, 58, 99);
      }
    }
  }
  .block {
    .audio {
      font-size: 1.2rem;
      text-align: center;
      color: rgb(7, 58, 99);
      width: 100%;
      height: 4rem;
      line-height: 4rem;
      background-color: white;
      border-bottom: 1px solid rgb(235, 235, 235);
      font-weight: bolder;
      .iconfont {
        font-size: 1.5rem;
        margin-right: 0.3rem;
        font-weight: normal;
      }
    }
  }
}
</style>