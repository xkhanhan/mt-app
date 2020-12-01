<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="9" class="left">
        <img src="@/assets/img/seachlogo.png" alt="" />
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="seachContext"
            placeholder="请输入内容"
            @focus="focus"
            @blur="blur"
          ></el-input>
          <el-button icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-show="isHot">
            <dt>热门搜索</dt>
            <dd v-for="(hotPalce, index) in hotPalceList" :key="index">
              <router-link
                :to="{ name: 'product', params: { name: hotPalce } }"
              >
                {{ hotPalce }}
              </router-link>
            </dd>
          </dl>
          <dl class="searchList" v-show="isSearch">
            <router-link
              v-for="(searchItem, index) in searchList"
              :key="index"
              :to="{ name: 'product', params: { name: searchItem } }"
            >
              <dd>
                {{ searchItem }}
              </dd>
            </router-link>
          </dl>
        </div>
        <p class="suggest">
          <router-link
            :to="{ name: 'product', params: { name: suggest } }"
            v-for="(suggest, index) in suggestList"
            :key="index"
          >
            {{ suggest }}
          </router-link>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seachContext: "",
      isFocus: false,
      hotPalceList: ["火锅", "火锅自助", "火锅重庆"],
      searchList: ["火锅", "火锅自助", "火锅重庆"],
      suggestList: ["火锅", "火锅自助", "火锅重庆"],
      time: null,
    };
  },
  computed: {
    // 用于展示搜索框下的搜索信息
    isSearch() {
      // 当鼠标聚焦且有文字时展示
      return this.isFocus && this.seachContext;
    },

    // 用于展示搜索框下的热门信息
    isHot() {
      // 当鼠标聚焦且没有文字时展示
      return this.isFocus && !this.seachContext;
    },
  },
  methods: {
    // 搜索框聚焦事件
    focus() {
      clearTimeout(this.time);
      this.isFocus = true;
    },
    // 搜索框失焦事件
    blur() {
      this.time = setTimeout(() => {
        this.isFocus = false;
      }, 200);
    },
  },
};
</script>
