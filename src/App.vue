<template>
  <div id="app">
    <img src="./assets/logo.png"><br>
    <p>
      使用路由进行导航
    </p>

    <!-- 路由配置 -->
    <router-link to="/command">常见指令</router-link>
    <router-link to="/ComputeAndWatch">计算属性&侦听器</router-link>
    <router-link to="/Form">表单相关</router-link>
    <router-link to="/HelloWorld">HelloWorld</router-link>
    <!-- 显示路由 -->
    <router-view />

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style: none;
}
</style>
