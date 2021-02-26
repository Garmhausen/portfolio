<template>
  <div id="app" class="container text-charcoal mx-auto pt-10">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <transition name="slide">
      <Nav />
    </transition>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
blockquote {
  text-align: justify;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.slide-enter-active, .slide-leave-active {
  transition: transform 1s;
}
.slide-enter, .slide-leave-to {
  transition: transform 1s;
}
</style>
