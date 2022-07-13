<template>
  <label class="upload">
    <slot></slot>
    <input type="file"
    @change='loadCover($event)'
    >
  </label>
</template>

<script>
export default {
  methods: {
    loadCover(event) {
      if (event.srcElement.files.length !== 0){
        let newFile = event.target.files[0]
        newFile.src = URL.createObjectURL(newFile);
        this.$emit('uploaded', newFile)
      }
    }
  },
}
</script>