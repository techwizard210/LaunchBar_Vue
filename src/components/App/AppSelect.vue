<template>
  <multiselect
  v-model="currValue"
  :options="options"
  :limit='5'
  hideSelected
  ref='select'
  @select='changedValue'
  :caret='false'
  :placeholder="placeholderValue"
  >
    <template #singlelabel="{ value }">
      <div class="multiselect-single-label">
        <!-- <img class="select-icon" :src="value.image" /> -->
        {{ value.label }}
      </div>
    </template>
    <template #option="{ option }">
      <!-- <img class="select-icon" :src="option.image" /> -->
      {{ option.label }}
    </template>
  </multiselect>
</template>

<script>
import Multiselect from '@vueform/multiselect'

import '@vueform/multiselect/themes/default.css'

export default {
  props: {
    options: {
      type: Array,
      required: true, 
    },
    defaultValue: {
      type: String,
      default: '',
    },
    placeholderValue:{
      type: String,
      default: null,
    },
  },
  mounted () {
    if (this.defaultValue === ''){
      this.$refs.select.select(this.options[0])
    }else{
      this.$refs.select.select(this.defaultValue)
    }
    this.changedValue()
  },
  data() {
    return {
      currValue: '',
    }
  },
  methods: {
    changedValue() {
      this.$emit('selectedBlockchain', this.currValue, this.options)
    }
  },
  components: {
    Multiselect,
  },
  emits:[
    'selectedBlockchain'
  ],
}
</script>