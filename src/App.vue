<template>
  <div id="app" class="container text-charcoal mx-auto pt-10">
    <router-view/>
    <FooterMenu />
  </div>
</template>

<script>
import FooterMenu from '@/components/FooterMenu.vue';

export default {
  name: 'App',
  components: {
    FooterMenu
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
