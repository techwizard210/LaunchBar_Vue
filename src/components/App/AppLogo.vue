<template>
  <router-link
  class='logo'
  to='/'
  >
    <img src="@/assets/images/logo.svg" alt=""
    v-if='theme !== "light"'
    >
    <img src="@/assets/images/logo--light.svg" alt=""
    v-else
    >
  </router-link>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['theme'])
  },
}
</script>