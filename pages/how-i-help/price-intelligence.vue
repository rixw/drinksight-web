<template>
  <div>
    <ContentHeader
      title="How I Help: Price Intelligence"
      subtitle="With access to daily streams of highly relevant data for BWS
        SKUs from all the major UK drinks retailers, I can provide customised
        analysis of competitive positioning, price architecture, bespoke data
        feeds and strategic advice to retailers and suppliers."
    ></ContentHeader>
    <ContentMenu>
      <h2>Data</h2>
      <p>
        I collect data on a daily basis from all the major UK drinks retailers,
        both grocers and multiple specialists. The data incorporates price,
        offers, descriptive elements, how each retailer categorises every
        product, and their on-site visibility.
      </p>
      <p>
        This data is held in a versioned database, so for every
        <abbr title="Stock-Keeping Unit">SKU</abbr> in every retailer I can hold
        not only current data, but what and when any key data points changed.
      </p>
      <p>
        I have also developed my own drinks-specific taxonomy, so that every
        product is categorised by origin and style in a consistent way. This
        allows effective comparison across retailers.
      </p>
      <h2>Analysis</h2>
      <p>
        This data enables a number of different types of analysis. In addition
        to regular data feeds for price matching or competitive intelligence, I
        can model price architecture by retailer at varying levels of
        granularity - either the whole wine range, for example, or segmented by
        colour, country/region or grape.
      </p>
      <p>
        I can make this data available via a secure
        <abbr title="Application Programming Interface">API</abbr>, or output to
        spreadsheets and distributed on a regular schedule. Alternatively, you
        can commission one-off data exercises.
      </p>
      <p>
        And if I'm not currently capturing data from a retailer you need access
        to (for example, regional merchants or specialists) it generally takes
        no more than a day to set up a new scrape.
      </p>
    </ContentMenu>
  </div>
</template>

<script>
const desc =
  'With access to daily streams of highly relevant data for BWS SKUs from all the major UK drinks retailers, I can provide customised analysis of competitive positioning, price architecture, bespoke data feeds and strategic advice to retailers and suppliers.'
const title = 'Price Intelligence: How I Help: DrinkSight'
import ContentHeader from '~/components/content-header'
import ContentMenu from '~/components/content-menu'
export default {
  name: 'PriceIntelligence',
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
