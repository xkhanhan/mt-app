<template>
  <div class="slider-item">
    <router-link :to="{ name: 'defaultPage' }">
      <img :src="item.url" alt="" />
      <div class="film-info">
        <p class="film-score">
          <span v-if="item.isRelease"
            >观众评
            <b>{{ item.number }}</b>
          </span>
          <span v-else>
            <b>{{ item.number }}</b
            >人想看
          </span>
        </p>
        <p class="film-name">
          <b>{{ item.title }}</b>
          <span v-if="item.isRelease" class="buy-ticket">购票</span>
          <span v-else class="buy-ticket">预购</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "slideritem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.slider-item {
  height: 297px;
  width: 214px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
}
.film-info {
  width: 100%;
  position: absolute;
  bottom: 0;
  background-image: linear-gradient(
    to top,
    rgba($color: #000000, $alpha: 1),
    rgba($color: #000000, $alpha: 0.7),
    rgba($color: #000000, $alpha: 0)
  );
  color: #fff;
  font-size: 16px;
  padding: 10px;
  box-sizing: border-box;

  p {
    margin: 5px 0;
  }

  .film-score {
    span {
      font-size: 12px;
      b {
        color: #fd9827;
        font-size: 15px;
        font-weight: 500;
      }
    }
  }

  .film-name {
    b {
        font-weight: 500;
        width: 90px;
        display: inline-block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .buy-ticket {
      background: #ff4949;
      border-radius: 100px;
      color: #fff;
      padding: 2px 12px 3px 12px;
      font-size: 14px;
      position: relative;
      cursor: pointer;
      line-height: 20px;
      text-align: center;
      float: right;
      right: 10px;
    }
  }
}
</style>
