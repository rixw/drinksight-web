<template>
  <div>
    <ContentHeader
      title="Get In Touch"
      subtitle="Call, email, or use this form to send me a message. Either way,
                I'll be back to you before you know it."
    ></ContentHeader>
    <ContentMenu :contact-link="false">
      <div class="columns">
        <div class="column is-half">
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
          <div class="media">
            <div class="media-left">
              <figure class="icon is-medium">
                <ion-icon name="pin" class="is-size-3"></ion-icon>
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  Registered address:<br />
                  20-22 Wenlock Road, London, N1 7GU
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-half">
          <div class="media">
            <div class="media-left">
              <figure class="icon is-medium has-text-twitter">
                <ion-icon name="logo-twitter" class="is-size-3"></ion-icon>
              </figure>
            </div>
            <div class="media-content">
              <div class="content is-size-4">
                <p>
                  <a
                    href="https://twitter.com/drinksight"
                    target="_blank"
                    rel="noopener"
                    >@drinksight</a
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="media">
            <div class="media-left">
              <figure class="icon is-medium has-text-linkedin">
                <ion-icon name="logo-linkedin" class="is-size-3"></ion-icon>
              </figure>
            </div>
            <div class="media-content">
              <div class="content is-size-4">
                <p>
                  <a
                    href="https://www.linkedin.com/in/richard-weaver-uk/"
                    target="_blank"
                    rel="noopener"
                    >Richard Weaver</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 class="title has-text-centered is-size-3 is-uppercase">
          CONTACT FORM
        </h2>
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
      </div>
    </ContentMenu>
  </div>
</template>

<script>
const desc =
  'Get in touch with Richard Weaver at DrinkSight: email, phone, social or contact form'
const title = 'Get In Touch: DrinkSight'
import ContentHeader from '~/components/content-header'
import ContentMenu from '~/components/content-menu'
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
    ContentMenu
  }
}
</script>
