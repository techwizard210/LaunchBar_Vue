<template>
  <section class="admin-project">
    <div class="container">
      <form class="admin-project__inner"
      @submit.prevent="saveProject()"
      >
        <app-input
        descr="Name"
        v-model="project.name"
        ></app-input>
        <app-input
        descr="Description"
        v-model="project.descr"
        textarea
        ></app-input>
        <label class="label">
          <span class="label-text">
            Status
          </span>
          <app-select
          :options="status"
          @selectedBlockchain='setStatus'
          ></app-select>
        </label>

        <div class="admin-project__uploads">
          <app-upload
          @uploaded="setLogo"
          >
            <span class="profile__imgwrapper-uploaded"
            :class="project.logo.src ? 'profile__imgwrapper-uploaded--active' : ''"
            >
              <img :src="project.logo.src" alt="">
            </span>
            <span class="profile__imgwrapper"
            :class="project.logo.src ? 'profile__imgwrapper--active' : ''"
            >
              <img v-if="project.logo.src" src="@/assets/images/trash.svg" alt=""
              @click.prevent="[clearLogo(), project.logo = {src: ''}]"
              >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"
              v-else
              >
                <path d="M12.7742 2.53434L12.7746 9.18984L19.4299 9.19002C20.42 9.19021 21.2221 9.99229 21.2223 10.9824C21.2223 11.477 21.0218 11.925 20.6977 12.2491C20.3731 12.5737 19.9253 12.7744 19.4307 12.774L12.7742 12.7742L12.7743 19.4303C12.7743 19.9249 12.5738 20.3729 12.2494 20.6973C11.9252 21.0216 11.4776 21.2221 10.9826 21.2221C9.99267 21.2221 9.19057 20.42 9.19019 19.4297L9.18991 12.7744L2.53434 12.7742C1.54442 12.7742 0.742157 11.972 0.742157 10.982C0.742442 9.99258 1.54423 9.19079 2.53387 9.19032L9.19 9.19003L9.19004 2.53415C9.19061 1.54442 9.9925 0.742528 10.9818 0.742339C11.972 0.742149 12.7742 1.54441 12.7742 2.53434Z" fill="#CECECE"/>
              </svg>
            </span>
            <p
            v-if="project.logo.src !== ''"
            ></p>
            <p class="profile__sizes"
            v-else
            >
              512x512
            </p>
            <p
            v-if="project.logo.src !== ''"
            ></p>
            <p class="profile__file-types"
            v-else
            >
              png, jpg
            </p>
          </app-upload>
          <app-upload
          @uploaded="setCover"
          >
            <span class="profile__imgwrapper-uploaded"
            :class="project.cover.src ? 'profile__imgwrapper-uploaded--active' : ''"
            >
              <img :src="project.cover.src" alt="">
            </span>
            <span class="profile__imgwrapper"
            :class="project.cover.src ? 'profile__imgwrapper--active' : ''"
            >
              <img v-if="project.cover.src" src="@/assets/images/trash.svg" alt=""
              @click.prevent="[clearCover(), project.cover = {src: ''}]"
              >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"
              v-else
              >
                <path d="M12.7742 2.53434L12.7746 9.18984L19.4299 9.19002C20.42 9.19021 21.2221 9.99229 21.2223 10.9824C21.2223 11.477 21.0218 11.925 20.6977 12.2491C20.3731 12.5737 19.9253 12.7744 19.4307 12.774L12.7742 12.7742L12.7743 19.4303C12.7743 19.9249 12.5738 20.3729 12.2494 20.6973C11.9252 21.0216 11.4776 21.2221 10.9826 21.2221C9.99267 21.2221 9.19057 20.42 9.19019 19.4297L9.18991 12.7744L2.53434 12.7742C1.54442 12.7742 0.742157 11.972 0.742157 10.982C0.742442 9.99258 1.54423 9.19079 2.53387 9.19032L9.19 9.19003L9.19004 2.53415C9.19061 1.54442 9.9925 0.742528 10.9818 0.742339C11.972 0.742149 12.7742 1.54441 12.7742 2.53434Z" fill="#CECECE"/>
              </svg>
            </span>
            <p
            v-if="project.cover.src !== ''"
            ></p>
            <p class="profile__sizes"
            v-else
            >
              1110x180
            </p>
            <p
            v-if="project.cover.src !== ''"
            ></p>
            <p class="profile__file-types"
            v-else
            >
              png, jpg
            </p>
          </app-upload>
        </div>

        <label class="label">
          <span class="label-text">
            Blockchain for exchange
          </span>
          <app-select
          :options="allBlockchains"
          @selectedBlockchain='setExchangeBlockchain'
          ></app-select>
        </label>

        <app-input
        descr="Token symbol"
        v-model="project.tokenSymbol"
        ></app-input>
        <app-input
        descr="Collected tokens"
        v-model="project.collected"
        type="number"
        ></app-input>

        <app-input
        descr="Presale start"
        v-model="project"
        type="date"
        ></app-input>
        <app-input
        descr="Sale start"
        v-model="project"
        type="date"
        ></app-input>

        <app-input
        descr="Telegram"
        v-model="project.socials[0].href"
        ></app-input>
        <app-input
        descr="Twitter"
        v-model="project.socials[1].href"
        ></app-input>
        <app-input
        descr="Discord"
        v-model="project.socials[2].href"
        ></app-input>
        <app-input
        descr="Min buy"
        v-model="project.minBuy"
        type="number"
        ></app-input>
        <app-input
        descr="Max buy"
        v-model="project.maxBuy"
        type="number"
        ></app-input>
        <app-input
        descr="Soft cap"
        v-model="project.softCap"
        type="number"
        ></app-input>
        <app-input
        descr="Hard cap"
        v-model="project.hardCap"
        type="number"
        ></app-input>
        <app-input
        descr="Exchange rate"
        v-model="project.exchangeRate"
        type="number"
        ></app-input>
        <app-input
        descr="Presale Adress"
        v-model="project.presaleAdress"
        ></app-input>
        <app-input
        descr="Token decimals"
        v-model="project.tokenDecimals"
        type="number"
        ></app-input>
        <app-input
        descr="Token Adress"
        v-model="project.tokenAdress"
        ></app-input>
        <app-input
        descr="Total Supply"
        v-model="project.totalSupply"
        type="number"
        ></app-input>
        <app-input
        descr="Tokens for presale"
        v-model="project.tokenForPresale"
        type="number"
        ></app-input>
        <app-input
        descr="Tokens for liquadity"
        v-model="project.tokenForLiquadity"
        type="number"
        ></app-input>
        <app-input
        descr="Presale rate"
        v-model="project.presaleRate"
        type="number"
        ></app-input>
        <app-input
        descr="Listing rate"
        v-model="project.listingRate"
        type="number"
        ></app-input>
        <app-input
        descr="Initial Market Cap (estimate)"
        v-model="project.initialMarketCap"
        type="number"
        ></app-input>
        <app-input
        descr="Unsold Tokens"
        v-model="project.unsoldTokens"
        type="number"
        ></app-input>
        <app-input
        descr="Listing On"
        v-model="project.listingOn"
        ></app-input>
        <app-input
        descr="Liquidity Percent"
        v-model="project.liquadityPercent"
        type="number"
        ></app-input>
        <app-input
        descr="Liquidity Lockup Time"
        v-model="project.liquadityLockupTime"
        ></app-input>
        <app-input
        descr='Whitelist (write wallets by comma)'
        v-model="project.whitelist"
        textarea
        ></app-input>
        <app-button
        title="Save"
        big
        type="submit"
        ></app-button>
      </form>
    </div>
  </section>
