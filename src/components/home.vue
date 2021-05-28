<template>
  <div class="hello">
    <Nav/>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Nav from "./layout/nav";

export default {
  name: 'Home',
  components: {Nav},
  props: {
    msg: String
  },
  component:{
    Nav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
