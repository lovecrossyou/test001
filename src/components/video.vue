<template>
  <div>
    <div class='title'>作品社区</div>
    <div v-for="(v,index) in videos" :key="index">
      <div>
        <ZuoPin></ZuoPin>
        <Comment></Comment>
      </div>
    </div>
  </div>
</template>

<script>
import ZuoPin from "./zuopin";
import Comment from "./comment";

export default {
  name: "HelloWorld",
  data() {
    return {
      videos: [1,]
    }
  },
  props: {},
  components: {
    ZuoPin,
    Comment
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  font-size: 36px;
  font-weight: bold;
}
</style>
