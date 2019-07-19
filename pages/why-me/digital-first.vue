<template>
  <div>
    <ContentHeader
      title="Why Me?: Digital First"
      subtitle="I have over 15 years’ experience in ecommerce and digital
        marketing. I oversaw the growth of the Majestic Wine online channel from
        scratch to £40m+ revenue, including multiple site and app builds. I have
        deep experience across digital marketing channels including email,
        search, PPC, affiliate, display and content."
    ></ContentHeader>
    <ContentMenu>
      <h3>Understanding Customers</h3>
      <p>
        I moved from retail management to digital on the strength of my own
        experience as an online shopper, and throughout my career I've
        endeavoured to keep the focus on customer experience to the fore.
      </p>
      <p>
        I am able to build business models from the bottom up, focusing on the
        acquisition, retention and activation of customers. I also understand
        the critical importance of offering a personalised experience to online
        customers. For me, the most exciting digital models break from
        traditional retail and build the experience around the individual. For
        example, in the menswear market, the likes of
        <a href="https://www.stitchfix.com/" target="_blank">StitchFix</a>,
        <a href="https://www.thread.com/" target="_blank">Thread</a> and
        <a href="https://www.indochino.com/" target="_blank">Indochino</a> are
        redefining how to merchandise apparel.
      </p>
      <h3>Channel Experience</h3>
      <p>
        When I first worked in digital I was a one-man team. On the road to
        building a £40m+ online business I have therefore been hands-on with
        almost every digital marketing channel: email and CRM, PPC search and
        social advertising, affiliate and display.
      </p>
      <p>
        I've also been at the forefront of development in how customers
        experience retail online, having moved from desktop-focused ecommerce
        through mobile-optimisation and ultimately responsive design. I've also
        been business owner for native app development projects and have a
        thorough understanding of modern API-first development methodolgies.
      </p>
      <h3>Technical Skills</h3>
      <p>
        Few board directors in retail are fluent in a coding language, but as I
        have many years of experience in hands-on development I am proficient in
        numerous languages and technologies. I remained abreast of technological
        developments even whilst my role became more commercially-focused.
      </p>
      <p>
        I have excellent, production-standard HTML, CSS and JavaScript skills. I
        have been the solo developer of numerous business apps on the .NET
        stack, including an order management system to distribute orders from
        multiple channels to over 200 stores, and have a thorough knowledge of
        database design and SQL.
      </p>
      <p>
        My <nuxt-link to="/why-me/bespoke-data">web scraping app</nuxt-link> is
        built using custom actors on the
        <a href="https://vuejs.org" target="_blank">Apify</a> platform, feeding
        into an
        <abbr title="Application Programming Interface">API</abbr> written in
        <a
          href="https://docs.microsoft.com/en-us/dotnet/csharp/"
          target="_blank"
          >C#</a
        >
        and using
        <a href="https://dotnet.microsoft.com/apps/aspnet" target="_blank"
          >ASP.NET Core 2.1</a
        >. The website you are reading now has been built using a modern
        open-source technology stack incorporating
        <a href="https://vuejs.org" target="_blank">Vue.js</a>,
        <a href="https://nuxtjs.org" target="_blank">Nuxt</a>,
        <a href="https://bulma.io/" target="_blank">Bulma</a> and
        <a href="https://buefy.org/" target="_blank">Buefy</a>. It's hosted on
        <a href="https://www.netlify.com" target="_blank">Netlify</a>. You can
        browse the source code to see how it is built on
        <a href="https://github.com/rixw/drinksight-web" target="_blank"
          >GitHub</a
        >.
      </p>
    </ContentMenu>
  </div>
</template>

<script>
const desc =
  'I have over 15 years’ experience in ecommerce and digital marketing. I oversaw the growth of the Majestic Wine online channel from scratch to £40m+ revenue, including multiple site and app builds. I have deep experience across digital marketing channels including email, search, PPC, affiliate, display and content.'
const title = 'Digital First: Why Me?: DrinkSight'
import ContentHeader from '~/components/content-header'
import ContentMenu from '~/components/content-menu'
export default {
  name: 'DigitalFirst',
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
