<template>
  <div id="my"> 
    <v-foot></v-foot>
  </div>
</template>
<script>
import Foot from "../Menu/Foot.vue"

export default {
    components:{
        "v-foot":Foot,
    },
  name: "my",
  data() {
    return {
    };
  }
};
</script>
<style lang='scss'>
#my{
    width: 100%;
    height: 100%;
}
</style>