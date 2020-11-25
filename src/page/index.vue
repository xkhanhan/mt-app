<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <my-menu />
      </el-col>
      <el-col :span="19"> 
          <my-life />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24"> </el-col>
    </el-row>
  </div>
</template>

<script>
import MyMenu from "@/components/main/menu.vue";
import MyLife from "@/components/main/life.vue";

export default {
  components: {
    MyMenu,
    MyLife,
  },
};
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>