</template>

<script>
import AppSelect from '@/components/App/AppSelect.vue';
import AppUpload from '@/components/App/AppUpload.vue';
import axios from 'axios';

import { mapGetters } from 'vuex';

export default {
  title: 'Admin Add',
  data() {
    return {
      status:[
        {
          label: 'Upcoming',
          value: 'upcoming',
        },
        {
          label: 'Sale Live',
          value: 'live',
        },
        {
          label: 'Sale Ended',
          value: 'ended',
        },
      ],
      project: {
        status: '',
        cover: {
          src: '',
        },
        logo: {
          src: '',
        },
        blockchainSymbol: '',
        presaleAdress: '',
        socials:[
          {
            href: '',  
            type: 'telegram',
          },
          {
            href: '',
            type: 'twitter',
          },
          {
            href: '',
            type: 'discord',
          },
        ],
      }
    }
  },
  computed: {
    ...mapGetters([
      'allBlockchains',
    ]),
  },
  methods: {
    setLogo(value){
      this.project.logo = value
      this.project.logo.src = URL.createObjectURL(value)
    },
    setCover(value){
      this.project.cover = value
      this.project.cover.src = URL.createObjectURL(value)
    },
    setExchangeBlockchain(value){
      this.project.blockchainSymbol = value
    },
    setStatus(value){
      this.project.status = value
    },
    clearLogo(){
      this.project.logo = {
          src: '',
        }
    },
    clearCover(){
      this.project.cover = {
          src: '',
        }
    },
    saveProject() {
      this.project.whitelist = this.project.whitelist.replace(/\s/g, '').split(',')

      axios.post('/project?ID=', this.project)
        .then(function () {
          this.$router.push({ path: '/admin/list' })
        })
    }
  },
  components: {
    AppSelect,
    AppUpload,
  },
}
</script>