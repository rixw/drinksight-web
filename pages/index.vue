<template>
  <div>
    <section id="hero-home" class="hero is-large">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-8">
              <h1
                class="title is-spaced has-text-white-bis is-uppercase is-size-4-mobile"
              >
                <span class="is-hidden">Drinksight: </span>Retail, ecommerce and
                brand consultancy for the drinks trade
              </h1>
              <h2 class="has-text-white-bis is-size-5 is-size-6-mobile">
                I am a retail and ecommerce specialist consultant with 20 years’
                experience in the UK drinks trade. I help drinks businesses
                grow, implement digital transformation, and reach customers in
                the modern retail environment.
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
                <a class="control button is-light" href="#contact">Contact me</a
                ><a class="control button is-light" href="#how-i-help"
                  >Read more</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <a id="how-i-help"></a>
    <section class="section">
      <div class="container">
        <h2 class="title has-text-centered is-size-3 is-uppercase">
          How I help
        </h2>
        <div class="columns">
          <div class="column is-4">
            <h4 class="title is-4">Retail &amp; Ecommerce</h4>
            <p class="block">
              I help you maximise sales growth from stores and online. I work
              strategically, helping you implement digital transformation, and
              building a customer-centric framework for measuring success. I can
              also execute tactically, working with your team to deliver
              projects and campaigns.
            </p>
            <nuxt-link
              class="button is-primary"
              to="/how-i-help/retail-and-ecommerce"
              >Read more</nuxt-link
            >
          </div>
          <div class="column is-4">
            <h4 class="title is-4">Brand Development</h4>
            <p class="block">
              I can advise spirits, wine, beer and cider producers on product
              positioning in the modern retail market. I'll come up with a
              channel strategy, advise on the right visuals and messaging, and
              look at pricing, promotion and marketing activations for the
              social media age.
            </p>
            <nuxt-link
              class="button is-primary"
              to="/how-i-help/brand-development"
              >Read more</nuxt-link
            >
          </div>
          <div class="column is-4">
            <h4 class="title is-4">Price Intelligence</h4>
            <p class="block">
              With access to daily streams of highly relevant data for
              <abbr title="Beer, Wines and Spirits">BWS</abbr>
              <abbr title="Stock-Keeping Units">SKUs</abbr> from all the major
              UK drinks retailers, I can provide customised analysis of
              competitive positioning, price architecture, bespoke data feeds
              and strategic advice to retailers and suppliers.
            </p>
            <nuxt-link
              class="button is-primary"
              to="/how-i-help/price-intelligence"
              >Read more</nuxt-link
            >
          </div>
        </div>
      </div>
    </section>
    <a id="why-me"></a>
    <section class="section">
      <div class="container">
        <h2 class="title has-text-centered is-size-3 is-uppercase">Why Me?</h2>
        <div class="columns">
          <div class="column is-4">
            <h4 class="title is-4">Drinks Specialism</h4>
            <p class="block">
              After 20 years in the drinks trade, I have a thorough
              understanding of the wine, beer and spirits retail landscape and
              an established network of contacts. As Trading Director for the
              UK's biggest specialist wine merchant, I ran buying and
              merchandising for the retail and B2B on-trade operations, turning
              over in excess of &pound;300m pa.
            </p>
            <nuxt-link class="button is-primary" to="/why-me/drinks-specialism"
              >Read more</nuxt-link
            >
          </div>
          <div class="column is-4">
            <h4 class="title is-4">Digital First</h4>
            <p class="block">
              I have over 15 years’ experience in ecommerce and digital
              marketing. I oversaw the growth of the Majestic Wine online
              channel from scratch to £40m+ revenue, including multiple site and
              app builds. I have deep experience across digital marketing
              channels including email, search,
              <abbr title="Pay-Per-Click">PPC</abbr>, affiliate, display and
              content.
            </p>
            <nuxt-link class="button is-primary" to="/why-me/digital-first"
              >Read more</nuxt-link
            >
          </div>
          <div class="column is-4">
            <h4 class="title is-4">Bespoke Data</h4>
            <p class="block">
              I have developed my own web-scraping technology to harvest not
              just price but also promotion, marketing and availability data.
              Layering <abbr title="Beer, Wines and Spirits">BWS</abbr>-specific
              taxonomies over the top means I can provide highly customised
              views of product and price data.
            </p>
            <nuxt-link class="button is-primary" to="/why-me/bespoke-data"
              >Read more</nuxt-link
            >
          </div>
        </div>
      </div>
    </section>
    <InThePress></InThePress>
    <Awards></Awards>
    <a id="contact"></a>
    <section class="section">
      <div class="container">
        <h2 class="title has-text-centered is-size-3 is-uppercase">
          Get in touch
        </h2>
        <div class="columns">
          <div class="column is-3">
            <p class="subtitle">
              Call, email, or use this form to send me a message. Either way,
              I'll be back to you before you know it.
            </p>
            <div>
              <div class="media">
                <div class="media-left">
                  <figure class="icon is-medium">
                    <ion-icon name="call" class="is-size-3"></ion-icon>
                  </figure>
                </div>
                <div class="media-content">
                  <div class="content is-size-4">
                    <p>020 3603 3643</p>
                  </div>
                </div>
              </div>
              <div class="media">
                <div class="media-left">
                  <figure class="icon is-medium">
                    <ion-icon name="mail" class="is-size-3"></ion-icon>
                  </figure>
                </div>
                <div class="media-content">
                  <div class="content is-size-4">
                    <p>
                      <a href="mailto:richard@drinksight.com"
                        >richard@<wbr />drinksight.com</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="column is-8 is-offset-1">
            <form
              name="contact"
              method="POST"
              action="/thanks"
              data-netlify="true"
              netlify-honeypot="honeypot"
            >
              <div class="field is-hidden">
                <div class="control is-hidden">
                  <input
                    class="input"
                    type="text"
                    aria-label="Don’t fill this out if you're human"
                    name="honeypot"
                  />
                </div>
              </div>
              <div class="field is-grouped">
                <div class="control is-expanded">
                  <input
                    class="input"
                    type="text"
                    placeholder="Name"
                    aria-label="Name"
                    name="name"
                    required
                    minlength="5"
                    maxlength="64"
                  />
                </div>
                <div class="control is-expanded">
                  <input
                    class="input"
                    type="text"
                    placeholder="Company"
                    aria-label="Company"
                    name="company"
                    maxlength="64"
                  />
                </div>
              </div>
              <div class="field is-grouped">
                <div class="control is-expanded">
                  <input
                    class="input"
                    type="email"
                    placeholder="Email"
                    aria-label="Email"
                    name="email"
                    required
                    maxlength="64"
                  />
                </div>
                <div class="control is-expanded">
                  <input
                    class="input"
                    type="text"
                    placeholder="Phone"
                    aria-label="Phone"
                    name="phone"
                    pattern="^\+?[\d\s()]{8,15}$"
                    maxlength="20"
                  />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <textarea
                    class="textarea"
                    rows="5"
                    placeholder="How can I help?"
                    aria-label="How can I help?"
                    name="message"
                    required
                    minlength="5"
                  ></textarea>
                </div>
              </div>
              <div class="field">
                <div class="control has-text-centered">
                  <button class="button is-primary" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Awards from '~/components/awards'
import InThePress from '~/components/in-the-press'
export default {
  name: 'HomePage',
  head: {
    title:
      'Retail, Ecommerce & Brand Consultancy for the Drinks Trade: DrinkSight'
  },
  components: {
    Awards,
    InThePress
  }
}
</script>
