<template>
  <app-header></app-header>
  <div class="header-gap"></div>
  <router-view/>
  <app-footer></app-footer>
</template>

<script>
import AppHeader from '@/components/App/AppHeader.vue'
import AppFooter from '@/components/App/AppFooter.vue'

export default {
  components:{
    AppHeader,
    AppFooter,
  }
}
</script>

<style lang="scss">
@import './assets/style/main.scss';
</style>