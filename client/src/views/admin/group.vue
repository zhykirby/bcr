<template>
  <div class="userCard">
        <div class="margin">
          选择要查看的已经排好刀的成员
        </div>
        <el-select v-model="user" placeholder="请选择" class="select">
          <el-option
            v-for="item in users"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <div class="margin">
          <el-button type="primary" @click="chooseUser()">确定</el-button>
        </div>
        <div class="showGroup">
          <el-tabs type="border-card">
              <el-tab-pane label="甜心刀">
                成员一：{{ g1 }}<br/>
                成员二：{{ g2 }}<br/>
                成员三：{{ g3 }}<br/>
                成员四：{{ g4 }}<br/>
                成员五：{{ g5 }}<br/><br/><br/><br/><br/>
                甜心刀：指像纱雾一样但是没有伤害的刀。
              </el-tab-pane>
              <el-tab-pane label="自动刀">
                成员一：{{ g6 }}<br/>
                成员二：{{ g7 }}<br/>
                成员三：{{ g8 }}<br/>
                成员四：{{ g9 }}<br/>
                成员五：{{ g10 }}<br/><br/><br/><br/><br/>
                自动刀：自动两倍速就完事了。
              </el-tab-pane>
              <el-tab-pane label="暴毙刀">
                成员一：{{ g11 }}<br/>
                成员二：{{ g12 }}<br/>
                成员三：{{ g13 }}<br/>
                成员四：{{ g14 }}<br/>
                成员五：{{ g15 }}<br/><br/><br/><br/><br/>
                暴毙：碰上暴毙轴的刀。
              </el-tab-pane>
          </el-tabs>
        </div>
      </div>
</template>

<script>
export default {
  data() {
    return {
      user: '',
      users: [],
      g1: '',
      g2: '',
      g3: '',
      g4: '',
      g5: '',
      g6: '',
      g7: '',
      g8: '',
      g9: '',
      g10: '',
      g11: '',
      g12: '',
      g13: '',
      g14: '',
      g15: '',
    }
  },
  created() {
    this.$http.get('/userName')
      .then(res => {
        if (res.code === 200) {
          let usersInfo = []
          usersInfo = res.users
          usersInfo.map(item => {
            let temp = {}
            temp.label = item.userName
            temp.value = item.userName
            this.users.push(temp)
          })
        } else {
          this.$message({message: '出错啦……再试一次吧？', type: 'error'})
        }
      })
  },
  methods: {
    chooseUser() {
      let name = this.user
      this.$http.get('/getGroup', {
        name: name
      }).then(res => {
        if (res.code === 200) {
          this.g1 = res.group.group1
          this.g2 = res.group.group2
          this.g3 = res.group.group3
          this.g4 = res.group.group4
          this.g5 = res.group.group5
          this.g6 = res.group.group6
          this.g7 = res.group.group7
          this.g8 = res.group.group8
          this.g9 = res.group.group9
          this.g10 = res.group.group10
          this.g11 = res.group.group11
          this.g12 = res.group.group12
          this.g13 = res.group.group13
          this.g14 = res.group.group14
          this.g15 = res.group.group15
        } else {
          this.$message({message: '出错啦……再试一次吧？', type: 'error'})
        }
      })
    }
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
.userCard
    width 600px
    margin auto
    height 800px
    .margin
      margin 20px 0 20px 0
</style>