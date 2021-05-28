<template>
  <div class="hello">
    <Nav/>
    <h1>Welcome to Blog app</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from "./layout/nav";

export default {
  name: 'Home',
  components: {Nav},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
