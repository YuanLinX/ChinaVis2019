<template>
<div>
<div id="force" style="width: 600px;height:500px;"></div>
</div>
  
</template>
<style>
#force {
  background: rgba(255, 255, 255, 0.3);
}
</style>

<script>
import echarts from 'echarts';

export default {
  name: 'force',
  mounted() {
    const myChart = echarts.init(document.getElementById('force'), 'dark');
    this.$axios.get('http://localhost:5270/graph').then(({ data }) => {
      const option = {
        title: {
          text: '力导图',
          top: 'bottom',
          left: 'center',
        },
        legend: [
          {
            data: [
              '海报区',
              '道路',
              '展厅',
              '主会场',
              '分会场',
              '餐厅',
              '休闲区',
            ],
            selected: {
              道路: true,
              展厅: true,
              主会场: true,
              海报区: false,
              分会场: false,
              餐厅: false,
              休闲区: false,
            },
          },
        ],
        tooltip: {
          trigger: 'item',
        },
        animation: false,
        series: [
          {
            name: '力导图',
            type: 'graph',
            layout: 'force',
            data: data.data.node,
            links: data.data.link,
            roam: true,
            zoom: 0.1,
            draggable: true,
            categories: [
              { name: '海报区' },
              { name: '道路' },
              { name: '展厅' },
              { name: '主会场' },
              { name: '分会场' },
              { name: '餐厅' },
              { name: '休闲区' },
            ],
            label: {
              normal: {
                position: 'right',
              },
            },
            lineStyle: {
              color: 'source',
            },
            focusNodeAdjacency: true,
            symbolSize: 12,
            force: {
              repulsion: 1000,
              initLayout: 'circular',
            },
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option, true);
      myChart.on('click', params => {
        if (params.dataType === 'node') {
          this.$bus.$emit('getFromForce', params.data.name);
        }
      });
    });
  },
};
</script>
