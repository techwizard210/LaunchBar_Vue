<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <p class="footer__copyright">
          © 2022 LaunchBar. All rights reserved.
        </p>
        <app-logo></app-logo>
        <app-socials></app-socials>
      </div>
    </div>
  </footer>
</template>

<script>
import AppSocials from '@/components/App/AppSocials.vue';

export default {
  components: {
    AppSocials,
  },
}
</script>