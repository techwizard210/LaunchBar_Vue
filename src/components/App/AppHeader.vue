<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <app-logo></app-logo>
        <app-wallet></app-wallet>
        <app-button
        innerLink
        view="lined"
        title="Create"
        href="gfgffg/"
        class="header__create"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.7742 2.53434L12.7746 9.18984L19.4299 9.19002C20.42 9.19021 21.2221 9.99229 21.2223 10.9824C21.2223 11.477 21.0218 11.925 20.6977 12.2491C20.3731 12.5737 19.9253 12.7744 19.4307 12.774L12.7742 12.7742L12.7743 19.4303C12.7743 19.9249 12.5738 20.3729 12.2494 20.6973C11.9252 21.0216 11.4776 21.2221 10.9826 21.2221C9.99267 21.2221 9.19057 20.42 9.19019 19.4297L9.18991 12.7744L2.53434 12.7742C1.54442 12.7742 0.742157 11.972 0.742157 10.982C0.742442 9.99258 1.54423 9.19079 2.53387 9.19032L9.19 9.19003L9.19004 2.53415C9.19061 1.54442 9.9925 0.742528 10.9818 0.742339C11.972 0.742149 12.7742 1.54441 12.7742 2.53434Z" fill="#CECECE"/>
          </svg>
        </app-button>
        <button class="header__blockchain btn btn--lined"
        :class='openedBlockchains !== false ? "header__blockchain--active" : ""'
        @click='togglePopUpBlockchains'
        >
          <header-blockchains
          :opened='openedBlockchains'
          ></header-blockchains>
          <div class="header__blockchain-icon">
            <img :src="currentBlockchain.image" alt=""
            v-if="theme === ''"
            >
            <img :src="currentBlockchain.themeImage === undefined ? currentBlockchain.image : currentBlockchain.themeImage" alt=""
            v-else
            >
          </div>
          <span class="header__blockchain-name">
            {{ currentBlockchain.label }}
          </span>
          <div class="header__blockchain-arrow">
            <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.70236 10.7129L17.7124 2.70265C17.8979 2.51738 18 2.27007 18 2.00636C18 1.74266 17.8979 1.49534 17.7124 1.31008L17.1227 0.720178C16.7384 0.336327 16.1138 0.336327 15.7301 0.720178L9.00373 7.44656L2.26988 0.712714C2.08447 0.527448 1.8373 0.425156 1.57374 0.425156C1.30989 0.425156 1.06272 0.527448 0.877163 0.712714L0.287558 1.30261C0.102144 1.48803 0 1.73519 0 1.9989C0 2.2626 0.102144 2.50992 0.287558 2.69519L8.30496 10.7129C8.49096 10.8986 8.73929 11.0006 9.00329 11C9.26831 11.0006 9.51651 10.8986 9.70236 10.7129Z" fill="#C5C5C5"/>
            </svg>
          </div>
        </button>
        <button class="header__wallets btn btn--blue"
        :class='[walletIsOpen, walletIsConnected]'
        @click='[togglePopUpWallets(), copyWalletId()]'
        >
          <span class="header__wallets--value">
            {{ walletConnected ? walletMin : 'Connect' }}
          </span>
          <span class="header__wallets-imgwrapper"
          v-if="walletConnected"
          >
           <img src="@/assets/images/copy.svg" alt="">
          </span>
          <header-wallets
          :opened="openedWallets"
          >
          </header-wallets>
        </button>
        <button class="header__profile btn-clear"
        :class='openedProfile !== false ? "header__profile--active" : ""'
        @click='togglePopUpProfile'
        v-if="walletConnected"
        >
          <img src="@/assets/images/user.svg" alt=""
          v-if="user.logo.src === ''"
          >
          <img class="header__profile-logo"
          v-else
          :src="user.logo.src"
          >
          <header-profile
          :opened="openedProfile"
          >
          </header-profile>
        </button>
        <app-theme></app-theme>
        <button class="header__menu-btn btn-clear"
        @click='toggleMenu()'
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
    </div>
    <div class="header__menu"
    :class='[menuIsOpen]'
    >
      <div class="header__menu-settings">
        <button class="header__wallets btn btn--blue"
        :class='[walletIsOpen, walletIsConnected]'
        @click='[togglePopUpWallets(), copyWalletId()]'
        >
          <span class="header__wallets--value">
            {{ walletConnected ? walletMin : 'Connect' }}
          </span>
          <span class="header__wallets-imgwrapper"
          v-if="walletConnected"
          >
           <img src="@/assets/images/copy.svg" alt="">
          </span>
          <header-wallets
          :opened="openedWallets"
          >
          </header-wallets>
        </button>
        <button class="header__profile btn-clear"
        :class='openedProfile !== false ? "header__profile--active" : ""'
        @click='togglePopUpProfile'
        v-if="walletConnected"
        >
          <img src="@/assets/images/user.svg" alt=""
          v-if="user.logo.src === ''"
          >
          <img class="header__profile-logo"
          v-else
          :src="user.logo.src"
          >
          <header-profile
          :opened="openedProfile"
          >
          </header-profile>
        </button>
        <app-button
        innerLink
        view="lined"
        title="Create"
        href="gfgffg/"
        class="header__create"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.7742 2.53434L12.7746 9.18984L19.4299 9.19002C20.42 9.19021 21.2221 9.99229 21.2223 10.9824C21.2223 11.477 21.0218 11.925 20.6977 12.2491C20.3731 12.5737 19.9253 12.7744 19.4307 12.774L12.7742 12.7742L12.7743 19.4303C12.7743 19.9249 12.5738 20.3729 12.2494 20.6973C11.9252 21.0216 11.4776 21.2221 10.9826 21.2221C9.99267 21.2221 9.19057 20.42 9.19019 19.4297L9.18991 12.7744L2.53434 12.7742C1.54442 12.7742 0.742157 11.972 0.742157 10.982C0.742442 9.99258 1.54423 9.19079 2.53387 9.19032L9.19 9.19003L9.19004 2.53415C9.19061 1.54442 9.9925 0.742528 10.9818 0.742339C11.972 0.742149 12.7742 1.54441 12.7742 2.53434Z" fill="#CECECE"/>
          </svg>
        </app-button>
        <app-theme></app-theme>
      </div>
      <div class="blockchains"
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
      <app-socials></app-socials>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import AppInput from '@/components/App/AppInput.vue';
