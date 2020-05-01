<template>
  <div id='graphs'></div>
</template>

<script>
/* eslint-disable max-len */
let echarts = require('echarts')
export default {
  mounted() {
    let promise = new Promise((resolve, reject) => {
      this.$http.get('/all')
        .then(res => {
          if (res.code === 200) {
            resolve(res.all)
          } else {
            this.$message({message: '出错啦……再试一次吧？', type: 'error'})
          }
        })
    }).then(data => {
      this.user = data
      this.handleData(this.user)
      this.draw()
    })
    return promise
  },
  methods: {
    draw() {
      let graphs = echarts.init(document.getElementById('graphs'))
      let categories = [{name: '公会已登记成员'}]
      let dataArray = this.userData
      graphs.setOption({
        title: {
          text: '鼠标悬浮查看'
        },
        tooltip: {
        },
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        legend: [{
            // selectedMode: 'single',
          data: categories.map(function(a) {
            return a.name
          })
        }],
        grid: {
          x: 200,
          y: 100,
          x2: 200,
          y2: 100
        },
        series: [
          {
            name: '公会成员',
            type: 'graph',
            layout: 'circular',
            // roam: true,
            color: ['#4F94CD', '#f7a2ce'],
            data: dataArray,
            categories: categories,
            symbolSize: 80,
            focusNodeAdjacency: true,
            lineStyle: {
              normal: {
                show: true,
                color: 'target',
                curveness: 0.3,
                width: 6
              }
            },
            emphasis: {
              lineStyle: {
                width: 15
              }
            },
            itemStyle: {
              normal: {
                borderColor: '#fff',
                borderWidth: 1,
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.3)'
              }
            },
            label: {
              position: 'right',
              formatter: '{b}'
            }
          }
        ]
      })
    },
    handleData(arr) {
      arr.map(item => {
        let user = {}
        user.name = item.userName
        let CE15 = item.card1.cardCE + item.card2.cardCE + item.card3.cardCE + item.card4.cardCE + item.card5.cardCE + item.card6.cardCE + item.card7.cardCE + item.card8.cardCE + item.card9.cardCE + item.card10.cardCE + item.card11.cardCE + item.card12.cardCE + item.card13.cardCE + item.card14.cardCE + item.card15.cardCE
        user.value = CE15
        user.symbolSize = 60
        user.category = 0
        user.label = {show: true}
        let id = item.userId % 5
        switch (id) {
        case 0:
          user.itemStyle = {color: '#4F94CD'}
          break
        case 1:
          user.itemStyle = {color: '#EE6A50'}
          break
        case 2:
          user.itemStyle = {color: '#63c273'}
          break
        case 3:
          user.itemStyle = {color: '#ffdb84'}
          break
        case 4:
          user.itemStyle = {color: '#f7a2ce'}
          break
        default:
          user.itemStyle = {color: '#f7a2ce'}
          break
        }
        user.tooltip = {formatter: '{a}<br/><div style="display: flex;flex-wrap: nowrap;align-items:flex-start;margin-bottom: -20px"><div style="width: 12px;height: 12px;background: #4F94CD;border-radius: 6px;margin-right: 10px;margin-top: 4px"></div>{b}</div><br/>总战力:{c}'}
        this.userData.push(user)
      })
    }
  },
  created() {
  },
  data() {
    return {
      user: [],
      userData: []
    }
  }
}
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
#graphs
  width 100%
  height 800px
  margin auto
</style>