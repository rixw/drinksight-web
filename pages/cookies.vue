<template>
  <div>
    <ContentHeader
      title="Cookies"
      subtitle="We use cookies to analyse our traffic. We also share information about your use of our site with our advertising and analytics partners."
    ></ContentHeader>
    <ContentMenu :contact-link="false">
      <div id="optanon-cookie-policy"></div>
      <h2>Manage Cookies</h2>
      <p class="is-clearfix">
        Want choose which cookies are used on our site? You can...
        <a class="optanon-show-settings">Manage your cookie settings</a>
      </p>
    </ContentMenu>
    <InThePress></InThePress>
    <Awards></Awards>
  </div>
</template>

<script>
const desc =
  'We use cookies to analyse our traffic. We also share information about your use of our site with our advertising and analytics partners.'
const title = 'Cookies: DrinkSight'
import ContentHeader from '~/components/content-header'
import ContentMenu from '~/components/content-menu'
export default {
  name: 'Privacy',
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
