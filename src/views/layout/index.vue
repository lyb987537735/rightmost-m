<template>
  <div class="laout-container">
    <!-- 子路由视图start -->
    <router-view />
    <!-- 子路由视图end -->

    <!-- 底部导航栏start -->
    <van-tabbar route v-model="active" active-color="#1C3FAA" inactive-color="#999">
      <van-tabbar-item to="/" icon="wap-home">最左</van-tabbar-item>
      <van-tabbar-item to="/talk" icon="smile-comment">话题</van-tabbar-item>
      <van-tabbar-item to="/add" class="add" icon="add"></van-tabbar-item>
      <van-tabbar-item to="/message" icon="chat">消息</van-tabbar-item>
      <van-tabbar-item to="/my" icon="manager">我的</van-tabbar-item>
    </van-tabbar>
    <!-- 底部导航栏end -->
  </div>
</template>

<script>
export default {
  name: "LayoutIndex",
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="less" scoped>
  .laout-container{
    min-height: 100vh;
    background: #f5f5f5;
    /deep/.van-icon-add{
      font-size: 28px;
    }
  }
</style>