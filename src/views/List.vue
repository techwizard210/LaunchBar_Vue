<template>
  <!-- {{ nearWallet }} -->
  <!-- <br> -->
  <!-- <br> -->
  <!-- {{ nearWalletId }} -->
  <list-cover></list-cover>
  <list-filters></list-filters>
  <list-items></list-items>
</template>

<script>
import { mapGetters } from 'vuex';

import ListCover from '@/components/List/ListCover.vue';
import ListFilters from '@/components/List/ListFilters.vue';
import ListItems from '@/components/List/ListItems.vue';

export default {
  title: 'Projects',
  computed: {
    ...mapGetters([
      'nearWallet',
      'nearWalletId',
    ])
  },
  components: {
    ListCover,
    ListFilters,
    ListItems,
  },
}
</script>
