<template>
  <figure id="wrapper-card" class="md:flex rounded-xl p-8 md:p-0 shadow">
    <div class="profile-image-small bg-profile-pic bg-cover w-32 h-32 md:w-auto md:h-auto md:rounded-r-none md:rounded-l-xl rounded-full mx-auto">
      <img class="hidden md:block md:rounded-l-xl" src="/robert-oliver.jpg" width="100%" />
    </div>
    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p>
          <b>Robert Garmhausen</b> - Software Engineer.
          I like to pick things apart and put them back together, experiment, and play.
          Node.js is my happy place.
        </p>
        <p>
          I've been a software engineer at <a href="https://www.dudesolutions.com/">Dude Solutions</a> for a few years.
          I've been working on an enterprise application with a whole bunch of users.
          Lately, my tech stack has been VueJS, .NET, and SQL Server.
        </p>
        <p>
          Before all that, I was living in Asheville NC, working IT and making a go of <a href="https://vimeo.com/59695399">being</a> <a href="https://youtu.be/hxcmDOT5poM">a</a> <a href="https://open.spotify.com/artist/6rabW8GTeJd5qhXXddQypT?si=RW6pZHFySKmYYTWXJxPu6A">musician</a>.

        </p>
      </blockquote>
    </div>
  </figure>
</template>

<script>
export default {
  name: 'WrapperCard',
  props: {

  },
}
</script>

<style scoped>
p {
  margin-top: 1rem;
}

.profile-image-small {
  background-position: right 0 bottom -35px;
}

@media (min-width: 768px) {
  .profile-image-small {
    background-position: right 0 bottom 0;
  }
}
</style>