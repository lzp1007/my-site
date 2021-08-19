//组件通用的远程获取数据
export default function(defaultValue) {
  return {
    data() {
      return {
        isLoading: true,
        data: defaultValue
      }
    },
    async created() {
      this.data = await this.fetchData();
      this.isLoading = false;
    }
  }
}