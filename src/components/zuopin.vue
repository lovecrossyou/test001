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
        <div class="v-info-right">
          <i class="el-icon-s-promotion"></i>
        </div>
      </div>
      <!-- video -->

      <div class="advertising">
        <video-player
          class="video-player vjs-custom-skin"
          ref="videoPlayer"
          :playsinline="true"
          :options="playerOptions"
        ></video-player>

        <!-- 评分 -->
        <el-rate v-model="value" show-text class="grade"></el-rate>


        <v-chart :option="option"></v-chart>
      </div>
      <!-- video -->
      <!-- 评论 -->

      
      <div class="do-comment">
        <el-button type="primary" round @click="open">
          <i class="el-icon-more" />
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import "video.js/dist/video-js.css";
import { mapActions } from 'vuex';
import ECharts from 'vue-echarts/components/ECharts'

// import { videoPlayer } from "vue-video-player";

export default {
  components: {
    // videoPlayer
    'v-chart': ECharts
  },
  data() {
    return {
      // video
      playerOptions: {
        //播放速度
        playbackRates: [0.5, 1.0, 1.5, 2.0],
        //如果true,浏览器准备好时开始回放。
        autoplay: false,
        // 默认情况下将会消除任何音频。
        muted: false,
        // 导致视频一结束就重新开始。
        loop: false,
        // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        preload: "auto",
        language: "zh-CN",
        // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        aspectRatio: "16:9",
        // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        fluid: true,
        sources: [
          {
            //类型
            type: "video/mp4",
            //url地址
            src:
              "https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/cae-legoup-video-target/acc777cc-c689-46f2-859f-77caa425629a.mp4"
          }
        ],
        //你的封面地址
        poster:
          "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3080359710,184417419&fm=26&gp=0.jpg",
        //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        notSupportedMessage: "此视频暂无法播放，请稍后再试",
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          //全屏按钮
          fullscreenToggle: true
        }
      },
      // video
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
    ...mapActions('commentStore',['addComment']),
    // listen events
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
    },
    open() {
      this.$prompt("请输入评论", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          this.addComment({
            from:'小王',
            content: value
          })
          // this.$message({
          //   type: "success",
          //   message: "你的评论是: " + value
          // });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    }
  }
};
</script>

<style scoped>
.content {
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  height: 286px;
  width: 100%;
  box-shadow: 0px 0px 2px 1px #e1e1e1;
  border-radius: 8px;
}

.video-player-box {
  width: 100%;
  height: 180px;
}

.el-button.is-round {
  padding: 5px 20px;
  margin-top: 5px;
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
  float: right;
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

/* video */

.advertising {
  display: inline-block;
  width: 100%;
  height: 195px;
  text-align: center;
  line-height: 100px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;
}

.advertising:hover {
  display: block;
}
.video-player {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.grade {
  position: relative;
  right: 0px;
  top: 0;
  height: 50px;
}
</style>



