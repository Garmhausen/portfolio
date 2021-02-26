<template>
  <figure id="code-card" class="container md:flex flex-col max-w-screen-lg rounded-xl p-8 md:p-0 shadow">
    <h2>Teh Codez</h2>
    <blockquote class="md: p-6">
      <p>
        I'm a strong believer in open-source software and the amazing community it fosters.
        I hope to one day find a little more free time to help lower the barrier of entry into the programming world, to help spread code-literacy.
        Meanwhile, here's stuff in lists!
      </p>
      <h3>A list of tech I'm super comfortable working with:</h3>
      <ul>
        <li v-for="item in tech" :key="item">{{ item }}</li>
      </ul>
    </blockquote>
    <h3>Some Selections:</h3>
    <div class="divide-y divide-charcoal divide-opacity-25">
      <template v-for="project in projects">
        <ProjectCard
          :key="project.title"
          :title="project.title"
          :imageUri="project.imageUri"
          :hostUri="project.hostUri"
          :codeUri="project.codeUri"
          :about="project.about"
        />
      </template>
    </div>
  </figure>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue';

export default {
  name: 'CodeCard',
  components: {
    ProjectCard,
  },
  data: function () {
    return {
      projects: [
        {
          title: 'This Portfolio',
          imageUri: require('@/assets/portfolio.jpg'),
          hostUri: 'https://garmhausen.github.io/',
          codeUri: 'https://github.com/Garmhausen/portfolio',
          about: `
            The very thing you are looking at right now! Made using VueJS mostly.
            Used the normal Vue stuff, and added TailwindCSS to help template out everything quickly.
          `,
        },
        {
          title: 'CA-API',
          imageUri: require('@/assets/ca-api.jpg'),
          hostUri: '',
          codeUri: 'https://github.com/Garmhausen/ca-api',
          about: `
            This was an excercise in hand-rolling authentication using node, express, and prisma with graphql, but has grown into the beginning of a larger app.
            It serves here as a useful example of file structure organization, backend architecture, and code cleanliness.
            It is not currently deployed.
          `,
        },
        {
          title: 'Mystery Word',
          imageUri: require('@/assets/mystery-word.jpg'),
          hostUri: 'https://mystery-word-app.web.app/',
          codeUri: 'https://github.com/Garmhausen/mystery-word',
          about: `
            This is a hangman-like game, try and guess a word letter-by-letter.
            It pulls from a text file to find words.
            There are three difficulty settings that alter the length of the word the game pulls at random when you begin.
            This project was built with Angular and ngrx/store, using a backend built with node and express.
          `,
        },
        {
          title: 'Chessboard',
          imageUri: require('@/assets/chess.jpg'),
          hostUri: 'https://garmhausen.github.io/Chessboard/',
          codeUri: 'https://github.com/Garmhausen/Chessboard',
          about: `
            This project animates through the first several moves of the Catalan opening in a simple way using only Javascript, HTML and CSS.
            The user can play/pause the animation and step backward, forward and skip to the beginning or end.
          `,
        }
      ],
      tech: [
        'HTML5',
        'CSS3',
        'JS/ES6',
        'Typescript',
        'C#',
        'Sass',
        'Less',
        'SCSS',
        'VueJS',
        'Angular',
        'React',
        'NodeJS',
        'Express',
        'MongoDB',
        'PostgreSQL',
        'MySQL',
        'Jasmine',
        'Docker',
        '.NET',
        'git',
        '[insert something totally knew to me and interesting]'
      ],
    }
  }
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
p {
  margin-bottom: 1rem;
}
h2 {
  margin: 2rem 0 1rem;
  font-size: 2rem;
}
h3 {
  margin: 4rem 0 1rem;
  font-weight: bold;
}
</style>