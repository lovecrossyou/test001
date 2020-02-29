<template>

<!-- 评价 -->
  <div class="content">
    <div>
      老师说：
      <span class="tea-commment">{{teatcher}}</span>
    </div>
    <div v-for="(com, index) in comments" :key="index">
      <ComItem :data="com" :key="index" />
    </div>

    <div class="btn-more" v-on:click="show_More">
      <i v-show="false===showMore" class="el-icon-caret-bottom"></i>
      <i v-show="true===showMore" class="el-icon-caret-top"></i>
    </div>
  </div>
</template>

<script>
import ComItem from "./comment-item";
import {mapState} from 'vuex';

export default {
  components: {
    ComItem
  },
  computed: {
    ...mapState('commentStore',['comments']),
    currrentList() {
      if (this.showMore) return this.list;
      return this.list.slice(0, 3);
    }
  },
  data() {
    return {
      showMore: false,
      teatcher: "小明很用心，这节课表现很好，下次继续努力！",
    };
  },
  methods: {
    show_More() {
      this.showMore = !this.showMore;
    }
  }
};
</script>

<style>
.content {
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  box-shadow: 0px 0px 2px 1px #e1e1e1;
  border-radius: 8px;

  margin-top: 10px;
}

.tea-commment {
  color: #cc2636;
  font-size: 13px;
}

.btn-more {
  margin-top: 10px;
  text-align: center;
}
</style>