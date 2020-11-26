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
        <el-col :span="24">
              <my-container></my-container>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import MyMenu from "@/components/main/menu.vue";
import MyLife from "@/components/main/life.vue";
import MyContainer from "@/components/main/container.vue";

export default {
  components: {
    MyMenu,
    MyLife,
    MyContainer
  },
};
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>