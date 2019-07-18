<template>
  <div id="detailInfo" ref="toscroll">
    <div v-for="(item,index) in list" :key="index" class="mymsg">
      <div class="lgs" v-if="item.id==10086">
        <img :src="item.url" alt class="myface1">
        <div class="bubble1">
          <span class="cnt1">{{item.msg}}</span>
        </div>
      </div>

      <div class="ygs" v-if="item.id==10088">
        <img :src="item.url" alt class="myface2">
        <div class="bubble2">
          <span class="cnt2">{{item.msg}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import user from "./myinfo.js";
export default {
  props: {
    send: String
  },
  name: "detailInfo",
  data() {
    return {
      url: "",
      list: [],
      scrollH: null
    };
  },
  mounted() {
    this.url = user.face;
  },
  updated() {
    this.$refs.toscroll.scrollTop = this.$refs.toscroll.scrollHeight;
  },
  methods: {
    saveMsg(msg) {
      this.list.push({
        id: user.id,
        url: this.url,
        msg: msg
      });
    },
    autoresponse(msg) {
      let data = user.data;
      let handleData = msg
        .replace("？", "!")
        .replace("吗", "")
        .replace("你", "我")
        .replace("?", "");
      this.list.push({
        id: data[0].id,
        url: data[0].face,
        msg: handleData
      });
    }
  }
};
</script>
<style lang='scss'>
#detailInfo {
  position: relative;
  top: 5%;
  width: 100%;
  height: 88%;  
  overflow-y: scroll;
  overflow-x: hidden;
  margin-bottom: 4rem;
  .mymsg {
    height: auto;
    position: relative;
    margin: 1rem 0;
    .ygs {
      position: relative;
      width: 100%;
      overflow: hidden;
      // clear:both;
      .myface2 {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 0.7rem;
        float: left;
        margin-right: 1rem;
        margin-left: 0.8rem;
      }
      .bubble2 {
        position: relative;
        background-color: white;
        border-radius: 0.5rem;
        width: auto;
        max-width: 65%;
        padding: 0.7rem 1rem;
        float: left;
        .cnt2 {
          font-size: 1.2rem;
          line-height: 2rem;
          word-wrap: break-word;
          word-break: normal;
        }
      }
      .bubble2::after {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        top: 1.1rem;
        left: -1.3rem;
        border: 0.7rem solid;
        border-color: transparent white transparent transparent;
      }
    }
    .lgs {
      position: relative;
      width: 100%;
      overflow: hidden;
      // clear:both;
      .myface1 {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 0.7rem;
        float: right;
        margin-right: 1rem;
        margin-left: 0.8rem;
      }
      .bubble1 {
        position: relative;
        background-color: rgb(62, 199, 62);
        border-radius: 0.5rem;
        width: auto;
        max-width: 65%;
        padding: 0.7rem 1rem;
        float: right;
        .cnt1 {
          font-size: 1.2rem;
          line-height: 2rem;
          word-wrap: break-word;
          word-break: normal;
        }
      }
      .bubble1::after {
        content: "";
        position: absolute;
        //   z-index: 110;
        width: 0;
        height: 0;
        top: 1.1rem;
        right: -1.3rem;
        border: 0.7rem solid;
        border-color: transparent transparent transparent rgb(62, 199, 62);
      }
    }
  }
}
</style>