<template>
  <div class="home container">
    <HomeCard/>
  </div>
</template>

<script>
import HomeCard from '@/components/HomeCard.vue';

export default {
  name: 'Home',
  components: {
    HomeCard
  }
}
</script>