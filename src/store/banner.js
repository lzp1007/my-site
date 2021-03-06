import { getBanners } from "@/api/banner"

export default {
  namespaced: true,
  state: {
    loading: false,
    data: []
  },
  mutations: {
    setLoading(state, payLoad) {
      state.loading = payLoad;
    },
    setData(state, payLoad) {
      state.data = payLoad;
    }
  },
  actions: {
    async fetchBanner(ctx) {
      if(ctx.state.data.length) {
        return;
      }
      ctx.commit("setLoading", true)
      const resp = await getBanners();
      ctx.commit("setData", resp);
      ctx.commit("setLoading", false);
    }
  }
}