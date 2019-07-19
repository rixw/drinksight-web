<template>
  <div>
    <ContentHeader
      title="Why Me?: Bespoke Data"
      subtitle="I have developed my own web-scraping technology to harvest not
        just price but also promotion, marketing and availability data. Layering
        BWS-specific taxonomies over the top means I can provide highly
        customised views of productand price data."
    ></ContentHeader>
    <ContentMenu>
      <h2>Data</h2>
      <p>
        I have built a proprietary web scraping app to collect data on a daily
        basis from all the major UK drinks retailers. The data covers grocers
        and multiple specialists. It generally takes no more than a day to set
        up a new scrape so I am expanding the scope of this all the time.
      </p>
      <p>
        The product data being collected includes price (with a full
        understanding and categorisation of offer mechanics), descriptive
        elements, how each retailer categorises every product, and their on-site
        ranking and visibility.
      </p>
      <p>
        This data is held in a versioned database, so for every
        <abbr title="Stock-Keeping Unit">SKU</abbr> in every retailer I can hold
        not only current data, but the full history what and when any data
        changed.
      </p>
      <h2>Drinks Focus</h2>
      <p>
        I have developed my own drinks-specific taxonomy. Every product from
        every retailer is categorised in a consistent way, allowing effective
        comparison across retailers.
      </p>
      <p>
        For example, I am able to interpret vintage as a key data point,
        something that generic grocery price comparison sources struggle with.
        The granularity of my origin and style taxonomy is also much deeper than
        other data sources.
      </p>
      <h2>Actionable Insight</h2>
      <p>
        I can make subsets of this data available via a secure
        <abbr title="Application Programming Interface">API</abbr>, or produce
        spreadsheets either on a regular schedule or as a one-off exercise.
      </p>
      <p>
        I can model price architecture by retailer at varying levels of
        granularity - either the whole wine range, for example, or segmented by
        colour, country/region or grape.
      </p>
    </ContentMenu>
  </div>
</template>

<script>
const desc =
  'I have developed my own web-scraping technology to harvest not just price but also promotion, marketing and availability data. Layering BWS-specific taxonomies over the top means I can provide highly customised views of productand price data.'
const title = 'Bespoke Data: Why Me?: DrinkSight'
import ContentHeader from '~/components/content-header'
import ContentMenu from '~/components/content-menu'
export default {
  name: 'BespokeData',
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
