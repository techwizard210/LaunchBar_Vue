<template>
  <div class="blockchains"
  :class='blockchainsState'
  @click.stop
  >
    <p class="blockchains__title">
      Choosing a Blockchain
    </p>
    <ul class="blockchains__items"
    ref='blockchainItemsParent'
    >
      <li class="blockchains__item"
      v-for='item in allBlockchains'
      :key='item'
      >
        <app-input
        :descr='item.label'
        :checkboxValue='item.value'
        :checkboxName='data.blockchainsName'
        :checkboxChecked='item.value === currentBlockchain.value'
        @choosed='checkInput'
        radio
        >
          <span class="blockchains__imgwrapper">
            <img :src="item.image" alt=""
            v-if="theme === ''"
            >
            <img :src="item.themeImage === undefined ? item.image : item.themeImage" alt=""
            v-else
            >
          </span>
        </app-input>
      </li>
    </ul>
  </div>
  <div class="blockchains__pad"></div>
</template>

<script>
import AppInput from '@/components/App/AppInput.vue';

import { mapGetters, mapMutations } from "vuex";

export default {
  props: {
    opened: {
      type: Boolean,
    },
  },
  data() {
    return {
      data:{
        currBlockchain: '',
        blockchainsName: '',
      }
    }
  },
  mounted () {
    this.generateName()
  },
  computed: {
    blockchainsState() {
      return this.opened ? 'blockchains--active' : ''
    },
    ...mapGetters([
      'allBlockchains',
      'theme',
    ]),
    ...mapGetters(['currentBlockchain']),
  },
  methods: {
    generateName(){
      let randomValue = Math.random() + Math.random()
      this.data.blockchainsName = randomValue.toString()
    },
    blockchainCheckedState(value){
      return value === this.currentBlockchain.value
    },
    checkInput(value){
      if(value === 'dfinity'){
        window.open('https://xpkrh-oyaaa-aaaai-qbgaq-cai.ic0.app/');
      }else{
        let allBlockchains = this.allBlockchains
        let needValue = Object.values(allBlockchains).find((obj) => {
          return obj.value == value
        })

        this.setNewBlockchain(needValue)
        this.togglePopUpBlockchains()
      }
    },
    ...mapMutations([
      'setNewBlockchain',
      'togglePopUpBlockchains',
    ])
  },
  components: {
    AppInput,
  },
}
</script>