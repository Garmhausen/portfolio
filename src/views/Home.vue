<template>
  <div class="home container">
    <WrapperCard/>
  </div>
</template>

<script>
// @ is an alias to /src
import WrapperCard from '@/components/WrapperCard.vue';

export default {
  name: 'Home',
  components: {
    WrapperCard
  }
}
</script>