<template>
  <div id="more">
    <div class="head">
      <i class="iconfont back" @click="toback">&#xebc6;</i>
      <span class="chatInfo">聊天信息</span>
    </div>
    <div class="faceInfo">
      <div class="left">
        <img :src="url" @click="detailMsg">
        <p>{{nick}}</p>
      </div>
      <div class="right">
        <i class="iconfont add" @click="toChoose">&#xeb8f;</i>
      </div>
    </div>
    <div class="chatlog" @click="searchChatLog">
      查找聊天记录
      <i class="iconfont" @click="searchChatLog">&#xebc7;</i>
    </div>
    <div class="topChatBlock">
      <div class="topChat">
        顶置聊天
        <!-- 开关插件 -->
        <div class="switchicon">
          <v-switch></v-switch>
        </div>
      </div>
      <div class="topChat setBorder">
        消息免打扰
        <!-- 开关插件 -->
        <div class="switchicon">
          <v-switch></v-switch>
        </div>
      </div>
      <div class="topChat">
        强提醒
        <!-- 开关插件 -->
        <div class="switchicon">
          <v-switch></v-switch>
        </div>
      </div>
    </div>
    <div class="chatlog" @click="setBackImg">
      设置当前聊天背景
      <i class="iconfont" @click="searchChatLog">&#xebc7;</i>
    </div>
    <div class="chatlog" @click="setBackImg">
      清空聊天记录
      <i class="iconfont" @click="searchChatLog">&#xebc7;</i>
    </div>
    <div class="chatlog" @click="setBackImg">
      投诉
      <i class="iconfont" @click="searchChatLog">&#xebc7;</i>
    </div>
  </div>
</template>
<script>
import Switch from "./Switch.vue";
// import Search from "./searchChatLog.vue";
export default {
  name: "more",
  components: {
    "v-switch": Switch,
    // "v-search":Search
  },
  mounted() {
    this.url = this.$route.query.url;
    this.nick = this.$route.query.nick;
    this.chatid = this.$route.query.chatid;
    this.tel = this.$route.query.tel;
    this.region = this.$route.query.region;
    this.id = this.$route.query.id;
    this.thisIndex = this.$route.query.thisIndex;
    this.backImg = this.$route.query.backImg;
    console.log(this.thisIndex);
  },
  data() {
    return {
      url: "",
      nick: "",
      chatid: "",
      tel: null,
      region:"",
      id:"",
      thisIndex:null,
      backImg:"",
    };
  },
  methods: {
    toback() {
      this.$router.go(-1);
    },
    detailMsg() {
      //路由跳转到详细信息界面
      this.$router.push({
        path: "/chatInterface/more/detailMsg",
        query: {
          url: this.url,
          nick: this.nick,
          chatid: this.chatid,
          tel: this.tel,
          region:this.region,
          id:this.id,
          thisIndex:this.thisIndex,
          backImg:this.backImg,
        }
      });
    },
    toChoose() {
      //路由跳转到发起群聊界面

    },
    searchChatLog() {
      //跳转到搜索聊天记录界面
      this.$router.push({
        path:"/chatInterface/more/Search"
      })
    },
    setBackImg() {
      //跳转到设置当前聊天背景页面
      this.$router.push({
        path:"/chatInterface/more/setBackImg",
        query:{
          thisIndex:this.thisIndex,
        }

      })
    }
  }
};
</script>
<style lang='scss'>
body,
html {
  background-color: #edecef;
}
#more {
  .topChatBlock {
    position: relative;
    top: 4rem;
    padding-left: 1rem;
    height: 12rem;
    background-color: white;
    margin-bottom: 1rem;
    .topChat {
      height: 4rem;
      line-height: 4rem;
      font-size: 1.3rem;
      position: relative;
      .switchicon {
        position: absolute;
        right: 1rem;
        top: 1rem;
      }
    }
    .setBorder {
      border-top: 1px solid rgb(223, 223, 223);
      border-bottom: 1px solid rgb(223, 223, 223);
    }
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
    border-bottom: 1px solid rgb(223, 223, 223);
    margin-bottom: 1rem;
    .back {
      flex: 0.1;
      padding-left: 1rem;
    }
    .chatInfo {
      flex: 1.2;
    }
  }
  .faceInfo {
    position: relative;
    top: 4.3rem;
    width: 100%;
    height: 8rem;
    background-color: white;
    padding-left: 1rem;
    margin-bottom: 1rem;
    .left {
      position: absolute;
      top: 1rem;
      width: 4rem;
      height: 6rem;
      img {
        width: 4rem;
        height: 4rem;
        border-radius: 0.6rem;
      }
      p {
        line-height: 2rem;
        text-align: center;
        color: silver;
      }
    }
    .right {
      position: absolute;
      left: 7rem;
      top: 1rem;
      width: 4rem;
      height: 4rem;
      border: 1px solid rgb(223, 223, 223);
      border-radius: 0.1rem;
      text-align: center;
      line-height: 4rem;
      .add {
        font-size: 2.5rem;
        color: silver;
      }
    }
  }
  .chatlog {
    position: relative;
    top: 3.8rem;
    width: 100%;
    height: 4rem;
    background-color: white;
    padding-left: 1rem;
    line-height: 4rem;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    i {
      position: absolute;
      right: 1.8rem;
      color: silver;
    }
  }
}
</style>