<template>
  <div id="chat" class="chate"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;

// 确保只在组件挂载后才初始化图表
onMounted(() => {
  // 获取DOM元素，注意这里直接使用 ref 或者 :id 不需要感叹号
  const chartDom = document.getElementById('chat');
  if (!chartDom) {
    console.error('Chart container not found!');
    return;
  }

  const myChart = echarts.init(chartDom);
  const option: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  };

  // 设置选项之前检查是否有效
  if (option) {
    myChart.setOption(option);
  }
});
</script>

<style scoped>
/* 添加一些样式以确保 div 有尺寸 */
.chat {
  width: 600px;
  height: 400px;
}
</style>