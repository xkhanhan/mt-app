<template>
<!-- 默认的模板组件 -->
  <div class="layout-default">
    <el-container>
      <el-header style="height : ''">
          <my-header></my-header>
      </el-header>
      <el-main>
          <router-view></router-view>
      </el-main>
      <el-footer>
          <my-footer></my-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import MyHeader from '../components/header/index'
import MyFooter from '../components/footer/index'
export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style  lang="scss">
@import "../assets/css/public/layout.scss";
</style>
