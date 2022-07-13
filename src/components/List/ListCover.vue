<template>
  <section class="list-cover"
  :class="theme === '' ? '' : 'list-cover--theme'"
  >
    <div class="container">
      <div class="list-cover__inner">
        <h1 class="list-cover__title title">
          Current Presale
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['theme'])
  },
}
</script>