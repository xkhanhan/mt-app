<template>
<!-- 头部主体组件 -->
    <div class="m-header">
        <!-- 头部上半部分导航 -->
        <el-row class="top">
            <top-bar></top-bar>
        </el-row>

        <!-- 头部下半部分搜索 -->
        <el-row >
            <search-bar></search-bar>
        </el-row>
    </div>
</template>
<script>
// 头部上半部分导航组件
import topBar from './topbar';

// 头部下半部分搜索组件
import searchBar from './searchbar'

export default {
  name: 'my-header',
  components: {
    topBar,
    searchBar
  }
}
</script>
<style lang='scss'>
    @import '@/assets/css/public/header/index.scss';
</style>
