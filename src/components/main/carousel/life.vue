<template>
<!-- 主页侧边导航，中间轮播，侧边登录模块 -->
  <div class="m-life">
    <el-row>
      <ul class="nav">
        <li>
          <router-link class="takeout" :to="{ name: '/' }"
            >美团外卖</router-link
          >
        </li>
        <li>
          <router-link class="" :to="{ name: '/' }"> 猫眼电影</router-link>
        </li>
        <li>
          <router-link class="business" :to="{ name: '/' }"
            >美团酒店</router-link
          >
        </li>
        <li>
          <router-link class="apartment" :to="{ name: '/' }"
            >名宿电影</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: '/' }">商家入驻</router-link>
        </li>
        <li>
          <router-link class="business" :to="{ name: '/' }"
            >美团入驻</router-link
          >
        </li>
      </ul>
    </el-row>
    <el-row>
      <el-col :span="14">
        <div class="slide">
          <!-- 轮播图 -->
          <el-carousel height="240px">
            <el-carousel-item v-for="item in carouselImg" :key="item.id">
              <img :src="item.url" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="m-life-pic"></div>
      </el-col>
      <el-col :span="6" class="m-life-login">
        <h4><img src="@/assets/img/avatar.jpg" alt="" /></h4>
        <p class="m-life-login-name">Hi! 你好</p>

        <router-link :to="{ name: '/login' }">
          <el-button round> 登录 </el-button></router-link
        >
        <router-link :to="{ name: '/register' }">
          <el-button round> 注册 </el-button></router-link
        >
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        <div class="m-life-hotel"></div>
      </el-col>
      <el-col :span="7">
        <div class="m-life-music"></div>
      </el-col>
      <el-col :span="4">
        <div class="m-life-coop"></div>
      </el-col>
      <el-col :span="6">
        <div class="m-life-downapp">
          <img src="@/assets/img/download-qr.png" alt="" />
          <p>
            <span>美团APP手机版</span>
          </p>
          <p class="last-p">
            <span> 1元起</span>
            <em>吃喝玩乐</em>
          </p>
          
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
        // 用于轮播的图片
      carouselImg: [
        {
          url:
            "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
          id: "01d2ab1efac6e2b7adcfcdf57b8cb5481085686",
        },
        {
          url: require("@/assets/img/33ff80dc00f832d697f3e20fc030799560495.jpg"),
          id: "33ff80dc00f832d697f3e20fc030799560495",
        },
        {
          url: require("@/assets/img/826a5ed09dab49af658c34624d75491861404.jpg"),
          id: "826a5ed09dab49af658c34624d75491861404",
        },
        {
          url: require("@/assets/img/a97baf515235f4c5a2b1323a741e577185048.jpg"),
          id: "a97baf515235f4c5a2b1323a741e577185048",
        },
        {
          url: require("@/assets/img/daa73310c9e57454dc97f0146640fd9f69772.jpg"),
          id: "daa73310c9e57454dc97f0146640fd9f69772",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/css/index/life.scss";
</style>