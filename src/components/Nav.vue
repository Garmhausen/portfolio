<template>
  <div id="nav" class="p-8 text-xl">
    <transition-group name="slide" tag="ul">
      <li v-bind:key="1">
        <router-link to="/">home</router-link>
      </li>
      <li v-bind:key="2">
        <router-link to="/code">code</router-link>
      </li>
      <li v-bind:key="3">
        <router-link to="/contact">contact</router-link>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'Nav',
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
.slide-move {
  transition: transform .1s;
}
</style>