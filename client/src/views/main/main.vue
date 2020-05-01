<template>
  <div class="vh100">
    <!-- title="top-bar" 后期移植到top-bar组件 -->
    <div class="mainFlex">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo flex-center no-border"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1" @click="$router.push('/main');activeIndex = '1'">15卡战力页</el-menu-item>
        <el-menu-item index="2">
          <router-link class="link" :to="{path: '/add/' + id}" >登记战力</router-link>
        </el-menu-item>
        <el-menu-item index="3" @click="$router.push('/group');activeIndex = '3'">查看编排队伍</el-menu-item>
        <el-menu-item index="4" @click="$router.push('/about');activeIndex = '4'">关于</el-menu-item>
      </el-menu>
      <router-view v-if="routerState"/>
      <div class="footer">
        <p>
          producted by Cloudy<br/>
          用于公主连结公会战统计队伍<br/>
          click here to my github :<a href="https://github.com/zhykirby">https://github.com/zhykirby</a>
        </p>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      routerState: true,
      id: ''
    }
  },
  provide() {
    return {
      reload: this.reload
    }
  },
  methods: {
    reload() {
      this.routerState = false
      this.$nextTick(() => {
        this.routerState = true
      })
    }
  },
  created() {
    this.id = localStorage.getItem('user')
  }
}
</script>

<style scoped>
body{
  margin: 0;
  padding: 0;
}
.flex-center{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.footer{
  display: flex;
  justify-content: center;
  background: #545c64;
  color:#fff;
  height: 100px;
  flex-wrap: wrap;
  align-self: flex-end;
  width: 100%;
  flex: 1;
}
p{
  align-self: center;
  text-align: center;
}
a{
  color: #ffd04b;
}
.no-border{
  border: 0;
}
.mainFlex {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.vh100 {
  height: 100vh;
}
</style>