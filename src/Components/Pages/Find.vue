<template>
  <div id="find"> 
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
  name: "find",
  data() {
    return {
      title:"发现"
    };
  }
};
</script>
<style lang='scss'>
#find{
    width: 100%;
    height: 100%;
}
</style>