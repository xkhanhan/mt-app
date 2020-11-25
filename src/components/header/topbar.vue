<template>
  <el-row class="m-header-topbar ">
    <el-col :span="10">
      <my-geo></my-geo>
    </el-col>
    <el-col :span="14">
      <my-nav></my-nav>
    </el-col>
  </el-row>
</template>

<script>
import myGeo from './geo'
import myNav from './nav'
export default {
  components: {
    myGeo,
    myNav
  }
}
</script>
