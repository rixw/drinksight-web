<template>
  <div>
    <section class="hero is-danger is-large">
      <div class="hero-body">
        <div class="container">
          <h1 v-if="error.statusCode === 404" class="title">Page not found</h1>
          <h1 v-else>An error occurred</h1>
          <h2>
            Oh dear, sorry. Not a good look. But don't worry, I'll be notified
            so I'll know this has happened.
          </h2>
          <div class="buttons">
            <nuxt-link to="/" class="button is-primary">Home</nuxt-link>
            <nuxt-link to="/contact/" class="button">Get in touch</nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const desc = 'An error has occurred: DrinkSight'
export default {
  name: 'Error',
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'],
  head: {
    title: 'An error has occurred: DrinkSight'
  },
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: desc
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: desc
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: desc
    }
  ]
}
</script>
