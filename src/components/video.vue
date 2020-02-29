<template>
  <div>
    <div class="title">作品社区</div>
    <div v-for="(v,index) in videos" :key="index">
      <div class="video-box">
        <ZuoPin></ZuoPin>
        <Comment></Comment>
      </div>
    </div>
  </div>
</template>

<script>
import ZuoPin from "./zuopin";
import Comment from "./comment";
import { Message } from "element-ui";

export default {
  name: "HelloWorld",
  data() {
    return {
      videos: [1, 2]
    };
  },
  props: {},
  components: {
    ZuoPin,
    Comment
  },
  mounted() {
    var that = this;
    window.addEventListener("scroll", function() {
      var scr = document.documentElement.scrollTop || document.body.scrollTop; // 向上滚动的那一部分高度
      var clientHeight = document.documentElement.clientHeight; // 屏幕高度也就是当前设备静态下你所看到的视觉高度
      var scrHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight; // 整个网页的实际高度，兼容Pc端
      if (scr + clientHeight + 10 >= scrHeight) {
        that.videos.push(3);
        Message.closeAll();
        that.$message("已加载3条数据");
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

.video-box{
  margin-bottom: 60px;
}
</style>
