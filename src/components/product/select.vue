<template>
    <div class="m-product-select">
        <dl class="tab">
            <dt>{{name}} <i class="el-icon-caret-bottom"></i></dt>
            <dd>
                <h3 class="select-title">{{name}}</h3>
               <a href="#" style="color:#000">
                    <span v-for="item in list" :key="item.id">{{item.name}}</span>
               </a>
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    list: {
      type: Array,
      required: true,
    },
  },
};
</script>

