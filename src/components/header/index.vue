<template>
    <div class="m-header">
        <el-row class="top">
            <top-bar></top-bar>
        </el-row>
        <el-row >
            <search-bar></search-bar>
        </el-row>
    </div>
</template>
<script>
import topBar from './topbar'
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
