<template>
  <div id="search">
      <div class="head">
          <i class="iconfont" @click="toback">&#xebc6;</i>
          <input type="text" value="搜索">
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods:{
      toback(){
          this.$router.back(-1);
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
        i{
            color: rgb(112, 112, 112);
        }
        input{
            margin-left: 0.5rem;
            color:silver;
            width: 80%;
            height: 3rem;
            font-size: 1.3rem;
            background-color: #EDEDED;
            border: none;
            outline: none;
        }
    }
}
</style>