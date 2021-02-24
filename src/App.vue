<template>
  <div id="app" class="container flex-col content-center w-screen h-screen text-charcoal">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
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

a {
  color: #DAF7DC;
}
</style>
