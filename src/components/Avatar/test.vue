<template>
  <Avatar :url="avatarUrl" size="150" />
</template>

<script>
import Avatar from "./index.vue"
import avatarUrl from "@/assets/images/avatar.png"
export default {
  data() {
    return {
      avatarUrl: avatarUrl
    }
  },
  components: {
    Avatar
  }
}
</script>

<style>

</style>