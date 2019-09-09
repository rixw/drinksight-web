<template>
  <div>
    <ContentHeader
      title="How I Help"
      subtitle="I help drinks businesses grow, implement digital transformation,
      and reach customers in the modern retail environment. I consult on retail
      and ecommerce, brand development and price intelligence."
    ></ContentHeader>
    <ContentMenu :contact-link="false">
      <div class="columns">
        <div class="column is-4">
          <h2>Retail &amp; Ecommerce</h2>
          <p class="block">
            I help you maximise sales growth from stores and online. I work
            strategically, helping you implement digital transformation, and
            building a customer-centric framework for measuring success. I can
            also execute tactically, working with your team to deliver projects
            and campaigns.
          </p>
          <nuxt-link
            to="/how-i-help/retail-and-ecommerce/"
            class="button is-primary"
            >Read more</nuxt-link
          >
        </div>
        <div class="column is-4">
          <h2>Brand Development</h2>
          <p class="block">
            I can advise spirits, wine, beer and cider producers on product
            positioning in the modern retail market. I'll come up with a channel
            strategy, advise on the right visuals and messaging, and look at
            pricing, promotion and marketing activations for the social media
            age.
          </p>
          <nuxt-link
            to="/how-i-help/brand-development/"
            class="button is-primary"
            >Read more</nuxt-link
          >
        </div>
        <div class="column is-4">
          <h2>Price Intelligence</h2>
          <p class="block">
            With access to daily streams of highly relevant data for
            <abbr title="Beer, Wines and Spirits">BWS</abbr>
            <abbr title="Stock-Keeping Units">SKUs</abbr> from all the major UK
            drinks retailers, I can provide customised analysis of competitive
            positioning, price architecture, bespoke data feeds and strategic
            advice to retailers and suppliers.
          </p>
          <nuxt-link
            to="/how-i-help/price-intelligence/"
            class="button is-primary"
            >Read more</nuxt-link
          >
        </div>
      </div>
    </ContentMenu>
  </div>
</template>

<script>
const desc =
  'I help drinks businesses grow, implement digital transformation, and reach customers in the modern retail environment. I consult on retail and ecommerce, brand development and price intelligence.'
const title = 'How I Help: DrinkSight'
import ContentHeader from '~/components/content-header'
import ContentMenu from '~/components/content-menu'
export default {
  name: 'HowIHelp',
  head: {
    title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: desc
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: title
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: desc
      }
    ]
  },
  components: {
    ContentHeader,
    ContentMenu
  }
}
</script>
