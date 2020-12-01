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
              <my-moviecontainer></my-moviecontainer>
        </el-col>
        <el-col :span="24">
            <my-housecontainer></my-housecontainer>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import MyMenu from "@/components/main/carousel/menu.vue";
import MyLife from "@/components/main/carousel/life.vue";
import MyMoviecontainer from "@/components/main/movie/container.vue";
import MyHousecontainer from "@/components/main/house/container.vue"

export default {
  components: {
    MyMenu,
    MyLife,
    MyMoviecontainer,
    MyHousecontainer
  },
};
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>