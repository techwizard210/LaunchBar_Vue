<template>
  <button
  v-if='!link && !innerLink'
  class='btn'
  :class='[useStyle, this.big ? "btn--big" : ""]'
  :type='btnType'
  >
    <slot></slot>
    {{ title }}
  </button>

  <a
  v-else-if="innerLink"
  class='btn'
  :class='[useStyle, this.big ? "btn--big" : ""]'
  :href='href'
  target="_blank"
  >
    <slot></slot>
    {{ title }}
  </a>

  <router-link
  v-else
  class='btn link'
  :class='[useStyle, this.big ? "btn--big" : ""]'
  :to='custom === null ? href : custom'
  >
    <slot></slot>
    {{ title }}
  </router-link>
</template>

<script>
export default {
  props:{
    title:{
      type: String,
      required: true,
    },
    link:{
      type: Boolean,
      default: false,
    },
    innerLink:{
      type: Boolean,
      default: false,
    },
    href:{
      type: String,
      default: '',
    },
    custom:{
      type: Object,
      default: null
    },
    view:{
      type: String,
      default: 'pink',
    },
    big:{
      type: Boolean,
      default: false,
    },
    btnDisabled:{
      type: Boolean,
      default: false,
    },
    btnType: {
      type: String,
      default: 'button'
    },
  },
  computed: {
    useStyle() {
      return 'btn--' + this.view
    }
  },
}
</script>