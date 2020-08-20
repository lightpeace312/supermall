<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <TabBarItem link="/home" iconClass="fa-home" label="首页"></TabBarItem>
      <TabBarItem link="/category" iconClass="fa-address-book" label="分类"></TabBarItem>
      <TabBarItem link="/shoppingcart" iconClass="fa-shopping-cart" label="购物车"></TabBarItem>
      <TabBarItem link="/profile" iconClass="fa-user" label="我"></TabBarItem>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "./components/tabbar/TabBar"
  import TabBarItem from "./components/tabbar/TabBarItem"

  export default {
    name: "App",
    components: {
      TabBar,
      TabBarItem,
    },
  }
</script>

<style lang="scss">
  @import url("./assets/css/base.css");
  @import url("./assets/css/font-awesome.css");

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  body {
    margin: 0px;
  }
</style>
