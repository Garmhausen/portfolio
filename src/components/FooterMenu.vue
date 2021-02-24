<template>
  <div id="footer-menu">
    <router-link to="/">home</router-link>
    <router-link to="/one">one</router-link>
  </div>
</template>

<script>
export default {
  name: 'FooterMenu',
  props: {},
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #336699;
}
</style>