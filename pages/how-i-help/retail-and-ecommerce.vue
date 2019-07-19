<template>
  <div>
    <ContentHeader
      title="How I Help: Retail &amp; Ecommerce"
      subtitle="I help you maximise sales growth from stores and online. I work
          strategically, helping you implement digital transformation, and
          building a customer-centric framework for measuring success. I can
          also execute tactically, working with your team to deliver projects
          and campaigns."
    ></ContentHeader>
    <ContentMenu>
      <h2>Strategy</h2>
      <p>
        Having operated for a decade at board level, I'm used to driving retail
        and ecommerce strategy. I can advise drinks businesses on how to access
        online sales, either through direct commerce on their own site, or
        through third parties such as
        <a
          target="_blank"
          rel="noopener"
          href="https://www.amazon.co.uk/?&_encoding=UTF8&tag=drinksight-21&linkCode=ur2&linkId=1c1686ba4080d9cb26cba5681572c91b&camp=1634&creative=6738"
          >Amazon</a
        ><img
          src="//ir-uk.amazon-adsystem.com/e/ir?t=drinksight-21&l=ur2&o=2"
          width="1"
          height="1"
          border="0"
          alt=""
          style="border:none !important; margin:0px !important;"
        />.
      </p>
      <p>
        There's no &ldquo;one size fits all&rdquo; approach to retail and
        ecommerce in the drinks space. Depending on your range size and
        diversity, brand positioning (mass market or premium) and countless
        other business specifics, you'll need a proposition that reaches your
        audience emotionally, conveniently and cost-effectively.
      </p>
      <p>
        I am particularly experienced in digital transformation, and able to
        help businesses who feel left behind by the pace of technological change
        to understand the key decisions they need to make. This can involve
        product selection, agency selection, and most importantly the dyamics of
        change that may need to happen within your business.
      </p>
      <h2>Optimisation</h2>
      <p>
        If you have an existing retail or online business I can advise on how to
        optimise performance. Often there are easy, quick wins, whether it be in
        ranging and merchandising, or best practices online to improve email
        opening and click rates, website performance, sales conversion,
        <abbr title="Search Engine Optimization">SEO</abbr>,
        <abbr title="Pay-Per-Click">PPC</abbr>, and other marketing channels.
      </p>
      <h2>Measurement</h2>
      <p>
        We all know the clichés about customers being always right, being king,
        or being the sole focus of a business. But to put the customer's needs
        at the heart of your retail and ecommerce strategy requires thinking
        differently about how you measure your business's success.
      </p>
      <p>
        Whilst traditional retail KPIs like footfall, revenue and margin are of
        course critical, viewing your business through a customer-focused lens
        involves measuring your rates of capture, retention and activation.
        Creating sensible and meaningful customer segments to model and report
        behaviours is the key to understanding your performance both today and
        in the future.
      </p>
      <h2>Execution</h2>
      <p>
        I'm able to move effectively from strategy through exection, and am
        happy to get my hands dirty. I've run teams in various functions, and am
        equally at home with a variety of stakeholders ranging from boards and
        senior management to project managers, development teams, designers and
        creative agencies, and store managers.
      </p>
      <p>
        From a technical perspective, not only have I been business owner of
        &pound;1m+ projects, but I am well versed in online technology, with
        direct coding experience across a variety of languages and technology
        stacks. I have excellent, production-standard HTML, CSS and JavaScript
        skills, and have been the solo developer of numerous business apps on
        the .NET stack and have a thorough knowledge of database design and SQL.
      </p>
      <p>
        Indeed, I built the website you are reading now myself (using
        <a href="https://vuejs.org" rel="noopener">Vue.js</a>,
        <a href="https://nuxtjs.org" target="_blank" rel="noopener">Nuxt</a>,
        <a href="https://bulma.io/" target="_blank" rel="noopener">Bulma</a> and
        <a href="https://buefy.org/" target="_blank" rel="noopener">Buefy</a>).
        You can even browse the source code in
        <a
          href="https://github.com/rixw/drinksight-web"
          target="_blank"
          rel="noopener"
          >GitHub</a
        >.
      </p>
    </ContentMenu>
    <InThePress></InThePress>
  </div>
</template>

<script>
const desc =
  'I help you maximise sales growth from stores and online. I work strategically, helping you implement digital transformation, and building a customer-centric framework for measuring success. I can also execute tactically, working with your team to deliver projects and campaigns.'
const title = 'Retail & Ecommerce: How I Help: DrinkSight'
import ContentHeader from '~/components/content-header'
import ContentMenu from '~/components/content-menu'
import InThePress from '~/components/in-the-press'
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
    InThePress
  }
}
</script>
