<template>
  <div id="chat">
    <v-head :name="title"></v-head>
    <div class="block">
      <div
        class="emmm"
        ref="perChat"
        v-for="(item,index) in chatlist"
        :key="index"
        @click="chooseChat(index)"
      >
        <v-chatchild
          :url="item.url"
          :nickname="item.nickname"
          :time="item.time"
          :lastmsg="item.lastmsg"
          :class="{active: currentIndex === index}"
        ></v-chatchild>
      </div>
    </div>
    <v-foot></v-foot>
  </div>
</template>
<script>
import Foot from "../Menu/Foot.vue";
import Head from "../Menu/Head.vue";
import chatChild from "./pagesChild/chatChild.vue";
import axios from "axios";

export default {
  components: {
    "v-foot": Foot,
    "v-head": Head,
    "v-chatchild": chatChild
  },
  data() {
    return {
      title: "微信",
      chatlist: null,
      currentIndex: -1
    };
  },
  mounted() {
    axios.get("/chat").then(res => {
      this.chatlist = res.data.result;
    });
  },
  methods: {
    chooseChat(index) {
      this.currentIndex = index;
      // this.$refs.perChat[index].style.background = "#E5E5E5";
      const user = this.chatlist[index];
      // let id = user.id;
      // let nickname=user.nickname;
      // let url=user.url;
      // let chatid=user.chatid;
      // let tel=user.tel;
      // let region=user.region;
      // let backImg=user.backImg;
      // let thisIndex=index;
      const {
        id,
        nickname,
        url,
        chatid,
        tel,
        region,
        backImg,
        thisIndex
      } = user;
      //等待dom元素修改完成之后
      this.$nextTick(() => {
        this.$router.push({
          path: "/chatInterface",
          query: {
            id: id,
            nick: nickname,
            url: url,
            chatid: chatid,
            tel: tel,
            region: region,
            thisIndex: thisIndex,
            backImg: backImg
          }
        });
      });
    }
  }
};
</script>
<style lang='scss'>
#chat {
  width: 100%;
  height: 100%;
  .block {
    position: relative;
    top: 3.5rem;
    margin-bottom: 4rem;
    .emmm {
      width: 100%;
      height: 100%;
      &.active {
        background: #e5e5e5;
      }
    }
  }
}
</style>