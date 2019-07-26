<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-8 content">
          <slot></slot>
          <p v-if="contactLink">
            <nuxt-link to="/contact" class="button"
              >Get in touch for more details</nuxt-link
            >
          </p>
        </div>
        <div class="column is-offset-1 is-3">
          <b-menu>
            <b-menu-list label="Menu" class="has-text-primary">
              <b-menu-item
                v-for="item in menu"
                :key="item.route"
                tag="nuxt-link"
                :to="item.route"
                :label="item.label"
                :active="isActive(item.route)"
                :expanded="isExpanded(item.route)"
              >
                <b-menu-item
                  v-for="subitem in item.children"
                  :key="subitem.route"
                  tag="nuxt-link"
                  :to="subitem.route"
                  :label="subitem.label"
                  :active="isActive(subitem.route)"
                >
                </b-menu-item>
              </b-menu-item>
            </b-menu-list>
          </b-menu>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContentMenu',
  props: {
    contactLink: { type: Boolean, default: true }
  },
  data: function() {
    return {
      menu: [
        { route: '/', label: 'Home' },
        {
          route: '/how-i-help',
          label: 'How I Help',
          children: [
            {
              route: '/how-i-help/retail-and-ecommerce/',
              label: 'Retail & Ecommerce'
            },
            {
              route: '/how-i-help/brand-development/',
              label: 'Brand Development'
            },
            {
              route: '/how-i-help/price-intelligence/',
              label: 'Price Intelligence'
            }
          ]
        },
        {
          route: '/why-me',
          label: 'Why Me?',
          children: [
            {
              route: '/why-me/drinks-specialism/',
              label: 'Drinks Specialism'
            },
            {
              route: '/why-me/digital-first/',
              label: 'Digital First'
            },
            {
              route: '/why-me/bespoke-data/',
              label: 'Bespoke Data'
            }
          ]
        },
        { route: '/contact/', label: 'Get In Touch' }
      ],
      currentPath: this.$nuxt.$route.path
    }
  },
  methods: {
    isActive: function(menuPath) {
      return menuPath === this.currentPath
    },
    isExpanded: function(menuPath) {
      if (menuPath.length > 1) {
        return this.currentPath.startsWith(menuPath)
      }

      return menuPath === this.currentPath
    }
  }
}
</script>
