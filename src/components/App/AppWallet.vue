<template>
  <div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  mounted () {
    this.setupWallet()
  },
  methods: {
    ...mapActions(['nearSetup']),
    async setupWallet(){
      await this.nearSetup()
      if(this.$route.query){
        this.$router.replace({'query': null});
      }
    },
  },
}
</script>