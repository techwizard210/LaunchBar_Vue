<template>
  <index-cover></index-cover>
  <index-info></index-info>
</template>

<script>
import IndexCover from '@/components/Index/IndexCover.vue';
import IndexInfo from '@/components/Index/IndexInfo.vue';

export default {
  title: 'Launchbar',
  components: {
    IndexCover,
    IndexInfo,
  },
}
</script>