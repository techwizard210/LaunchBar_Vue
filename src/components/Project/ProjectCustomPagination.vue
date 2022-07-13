<template>
  <div class="VuePagination" :class="props.theme.wrapper">
    <nav :class="props.theme.nav">
      <ul v-show="props.showPagination" :class="props.theme.list">

        <li :class="props.theme.prev" @click="props.setPrevPage">
          <button type="button" v-bind="props.prevProps">
            <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.287228 8.29764L8.29746 0.287559C8.48272 0.102146 8.73004 0 8.99374 0C9.25745 0 9.50476 0.102146 9.69003 0.287559L10.2799 0.87731C10.6638 1.2616 10.6638 1.88618 10.2799 2.26988L3.55354 8.99627L10.2874 15.7301C10.4727 15.9155 10.575 16.1627 10.575 16.4263C10.575 16.6901 10.4727 16.9373 10.2874 17.1228L9.69749 17.7124C9.51208 17.8979 9.26491 18 9.00121 18C8.7375 18 8.49019 17.8979 8.30492 17.7124L0.287228 9.69504C0.101522 9.50904 -0.000476837 9.26071 0.000108719 8.99671C-0.000476837 8.73169 0.101522 8.48349 0.287228 8.29764Z" fill="#A2A2A2"/>
            </svg>
          </button>
        </li>

        <li
          v-for="page in props.pages"
          :key="page"
          :class="props.pageClasses(page)"
          v-on="props.pageEvents(page)"

          class="VuePagination__pagination-page"
        >
          <button type="button" v-bind="props.aProps" :class="props.theme.link">
            {{ page }}
          </button>
        </li>

        <li :class="props.theme.next" @click="props.setNextPage">
          <button type="button" v-bind="props.nextProps">
            <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.287228 8.29764L8.29746 0.287559C8.48272 0.102146 8.73004 0 8.99374 0C9.25745 0 9.50476 0.102146 9.69003 0.287559L10.2799 0.87731C10.6638 1.2616 10.6638 1.88618 10.2799 2.26988L3.55354 8.99627L10.2874 15.7301C10.4727 15.9155 10.575 16.1627 10.575 16.4263C10.575 16.6901 10.4727 16.9373 10.2874 17.1228L9.69749 17.7124C9.51208 17.8979 9.26491 18 9.00121 18C8.7375 18 8.49019 17.8979 8.30492 17.7124L0.287228 9.69504C0.101522 9.50904 -0.000476837 9.26071 0.000108719 8.99671C-0.000476837 8.73169 0.101522 8.48349 0.287228 8.29764Z" fill="#A2A2A2"/>
            </svg>
          </button>
        </li>

      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MyPagination",
  props: ["props"],
};
</script>