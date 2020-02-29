<template>
  <div class="content">
    <div>
      <!-- 超级玛丽  时间 -->
      <div class="v-info">
        <div class="v-info-left">
          <div class="v-info-left-title">
            超级玛丽
            <span class="v-info-left-time">2020.05.10 5:30</span>
          </div>
        </div>
        <div class="v-info-right"></div>
      </div>

      <!-- 视频 -->
      <div class="video-bg-fix">
        <div class="option-fix">
          <el-rate :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></el-rate>
        </div>

        <div class="do-comment">
          <el-button type="primary" round>评论</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "video.js/dist/video-js.css";

// import { videoPlayer } from "vue-video-player";

export default {
  components: {
    // videoPlayer
  },
  data() {
    return {
      playerOptions: {
        // videojs options
        muted: true,
        language: "en",
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: "video/mp4",
            src:
              "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }
        ],
        poster: "/static/images/author.jpg"
      },
      value: null
    };
  },
  mounted() {
    console.log("this is current player instance object", this.player);
  },
  computed: {
    // player() {
    //   return this.$refs.videoPlayer.player;
    // }
  },
  methods: {
    // listen event
    onPlayerPlay(player) {
      console.log("player play!", player);
    },
    onPlayerPause(player) {
      console.log("player pause!", player);
    },
    // ...player event

    // or listen state event
    playerStateChanged(playerCurrentState) {
      console.log("player current update state", playerCurrentState);
    },

    // player is ready
    playerReadied(player) {
      console.log("the player is readied", player);
      // you can use it to do something...
      // player.[methods]
    }
  }
};
</script>

<style scoped>
.content {
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  height: 266px;
  width: 100%;
  box-shadow:0px 0px  5px 2px #e1e1e1;
  border-radius: 8px;

}
.video-player-box {
  width: 100%;
  height: 180px;
}

.video-bg-fix {
  background: url("https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3589668813,4189954014&fm=15&gp=0.jpg")
    no-repeat center;
  background-size: cover;
  height: 200px;
  width: 100%;
  position: relative;
}

.do-comment {
  position: absolute;
  right: 10px;
  bottom: 10px;
}

.v-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.v-info-left-title {
  font-weight: bold;
  font-size: 18px;
  color: #666;
}

.v-info-left-time {
  font-weight: 100;
  font-size: 14px;
  color: #999;
}

.option-fix {
  float: right;
}
</style>>