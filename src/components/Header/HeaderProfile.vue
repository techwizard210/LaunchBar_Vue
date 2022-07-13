<template>
  <div class="profile"
  :class='[profileState, profileConnected]'
  @click.stop
  >
    <app-button
    title='Leave wallet'
    @click='leaveWallet()'
    view="out"
    ></app-button>
    <p class="profile__title">
      Your Profile Settings
    </p>
    <span class="profile__form">
      <app-upload
      @uploaded="setLogo"
      >
        <span class="profile__imgwrapper-uploaded"
        :class="user.logo.src || form.logo.src !== '' ? 'profile__imgwrapper-uploaded--active' : ''"
        >
          <img :src="form.logo.src || user.logo.src" alt="">
        </span>
        <span class="profile__imgwrapper"
        :class="user.logo.src || form.logo.src !== '' ? 'profile__imgwrapper--active' : ''"
        >
          <img v-if="user.logo.src || form.logo.src" src="@/assets/images/trash.svg" alt=""
          @click.prevent="[clearUserLogo(), form.logo = {src: ''}]"
          >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"
          v-else
          >
            <path d="M12.7742 2.53434L12.7746 9.18984L19.4299 9.19002C20.42 9.19021 21.2221 9.99229 21.2223 10.9824C21.2223 11.477 21.0218 11.925 20.6977 12.2491C20.3731 12.5737 19.9253 12.7744 19.4307 12.774L12.7742 12.7742L12.7743 19.4303C12.7743 19.9249 12.5738 20.3729 12.2494 20.6973C11.9252 21.0216 11.4776 21.2221 10.9826 21.2221C9.99267 21.2221 9.19057 20.42 9.19019 19.4297L9.18991 12.7744L2.53434 12.7742C1.54442 12.7742 0.742157 11.972 0.742157 10.982C0.742442 9.99258 1.54423 9.19079 2.53387 9.19032L9.19 9.19003L9.19004 2.53415C9.19061 1.54442 9.9925 0.742528 10.9818 0.742339C11.972 0.742149 12.7742 1.54441 12.7742 2.53434Z" fill="#CECECE"/>
          </svg>
        </span>
        <p
        v-if="user.logo.src || form.logo.src !== ''"
        ></p>
        <p class="profile__sizes"
        v-else
        >
          512x512
        </p>
        <p
        v-if="user.logo.src || form.logo.src !== ''"
        ></p>
        <p class="profile__file-types"
        v-else
        >
          png, jpg
        </p>
      </app-upload>
      <app-input
      descr="Your username:"
      placeholderText="Launchbar"
      v-model="form.username"
      ></app-input>
    </span>
    <app-button
    title='Save Settings'
    @click='[togglePopUpProfile(), saveUserSettings(form)]'
    ></app-button>
  </div>
  <div class="profile__pad"></div>
</template>

<script>
import AppInput from '@/components/App/AppInput.vue';
import AppUpload from '@/components/App/AppUpload.vue';

import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  props: {
    opened: {
      type: Boolean,
    },
  },
  data() {
    return {
      form:{
        username: '',
        logo: {
          src: '',
        },
      },
    }
  },
  computed: {
    ...mapGetters(['allWallets']),
    ...mapGetters([
      'currentWallet',
      'user',
      'walletConnected',
    ]),
    profileState() {
      return this.opened ? 'profile--active' : ''
    },
    profileConnected() {
      return this.walletConnected ? 'profile--connected' : ''
    },
  },
  methods: {
    blockchainCheckedState(value){
      return value === this.currentWallet.value
    },
    setLogo(value){
      this.form.logo = value
      this.form.logo.src = URL.createObjectURL(value)
    },
    leaveWallet(){
      this.togglePopUpProfile() 
      this.leaveNear()
    },
    ...mapMutations([
      'saveUserSettings',
      'togglePopUpProfile',
      'clearUserLogo',
      'togglePopUpWallets',
      // 'quitWallet'
    ]),
    ...mapActions([
      'leaveNear',
    ]),
  },
  components: {
    AppInput,
    AppUpload,
  },
}
</script>