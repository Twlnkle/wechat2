<template>
  <div id="chatchild">
    <div class="face">
      <img :src="url">
    </div>
    <div class="content">
      <div>
        <span class="nickname">{{nickname}}</span>
        <span class="time">{{time}}</span>
      </div>
      <span class="lastmsg">{{lastmsg}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    url:String,
    nickname:String,
    time:String,
    lastmsg:String
  },
  data() {
    return {};
  }
};
</script>
<style lang='scss'>
#chatchild {
  position: relative;
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  .face {
    flex: 1.1;
    height: 5rem;
    img {
      width: 4rem;
      height: 4rem;
      display: block;
      margin: 0 auto;
      margin-top: 0.5rem;
      border-radius: 0.6rem;
    }
  }
  .content {
    flex: 4;
    height: 5rem;
    border-bottom: 0.5px solid rgb(228, 225, 225);
    box-sizing: border-box;
    .lastmsg {
      display: block;
      padding: 0.5rem 0;
      color: #C1C1C1;
    }
    div {
      .nickname {
        font-size: 1.3rem;
        margin-top: 0.55rem;
        display: inline-block;
      }
      .time {
        float: right;
        margin-top: 0.5rem;
        margin-right: 1rem;
        color: #C1C1C1;
      }
    }
  }
}
</style>