<template>
  <figure id="contact-card" class="container md:flex max-w-screen-lg rounded-xl p-8 md:p-0 shadow">
    <div class="pt-6 text-center mx-auto">
      <h2>Contact Links</h2>
      <ul class="mt-5">
        <li><a href="mailto:robertgarmhausen@gmail.com">email</a></li>
        <li><a href="https://github.com/garmhausen">github</a></li>
        <li><a href="https://www.linkedin.com/in/robertgarmhausen/">linkedin</a></li>
        <li><a href="https://twitter.com/garminthehausen">twitter</a></li>
        <li><a href="https://garmhausen.github.io/Robert_Garmhausen.pdf">résumé</a></li>
      </ul>
    </div>
  </figure>
</template>

<script>
export default {
  name: 'ContactCard',
}
</script>

<style scoped>
li {
  margin-bottom: .5rem;
}
h2 {
  margin: 2rem 0 1rem;
  text-align: left;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
}
</style>