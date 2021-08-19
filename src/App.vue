<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside/>
        </div>
      </template>
      <template #default>
        <RouterView/>
      </template>
    </Layout>
    <ToTop/>
  </div>
</template>

<script>
import ToTop from "@/components/ToTop"
import SiteAside from "@/components/SiteAside"
import Layout from "@/components/Layout"
export default {
  name: "app",
  components: {
    SiteAside,
    Layout,
    ToTop 
  },
  data() {
    return {
      
    }
  },
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.app-container {
  .self-fill(fixed);

  .aside {
    height: 100%;
    width: 250px;
  }
}

</style>
