<template>
  <figure id="home-card" class="container md:flex max-w-screen-lg rounded-xl p-8 md:p-0 shadow">
    <div class="profile-image-small bg-profile-pic md:bg-none bg-cover w-32 h-32 md:w-auto md:h-auto md:rounded-r-none md:rounded-l-xl rounded-full mx-auto">
      <img class="hidden md:block md:rounded-l-xl" src="/robert-oliver.jpg" width="100%" />
    </div>
    <HomeBlurb />
  </figure>
</template>

<script>
import HomeBlurb from '@/components/HomeBlurb.vue';

export default {
  name: 'HomeCard',
  components: {
    HomeBlurb,
  }
}
</script>

<style scoped>
.profile-image-small {
  background-position: right 0 bottom -35px;
}

@media (min-width: 768px) {
  .profile-image-small {
    background-position: right 0 bottom 0;
  }
}
</style>