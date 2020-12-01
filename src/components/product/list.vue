<template>
  <div class="m-products-list">
    <ul>
      <li
        v-for="item in nav"
        :key="item.key"
        :class="{ 's-nav-active': item.active }"
      >
        {{ item.name }}
      </li>
    </ul>
    <my-item
      v-for="(item, index) in itemList"
      :key="index"
      :meta="item"
    ></my-item>
  </div>
</template>

<script>
import myItem from "@/components/product/item.vue";

export default {
  components: {
    myItem,
  },
  data() {
    return {
      itemList: [
        {
          itemId: "2571323",
          title: "井格重庆火锅（哈西万达店）",
          imgUrl: "https://img.meituan.net/xxx",
          type: "food",
          score: 5,
          commentNum: 2555,
          comment: [
            {
              username: "匿名用户",
              image: "https://www.dpfile.com/ugc/user/anonymous.png",
              rate: 5,
              pics: ["http://p0picxxxxx", "http://picxxxxx"],
              evalaute: "xxxx",
            },
          ],
          tab: ["重庆火锅", "哈西万达"],
          address: "南岗区中兴大街168号万达广场3层3055",
          phone: "0451-85717159",
          businessTime: "周一至周日 09:30-21:00",
          service: ["提供wifi"],
          recommend: ["现炸酥肉", "井格毛肚"],
          avgPrice: 95,
          dealItems: [
            {
              title: "100元代金券1张",
              price: 28.9,
              counterPrice: 100,
              saleNum: 3409,
              priceType: "元",
            },
          ],
        },
      ],
      nav: [
        { key: "s-defaault", name: "智能排序", active: true },
        { key: "s-price", name: "价格最低", active: false },
        { key: "s-sale", name: "人气最高", active: false },
        { key: "s-comment", name: "评论最高", active: false },
      ],
    };
  },
};
</script>