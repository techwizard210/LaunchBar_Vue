<template>
  <div class="wallets"
  :class='[walletsState]'
  @click.stop
  v-if="!walletConnected"
  >
    <div class="wallets__inner">
      <p class="wallets__title">
        Connect Wallet
      </p>
      <ul class="wallets__items">
        <li class="wallets__item"
        v-for='item in allWallets'
        :key='item'
        >
          <app-input
          :descr='item.label'
          :checkboxValue='item.value'
          :checkboxName='data.walletsName'
          :checkboxChecked='item.value === currentWallet.value'
          @choosed='checkInput'
          radio
          >
            <span class="wallets__imgwrapper">
              <img :src="item.image" alt="">
            </span>
          </app-input>
        </li>
      </ul>
      <div class="wallets__buttons">
        <a class="wallets__link" :href="currentFaqLink" target="_blank">
          ?
        </a>
        <app-button
        title='Confirm'
        @click='connectWallet()'
        ></app-button>
      </div>
    </div>
  </div>
  <div class="wallets"
  :class='walletsState'
  @click.stop
  v-else
  >
    <app-button
    title='Copied'
    @click='[togglePopUpWallets(), copyWallet()]'
    view="green"
    ></app-button>
  </div>
  <div class="wallets__pad"></div>
</template>

<script>
import AppInput from '@/components/App/AppInput.vue';

import { mapActions, mapGetters, mapMutations } from "vuex";

// import VueMetamask from 'vue-metamask';

export default {
  props: {
    opened: {
      type: Boolean,
    },
  },
  data() {
    return {
      data:{
        currWallet: {
          value: '',
        },
        walletsName: '',
      }
    }
  },
  mounted () {
    this.generateName()
  },
  computed: {
    ...mapGetters(['allWallets']),
    ...mapGetters([
      'walletConnected',
      'currentWallet',
    ]),
    walletsState() {
      return this.opened ? 'wallets--active' : ''
    },
    currentFaqLink(){
      if(this.data.currWallet.value !== ""){
        if(this.data.currWallet.value === 'metamask'){
          return 'https://metamask.io/faqs.html'
        }
        return 'https://nearhelp.zendesk.com/hc/en-us'
      }

      if(this.currentWallet.value === 'metamask'){
        return 'https://metamask.io/faqs.html'
      }
      return 'https://nearhelp.zendesk.com/hc/en-us'
    },
  },
  methods: {
    generateName(){
      let randomValue = 'wallet' + Math.random() + Math.random()
      this.data.walletsName = randomValue.toString()
    },
    blockchainCheckedState(value){
      return value === this.currentWallet.value
    },
    checkInput(value){
      let allWallets = this.allWallets
      let needValue = Object.values(allWallets).find((obj) => {
        return obj.value == value
      })

      this.data.currWallet = needValue
    },
    copyWallet(){
      const el = document.createElement('textarea');
      el.value = this.wallet.id;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    },
    setWallet(){
      this.setNewWallet(this.data.currWallet)
      this.togglePopUpWallets()
    },
    onComplete(data){
      console.log('data:', data);
    },
    async connectWallet(){
      this.togglePopUpWallets()
      await this.connectNear()
    },
    ...mapMutations([
      'setNewWallet',
      // 'connectWallet',
      'quitWallet',
      'togglePopUpWallets',
    ]),
    ...mapActions(['connectNear']),
  },
  components: {
    AppInput,
    // VueMetamask,
  },
}
</script>