<template>
  <div class="group">
      <div class="userCard">
        <div class="margin">
          选择要编排的成员
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
          <el-button type="primary" @click="choose()">确定</el-button>
        </div>
        <div class="showGroup">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>15卡信息</span>
            </div>
            <div class="text item">
              {{ this.userData.card1.cardName }} - {{ this.userData.card1.cardCE }} - {{ this.userData.card1.job }} - {{ this.userData.card1.hasAB }}<br/>
              {{ this.userData.card2.cardName }} - {{ this.userData.card2.cardCE }} - {{ this.userData.card2.job }} - {{ this.userData.card2.hasAB }}<br/>
              {{ this.userData.card3.cardName }} - {{ this.userData.card3.cardCE }} - {{ this.userData.card3.job }} - {{ this.userData.card3.hasAB }}<br/>
              {{ this.userData.card4.cardName }} - {{ this.userData.card4.cardCE }} - {{ this.userData.card4.job }} - {{ this.userData.card4.hasAB }}<br/>
              {{ this.userData.card5.cardName }} - {{ this.userData.card5.cardCE }} - {{ this.userData.card5.job }} - {{ this.userData.card5.hasAB }}<br/>
              {{ this.userData.card6.cardName }} - {{ this.userData.card6.cardCE }} - {{ this.userData.card6.job }} - {{ this.userData.card6.hasAB }}<br/>
              {{ this.userData.card7.cardName }} - {{ this.userData.card7.cardCE }} - {{ this.userData.card7.job }} - {{ this.userData.card7.hasAB }}<br/>
              {{ this.userData.card8.cardName }} - {{ this.userData.card8.cardCE }} - {{ this.userData.card8.job }} - {{ this.userData.card8.hasAB }}<br/>
              {{ this.userData.card9.cardName }} - {{ this.userData.card9.cardCE }} - {{ this.userData.card9.job }} - {{ this.userData.card9.hasAB }}<br/>
              {{ this.userData.card10.cardName }} - {{ this.userData.card10.cardCE }} - {{ this.userData.card10.job }} - {{ this.userData.card10.hasAB }}<br/>
              {{ this.userData.card11.cardName }} - {{ this.userData.card11.cardCE }} - {{ this.userData.card11.job }} - {{ this.userData.card11.hasAB }}<br/>
              {{ this.userData.card12.cardName }} - {{ this.userData.card12.cardCE }} - {{ this.userData.card12.job }} - {{ this.userData.card12.hasAB }}<br/>
              {{ this.userData.card13.cardName }} - {{ this.userData.card13.cardCE }} - {{ this.userData.card13.job }} - {{ this.userData.card13.hasAB }}<br/>
              {{ this.userData.card14.cardName }} - {{ this.userData.card14.cardCE }} - {{ this.userData.card14.job }} - {{ this.userData.card14.hasAB }}<br/>
              {{ this.userData.card15.cardName }} - {{ this.userData.card15.cardCE }} - {{ this.userData.card15.job }} - {{ this.userData.card15.hasAB }}<br/>
            </div>
          </el-card>
        </div>
      </div>
      <div class="setGroup">
        <div class="margin">设置进攻队伍一</div>
        <div class="select">
          <el-select v-model="group1" placeholder="请选择" size="mini" style="width:100px;margin:0 25px;">
              <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.label"
              :value="item.value">
              </el-option>
          </el-select>
          <el-select v-model="group2" placeholder="请选择" size="mini" style="width:100px;margin:0 25px;">
              <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.label"
              :value="item.value">
              </el-option>
          </el-select>

          <el-select v-model="group3" placeholder="请选择" size="mini" style="width:100px;margin:0 25px;">
              <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.label"
              :value="item.value">
              </el-option>
          </el-select>
          <el-select v-model="group4" placeholder="请选择" size="mini" style="width:100px;margin:0 25px;">
              <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.label"
              :value="item.value">
              </el-option>
          </el-select>

          <el-select v-model="group5" placeholder="请选择" size="mini" style="width:100px;margin:0 25px;">
              <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.label"
              :value="item.value">
              </el-option>
          </el-select>
        </div>
        <div>设置进攻队伍二</div>
        <div class="select">
          <el-select v-model="group6" placeholder="请选择" size="mini" style="width:100px;margin:0 25px;">
              <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.label"
              :value="item.value">
              </el-option>
          </el-select>
          <el-select v-model="group7" placeholder="请选择" size="mini" style="width:100px;margin:0 25px;">
              <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.label"
              :value="item.value">
              </el-option>
          </el-select>

          <el-select v-model="group8" placeholder="请选择" size="mini" style="width:100px;margin:0 25px;">
              <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.label"
              :value="item.value">
              </el-option>
          </el-select>
          <el-select v-model="group9" placeholder="请选择" size="mini" style="width:100px;margin:0 25px;">
              <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.label"
              :value="item.value">
              </el-option>
          </el-select>

          <el-select v-model="group10" placeholder="请选择" size="mini" style="width:100px;margin:0 25px;">
              <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.label"
              :value="item.value">
              </el-option>
          </el-select>
        </div>
        <div>设置进攻队伍三</div>
        <div class="select">
          <el-select v-model="group11" placeholder="请选择" size="mini" style="width:100px;margin:0 25px;">
              <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.label"
              :value="item.value">
              </el-option>
          </el-select>
          <el-select v-model="group12" placeholder="请选择" size="mini" style="width:100px;margin:0 25px;">
              <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.label"
              :value="item.value">
              </el-option>
          </el-select>

          <el-select v-model="group13" placeholder="请选择" size="mini" style="width:100px;margin:0 25px;">
              <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.label"
              :value="item.value">
              </el-option>
          </el-select>
          <el-select v-model="group14" placeholder="请选择" size="mini" style="width:100px;margin:0 25px;">
              <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.label"
              :value="item.value">
              </el-option>
          </el-select>

          <el-select v-model="group15" placeholder="请选择" size="mini" style="width:100px;margin:0 25px;">
              <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.label"
              :value="item.value">
              </el-option>
          </el-select>
        </div>
        <div class="bottom">
          <el-button type="primary" @click="setGroup()">提交</el-button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      userData: {
        card1: {cardName: '', cardCE: '', job: '', hasAB: ''},
        card2: {cardName: '', cardCE: '', job: '', hasAB: ''},
        card3: {cardName: '', cardCE: '', job: '', hasAB: ''},
        card4: {cardName: '', cardCE: '', job: '', hasAB: ''},
        card5: {cardName: '', cardCE: '', job: '', hasAB: ''},
        card6: {cardName: '', cardCE: '', job: '', hasAB: ''},
        card7: {cardName: '', cardCE: '', job: '', hasAB: ''},
        card8: {cardName: '', cardCE: '', job: '', hasAB: ''},
        card9: {cardName: '', cardCE: '', job: '', hasAB: ''},
        card10: {cardName: '', cardCE: '', job: '', hasAB: ''},
        card11: {cardName: '', cardCE: '', job: '', hasAB: ''},
        card12: {cardName: '', cardCE: '', job: '', hasAB: ''},
        card13: {cardName: '', cardCE: '', job: '', hasAB: ''},
        card14: {cardName: '', cardCE: '', job: '', hasAB: ''},
        card15: {cardName: '', cardCE: '', job: '', hasAB: ''},
      },
      card: [],
      user: '',
      options: [],
      group1: '',
      group2: '',
      group3: '',
      group4: '',
      group5: '',
      group6: '',
      group7: '',
      group8: '',
      group9: '',
      group10: '',
      group11: '',
      group12: '',
      group13: '',
      group14: '',
      group15: '',
    }
  },
  methods: {
    setGroup() {
      let name = this.user
      let g1 = this.group1
      let g2 = this.group2
      let g3 = this.group3
      let g4 = this.group4
      let g5 = this.group5
      let g6 = this.group6
      let g7 = this.group7
      let g8 = this.group8
      let g9 = this.group9
      let g10 = this.group10
      let g11 = this.group11
      let g12 = this.group12
      let g13 = this.group13
      let g14 = this.group14
      let g15 = this.group15
      this.$http.post('/set', {
        name: name,
        g1: g1,
        g2: g2,
        g3: g3,
        g4: g4,
        g5: g5,
        g6: g6,
        g7: g7,
        g8: g8,
        g9: g9,
        g10: g10,
        g11: g11,
        g12: g12,
        g13: g13,
        g14: g14,
        g15: g15
      }).then(res => {
        if (res.code === 200) {
          this.$message({message: '设定成功', type: 'success'})
          setTimeout(resolve => {
            this.$router.go(-1)
          }, 500)
        } else {
          this.$message({message: '出错啦……再试一次吧？', type: 'error'})
        }
      })
    },
    choose() {
      let name = this.user
      this.$http.get('/list', {
        name: name
      }).then(res => {
        if (res.code === 200) {
          this.userData = res.list[0]
          for (let i = 1; i < 16; i++) {
            let data = {}
            data.label = this.userData[`card${i}`].cardName
            data.value = this.userData[`card${i}`].cardName
            this.options.push(data)
          }
        } else {
          this.$message({message: '出错啦……再试一次吧？', type: 'error'})
        }
      })
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
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
.group
    margin auto
    display flex
    flex-wrap nowrap
    height 800px
    width 600px
    .userCard
        flex 1
        .margin
          margin 20px 0 20px 0
          width 200px
        .select
          height 50px
          width 280px
        .showGroup
          width 280px
          height 300px
    .setGroup
        flex 1
        display flex
        flex-direction column
        justify-content space-between
        width 300px
        .margin
          margin 20px 0 0 0
        .bottom
          margin 0 0 20px 0
          display flex
          justify-content center
.select
  display flex
  flex-wrap wrap
  height 140px

</style>