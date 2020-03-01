<template>
  <div>
    <div id="myChart" :style="{width:'100px',height: '100px'}"></div>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: "axis"
        },
        radar: [
          {
            indicator: [
              { text: "外观", max: 100 },
              { text: "拍照", max: 100 },
              { text: "系统", max: 100 },
              { text: "性能", max: 100 },
              { text: "屏幕", max: 100 },
              {text:"像素",max:100}
            ],
            radius: 50,
            center: ["50%", "50%"]
          }
        ],
        series: [
          {
            type: "radar",
            tooltip: {
              trigger: "item"
            },
            areaStyle: {},
            data: [
              {
                value: [60, 73, 85, 40],
                name: "某软件"
              }
            ]
          },
          {
            type: "radar",
            radarIndex: 1,
            areaStyle: {},
            data: [
              {
                value: [85, 90, 90, 95, 95],
                name: "某主食手机"
              },
              {
                value: [95, 80, 95, 90, 93],
                name: "某水果手机"
              }
            ]
          },
          {
            type: "radar",
            radarIndex: 2,
            areaStyle: {},
            data: [
              {
                name: "降水量",
                value: [
                  2.6,
                  5.9,
                  9.0,
                  26.4,
                  28.7,
                  70.7,
                  75.6,
                  82.2,
                  48.7,
                  18.8,
                  6.0,
                  2.3
                ]
              },
              {
                name: "蒸发量",
                value: [
                  2.0,
                  4.9,
                  7.0,
                  23.2,
                  25.6,
                  76.7,
                  35.6,
                  62.2,
                  32.6,
                  20.0,
                  6.4,
                  3.3
                ]
              }
            ]
          }
        ]
      });
    }
  }
};
</script>

<style>
</style>