<template>
  <div>
    <ContentHeader
      title="Why Me?: Drinks Specialism"
      subtitle="After 20 years in the drinks trade, I have a thorough
        understanding of the wine, beer and spirits retail landscape and an
        established network of contacts. "
    ></ContentHeader>
    <ContentMenu>
      <h3>Product Knowledge</h3>
      <p>
        I have been lucky enough to combine an interest in wine and drinks in
        general with my job for over two decades. I received distinctions and
        scholarships at both
        <abbr title="Wine &amp; Spirit Education Trust">WSET</abbr> Higher
        Certificate and Diploma level and have continued to learn ever since.
      </p>
      <h3>Trade Knowledge</h3>
      <p>
        As you'd expect, my network in the trade is wide and established. In
        particular, with three years as Trading Director for the UK's biggest
        specialist wine merchant I list most of the leading figures in the wine
        industry among my contacts.
      </p>
      <p>
        My experience also includes 5 years' running
        <i>en primeur</i> campaigns as well as setting up a national fine wine
        distribution operation, giving me a thorough understanding of the fine
        wine market.
      </p>
      <h3>Commercial</h3>
      <p>
        I've run buying and merchandising for both retail and B2B on-trade
        operations, turning over in excess of £300m pa. I understand the
        economics of the drinks trade and the many trading variables used by
        both retailers and suppliers.
      </p>
      <p>
        In developing a strategy focused on exclusive products, I have also
        acquired a solid understanding of production economics, including bulk
        shipping, bottling and label printing. For example, I drove the policy
        of printing the labels for Lay &amp; Wheeler's revived own-label
        offering in the UK, where combining the production of multiple SKUs
        through one contract delivered a cost-effective solution, and total
        consistency of finish despite relatively low volumes and multiple
        producers and countries of origin.
      </p>
    </ContentMenu>
  </div>
</template>

<script>
const desc =
  'After 20 years in the drinks trade, I have a thorough understanding of the wine, beer and spirits retail landscape and an established network.'
const title = 'Drinks Specialism: Why Me?: DrinkSight'
import ContentHeader from '~/components/content-header'
import ContentMenu from '~/components/content-menu'
export default {
  name: 'DrinksSpecialism',
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
