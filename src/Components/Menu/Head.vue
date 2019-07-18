<template>
  <div id="headinfo">
    <span>{{name}}</span>
    <i class="iconfont">&#xebda;</i>
    <i class="iconfont">&#xebd8;</i>
  </div>
</template>
<script>
export default {
  props:{
      name:String
  },
  data() {
    return {
      
    };
  }
};
</script>
<style lang='scss'>
#headinfo{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 3.5rem;
    display: flex;
    flex-direction: row;
    background-color: #E5E5E5;
    z-index: 10;
    span{
        font-size: 1.2rem;
        padding: 1rem;
        flex:1;
    }
    i{
        padding: 1rem 1rem;
        font-size: 1.6rem;
    }
}
</style>