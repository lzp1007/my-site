<template>
  <div class="test-container">
    <div class="item" v-for="type in types" :key="type">
      <Icon :type="type"/>
      <label>{{ type }}</label>
    </div>
  </div>
</template>

<script>
import Icon, { types } from "./index.vue"

export default {
  data() {
    return {
      types
    }
  },
  components: {
    Icon
  }
}
</script>

<style scoped>
  .test-container {
    display: flex;
    justify-content: center;
    margin: 30px auto;
    width: 600px;
    flex-wrap: wrap;
  }

  .item {
    margin: 1em;
    text-align: center;
  }

  .icon-container {
    display: block;
  }
</style>