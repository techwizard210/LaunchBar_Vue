<template>
  <list-filters></list-filters>
  
  <section class="admin-add">
    <div class="container">
      <app-button
      title="Add new"
      link
      href="/admin/add"
      ></app-button>
    </div>
  </section>

  <list-items></list-items>
</template>

<script>
import ListFilters from '@/components/List/ListFilters.vue';
import ListItems from '@/components/List/ListItems.vue';

export default {
  title: 'Admin Projects',
  components: {
    ListFilters,
    ListItems,
  },
}
</script>