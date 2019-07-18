<template>
  <div id="user"> 
    <v-head :name="title"></v-head>
    <v-foot></v-foot>
  </div>
</template>
<script>
import Foot from "../Menu/Foot.vue"
import Head from "../Menu/Head.vue"
export default {
    components:{
        "v-foot":Foot,
        "v-head":Head
    },
  name: "user",
  data() {
    return {
      title:"通讯录"
    };
  }
};
</script>
<style lang='scss'>
#user{
    width: 100%;
    height: 100%;
}
</style>