import AppLogo from '@/components/App/AppLogo.vue';
import AppSocials from '@/components/App/AppSocials.vue';
import AppTheme from '@/components/App/AppTheme.vue';
import HeaderBlockchains from '@/components/Header/HeaderBlockchains.vue';
import HeaderWallets from '@/components/Header/HeaderWallets.vue';
import HeaderProfile from '@/components/Header/HeaderProfile.vue';
import AppWallet from '@/components/App/AppWallet.vue';

export default {
  data() {
    return {
      data:{
        blockchainsName: '',
      },
      menuOpened: false,
      links:[
        {
          label: 'About',
          href: 'cover',
        },
        {
          label: 'Game',
          href: 'play',
        },
        {
          label: 'NFT',
          href: 'collection',
        },
        {
          label: 'Roadmap',
          href: 'roadmap',
        },
        {
          label: 'How to buy?',
          href: 'buy',
        },
      ],
      headerLinkTitle: 'Mint NFT',
      headerLinkHref: 'http://flokicyberpunk.mantial.com/',
      headerLinkDescr: 'You go to mantial.com',
    }
  },
  mounted () {
    this.generateName()
  },
  methods: {
    toggleMenu(){
      this.menuOpened = !this.menuOpened
    },
    ...mapMutations([
      'togglePopUpBlockchains',
      'togglePopUpWallets',
      'togglePopUpProfile',
      'setNewBlockchain',
    ]),
    copyWalletId(){
      const el = document.createElement('textarea');
      el.value = this.wallet.id;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    },
    generateName(){
      let randomValue = Math.random() + Math.random()
      this.data.blockchainsName = randomValue.toString()
    },
    checkInput(value){
      let allBlockchains = this.allBlockchains
      let needValue = Object.values(allBlockchains).find((obj) => {
        return obj.value == value
      })

      this.setNewBlockchain(needValue)
      this.togglePopUpBlockchains()
      // if(value === 'dfinity'){
      //   window.open('https://xpkrh-oyaaa-aaaai-qbgaq-cai.ic0.app/');
      // }else{
      //   let allBlockchains = this.allBlockchains
      //   let needValue = Object.values(allBlockchains).find((obj) => {
      //     return obj.value == value
      //   })

      //   this.setNewBlockchain(needValue)
      //   this.togglePopUpBlockchains()
      // }
    },
  },
  computed: {
    ...mapGetters([
      'currentBlockchain',
      'openedBlockchains',
      'openedWallets',
      'openedProfile',
      'walletConnected',
      'wallet',
      'user',
      'nearWalletId',
      'theme',
      'allBlockchains',
      'test',
    ]),
    walletIsOpen(){
      return this.openedWallets !== false ? "header__wallets--active" : ""
    },
    walletIsConnected(){
      return this.walletConnected !== false ? "" : "header__wallets--connected"
    },
    walletMin(){
      return localStorage.getItem('walletId').substr(0, 5) + '...' + localStorage.getItem('walletId').substr(-4, localStorage.getItem('walletId').length)
      // return localStorage.getItem('walletId')
    },
    menuIsOpen(){
      if(this.menuOpened || this.openedWallets){
        return "header__menu--active"
      }
      return ""
    },
  },
  components: {
    AppInput,
    AppLogo,
    AppSocials,
    AppTheme,
    HeaderBlockchains,
    HeaderWallets,
    HeaderProfile,
    AppWallet,
  },
}
</script>