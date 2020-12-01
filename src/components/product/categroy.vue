<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="item in ajax" :key="item.type">
        <my-select :name="item.title" :list="item.subList"></my-select>
      </dd>
    </dl>
    <dl class="classic">
      <dt>地区</dt>
      <dt>全部</dt>
      <dd v-for="item in region" :key="item.type">
        <my-select :name="item.title" :list="item.subList"></my-select>
      </dd>
    </dl>
  </div>
</template>

<script>
import mySelect from "./select.vue";

export default {
  components: {
    mySelect,
  },
  data() {
    return {
        region : [{
        "title": "推荐商圈",
        "subList": [{
            "name": "望京",
            "id": 120000
        }, {
            "name": "昌平",
            "id": 12222
        }]

    }],
      ajax: [
        {
          title: "美食",
          type: "food",
          subList: [
            {
              name: "日本菜",
              id: "Japan",
            },
          ],
        },
        {
          title: "酒店住宿",
          type: "hotal",
          subList: [
            {
              name: "温泉酒店",
              id: "hot_spring",
            },
          ],
        },
      ],
    };
  },
};
</script>