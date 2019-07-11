<template>
  <div>
    <nav
      class="navbar is-fixed-top is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container">
        <div class="navbar-brand is-active">
          <a class="navbar-item" href="/">
            <img src="~assets/drinksight.svg" alt="DrinkSight" width="218"/></a
          ><a
            class="navbar-burger"
            role="button"
            aria-label="menu"
            aria-expanded="false"
            data-target="navMenu"
            ><span aria-hidden="true"></span><span aria-hidden="true"></span
            ><span aria-hidden="true"></span
          ></a>
        </div>
        <div id="navMenu" class="navbar-menu">
          <div class="navbar-end">
            <nuxt-link to="/#how-i-help" class="navbar-item"
              >How I Help</nuxt-link
            >
            <nuxt-link to="/#why-me" class="navbar-item">Why Me?</nuxt-link>
            <a class="navbar-item" href="tel:+44--20-3603-3643"
              >020 3603 3643</a
            >
          </div>
          <div>
            <div class="navbar-item">
              <nuxt-link to="/#contact" class="button is-primary"
                >Get in touch</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nuxt />
    <footer class="footer">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p class="subtitle is-6">
              &copy; 2019 DrinkSight Ltd.<br />20-22 Wenlock Road, London N1
              7GU<br /><a href="tel:+44--20-3603-3643">020 3603 3643</a
              ><br />Registered in England 11930916.
            </p>
          </div>
          <div
            class="column has-text-centered is-hidden-mobile has-text-centered-mobile"
          >
            <nuxt-link to="/" class="title is-4">
              <img
                src="~assets/drinksight-full.svg"
                alt="DrinkSight"
                width="240"
            /></nuxt-link>
          </div>
          <div class="column has-text-right has-text-centered-mobile">
            <a
              href="https://twitter.com/drinksight"
              class="icon is-large has-text-twitter"
              aria-label="DrinkSight on Twitter"
              ><i class="fab fa-3x fa-twitter"></i
            ></a>
            <a
              href="https://www.linkedin.com/in/richard-weaver-uk/"
              class="icon is-large has-text-linkedin"
              aria-label="DrinkSight on LinkedIn"
              ><i class="fab fa-3x fa-linkedin"></i
            ></a>
            <a
              href="https://github.com/rixw"
              class="icon is-large has-text-github"
              aria-label="DrinkSight on GitHub"
              ><i class="fab fa-3x fa-github"></i
            ></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  mounted() {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    )

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach((el) => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target
          const $target = document.getElementById(target)

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }
  },
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://drinksight.com' + this.$route.path
        }
      ]
    }
  }
}
</script>
