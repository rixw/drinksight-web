<template>
  <div>
    <section class="hero is-success is-large">
      <div class="hero-body">
        <div class="container">
          <h1
            class="title is-spaced has-text-white-bis is-uppercase is-size-4-mobile"
          >
            Thanks!
          </h1>
          <h2 class="has-text-white-bis is-size-5 is-size-6-mobile">
            Your message has been received. I'll be in touch as soon as I can.
            <div id="hero-home-signature" class="as-text-white-bis">
              <img
                src="~assets/signature.png"
                alt="Richard Weaver"
                class="image"
                width="100"
              />Richard Weaver
            </div>
          </h2>
          <div class="buttons">
            <nuxt-link to="/" class="button is-light">Home</nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const desc = 'Thanks for contacting DrinkSight'
export default {
  name: 'Error',
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'],
  head: {
    title: 'DrinkSight: thanks for contacting us!',
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
}
</script>
