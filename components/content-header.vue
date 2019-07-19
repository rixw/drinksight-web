<template
  ><section id="hero-contact" class="hero is-gradient">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-8">
            <h1
              class="title is-spaced has-text-white-bis is-uppercase is-size-4-mobile"
            >
              <span class="is-hidden">Drinksight: </span>{{ title }}
            </h1>
            <h3 class="has-text-white-bis is-size-5 is-size-6-mobile">
              {{ subtitle }}
            </h3>
            <div v-if="buttons && buttons.length" class="buttons">
              <a
                v-for="button in buttons"
                :key="button.index"
                class="control button is-light"
                href="button.href"
                >{{ button.text }}</a
              ><a class="control button is-light" href="#how-i-help"
                >Read more</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContentHeader',
  props: {
    title: { type: String, default: 'DrinkSight' },
    subtitle: {
      type: String,
      default:
        'I am a retail and ecommerce specialist consultant with 20 years’ experience in the UK drinks trade.'
    },
    buttons: {
      type: Array,
      default: function() {
        return []
      }
    }
  }
}
</script>
