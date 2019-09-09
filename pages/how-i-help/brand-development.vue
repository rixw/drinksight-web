<template>
  <div>
    <ContentHeader
      title="How I Help: Brand Development"
      subtitle="I advise spirits, wine, beer and cider producers on product
        positioning in the modern retail market. I work on channel strategy,
        advice on the right visuals and messaging, or recommendations on
        pricing, promotion and marketing activations for the social media age."
    ></ContentHeader>
    <ContentMenu>
      <h2>Strategy</h2>
      <p>
        In my experience as Trading Director for Britain's biggest specialist
        wine merchant, I oversaw an overhaul of product strategy that hugely
        increased the amount of exclusive products, from flagship own brandsto a
        host of tertiary brands created for the range.
      </p>
      <p>
        As a result, I'm well versed in translating target audiences to brand
        executions, and have considerable experience in creating briefs and
        managing the design, print and production process for drinks products.
      </p>
      <h2>Content &amp; Marketing</h2>
      <p>
        I've been writing marketing copy since 2000, and as a drinks specialist
        I understand the importance of credible, consumer-friendly product
        information and collateral. I also understand the strengths, limitations
        and relative costs of the spectrum of marketing channels. Whilst my
        background is primarily online, I've also worked with print (DM and
        press advertising) and TV, and have experience with trade and consumer
        PR.
      </p>
    </ContentMenu>
  </div>
</template>

<script>
const desc =
  'I advise spirits, wine, beer and cider producers on product positioning in the modern retail market. I work on channel strategy, advice on the right visuals and messaging, or recommendations on pricing, promotion and marketing activations for the social media age.'
const title = 'Brand Development: How I Help: DrinkSight'
import ContentHeader from '~/components/content-header'
import ContentMenu from '~/components/content-menu'
export default {
  name: 'BrandDevelopment',
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
