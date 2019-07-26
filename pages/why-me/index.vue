<template>
  <div>
    <ContentHeader
      title="Why Me?"
      subtitle="I have 20 years in the drinks trade at a senior level. As well as my drinks specialism, I am also a digital native, and combine the two to produce BWS-focused bespoke data."
    ></ContentHeader>
    <ContentMenu :contact-link="false">
      <div class="columns">
        <div class="column is-4">
          <h2>Drinks Specialism</h2>
          <p class="block">
            After 20 years in the drinks trade, I have a thorough understanding
            of the wine, beer and spirits retail landscape and an established
            network of contacts. As Trading Director for the UK's biggest
            specialist wine merchant, I ran buying and merchandising for the
            retail and B2B on-trade operations, turning over in excess of
            &pound;300m pa.
          </p>
          <nuxt-link class="button is-primary" to="/why-me/drinks-specialism/"
            >Read more</nuxt-link
          >
        </div>
        <div class="column is-4">
          <h2>Digital First</h2>
          <p class="block">
            I have over 15 years’ experience in ecommerce and digital marketing.
            I oversaw the growth of the Majestic Wine online channel from
            scratch to £40m+ revenue, including multiple site and app builds. I
            have deep experience across digital marketing channels including
            email, search,
            <abbr title="Pay-Per-Click">PPC</abbr>, affiliate, display and
            content.
          </p>
          <nuxt-link class="button is-primary" to="/why-me/digital-first/"
            >Read more</nuxt-link
          >
        </div>
        <div class="column is-4">
          <h2>Bespoke Data</h2>
          <p class="block">
            I have developed my own web-scraping technology to harvest not just
            price but also promotion, marketing and availability data. Layering
            <abbr title="Beer, Wines and Spirits">BWS</abbr>-specific taxonomies
            over the top means I can provide highly customised views of product
            and price data.
          </p>
          <nuxt-link class="button is-primary" to="/why-me/bespoke-data/"
            >Read more</nuxt-link
          >
        </div>
      </div>
    </ContentMenu>
    <InThePress></InThePress>
    <Awards></Awards>
  </div>
</template>

<script>
const desc =
  'I have 20 years in the drinks trade at a senior level. I am a digital native, and produce BWS-focused bespoke data.'
const title = 'Why Me?: DrinkSight'
import ContentHeader from '~/components/content-header'
import ContentMenu from '~/components/content-menu'
import InThePress from '~/components/in-the-press'
import Awards from '~/components/awards'
export default {
  name: 'RetailAndEcommerce',
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
    ContentMenu,
    InThePress,
    Awards
  }
}
</script>
