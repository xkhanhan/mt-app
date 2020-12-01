<template>
  <div>
    <span>按省份选择：</span>
    <el-select
      v-model="defaultProValue"
      @change="changProValue"
      clearable
      placeholder="省份"
    >
      <el-option
        v-for="item in provincesList"
        :key="item"
        :label="item"
        :value="item"
      >
      </el-option>
    </el-select>

    <el-select
      ref="city"
      v-model="defaultCtiyValue"
      @change="selectCity"
      :disabled="isdisabled"
      placeholder="城市"
    >
      <el-option
        v-for="item in cityList"
        :key="item"
        :label="item"
        :value="item"
      >
      </el-option>
    </el-select>

    直接搜索：
    <el-select
      v-model="defaultCtiyValue"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
      @change="selectCity"
    >
      <el-option
        v-for="item in cityList"
        :key="item"
        :label="item"
        :value="item"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isdisabled: true,
      loading: false,
      defaultProValue: "",
      defaultCtiyValue: "",
      // 控制省份下拉框
      provincesActive: false,
      // 控制城市下拉框
      cityActive: false,
      // 省份数据
      provincesList: ["北京", "广州", "深圳", "上海", "江西"],
      // 城市数据
      cityList: [
        "北京",
        "上海",
        "广州",
        "深圳",
        "天津",
        "西安",
        "重庆",
        "杭州",
        "南京",
        "武汉",
        "成都",
      ],
    };
  },
  methods: {
    selectCity() {
        console.log(this.defaultCtiyValue);
        this.$router.push('/')
    },
    // 根据省份改变城市
    changProValue() {
      if (this.defaultProValue == "") {
        this.defaultCtiyValue = "";
        this.isdisabled = true;
      } else {
        this.isdisabled = false;
      }
    },

    // 远程请求数据
    remoteMethod(query) {
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.cityList = ["南昌"];
        }, 2000);
      } else {
        this.cityList = [
          "北京",
          "上海",
          "广州",
          "深圳",
          "天津",
          "西安",
          "重庆",
          "杭州",
          "南京",
          "武汉",
          "成都",
        ];
      }
    },
  },
};
</script>

