<template>
  <div>
    <div>
      {{data.from}}:
      <span class="desc">{{data.content}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      list: []
    };
  }
};
</script>

<style scoped>
.desc{
  color: #cc2636;
  font-size: 13px;
  
}
</style>