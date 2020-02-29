<template>
  <div class="head">
  <div class="head_left">
      <img class="head_img" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1519951209,325830002&fm=26&gp=0.jpg" alt="">
      <p class="head_p">源码熊</p>
  </div>
  <div class="head_right">
    <!-- <p class="right_p">源码熊编程</p> -->
    <i class="el-icon-bell" ></i>
    <p class="right_p">源码熊编程</p>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.head{
  width: 100%;
  height: 60px
}
.head_img{
    height: 30px;
    width: 30px;
    border-radius: 50%;
    float:left;
    margin-top: 12px
}
.head_p{
  float: left;
  /* margin-left: 5px;
  margin-top: 8px; */
}

.head_right{
  float:right;
  /* margin-top: 5px; */
  height: 50px
}

.right_p{
  font-size: 16px;
  right: 10%;
  /* margin-top: 2px; */
  font-weight: bolder;
  float: right;
}
.el-icon-bell{
  margin-top: 20px;
  float: right;
  margin-left: 3px;
}


</style>