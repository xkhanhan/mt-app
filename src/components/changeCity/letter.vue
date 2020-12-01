<template>
  <div>
    <el-row v-for="(item, index) in letterGroup" :key="index">
      <dl class="m-categroy-section">
        <dt>{{ index }}</dt>
        <dd>
          <span v-for="(m) in item" :key="m.name">{{m.name}}</span>
        </dd>
      </dl>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    letterGroup: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/categroy.scss";
</style>