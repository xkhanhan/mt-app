<template>
  <dl @mouseover="hanleHover">
    <dt>{{ navBar.title }}</dt>
    <dd
      v-for="item in navBar.itemList"
      :key="item.tab"
      :class="{ active: kind == item.tab }"
      :data-type="item.tab"
    >
      {{ item.title }}
    </dd>
    <span>
      全部
      <i class="arrow"></i>
    </span>
  </dl>
</template>

<script>
export default {
  props: {
    navBar: {
      type: Object,
      requiredd: true,
    },
  },
  data() {
    return {
      kind: this.navBar.defaultSelect,
    };
  },
  methods: {
    hanleHover(e) {
      // 获取事件源对象
      let dom = e.target;
      // 获取事件源对象的标签名并转换成小写
      let tagname = dom.tagName.toLowerCase();
      // 判断是否为 dd 标签
      if (tagname != "dd") {
        return false;
      }
      // 获取标签身上的属性值
      this.kind = dom.getAttribute("data-type");
      // 抛出数据
      this.$emit("over", this.kind);
    },
  },
};
</script>

<style lang="scss" scoped>
dl {
        position: relative;
        height: 44px;
        line-height: 44px;
        display: flex;
        box-sizing: border-box;
        font-size: 14px;
        color: #fff;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        cursor: pointer;

        span {
           position: absolute;
           right: 50px;
           .arrow {
            width: 5px;
            height: 5px;
            border-bottom: 1px solid #fff;
            border-right: 1px solid #fff;
            transform: rotate(-45deg);
            display: block;
            position: absolute;
            top: -1px;
            left: 30px;
            bottom: 0;
            margin: auto;
          }

        }
        
        dt {
          font-size: 18px;
          margin-left: 13px;
          margin-right: 10px;
          padding: 0 5px;
        }
    
        dd {
          padding: 0 5px;
          position: relative;
    
          &:after {
            position: absolute;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-bottom: 7px solid #fff;
            content: " ";
            display: block;
            width: 2px;
            height: 0;
            top: 37px;
            left: 0;
            right: 0;
            margin: auto;
            display: none;
          }
    
          &.active:after {
            display: block;
          }
        }


       }
</style>