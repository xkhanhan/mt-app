<template>
  <div  class="m-hcity">
    <dl>
      <dt>{{cityObject.title}}：</dt>
      <dd v-for="item in cityObject.list" :key="item">{{ item }}</dd>
    </dl>
  </div>
</template>

<script>
export default {
    props:{
        cityObject : {
            type : Object,
            required : true
        }
    },
  data() {
    return {
    };
  },
};
</script>
