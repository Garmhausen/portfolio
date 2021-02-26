<template>
  <div class="md:grid md:grid-cols-3 md:m-8 md:items-center mt-5">
    <h2 class="md:col-span-full">{{ title }}</h2>
    <div>
      <img class="rounded-md border border-charcoal border-opacity-25" :src="imageUri" />
    </div>
    <div class="md:col-span-2">
      <blockquote class="p-6">{{ about }}</blockquote>
      <div class="flex justify-center gap-4">
        <span v-if="hostUri"><a :href="hostUri">Live</a></span>
        <span v-if="codeUri"><a :href="codeUri">Code</a></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    imageUri: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    hostUri: {
      type: String,
      required: true,
    },
    codeUri: {
      type: String,
      required: true,
    },
  }
}
</script>

<style scoped>
h2 {
  font-size: 1.3rem;
  margin: 2rem 0 1rem;
}
</style>
