<template>
  <section class="project-cover">
    <div class="container">
      <div class="project-cover__imgwrapper">
        <img src="@/assets/images/temp/project-cover-1.jpg" alt="">
      </div>
    </div>
  </section>

  <div class="project-body">
    <div class="container">
      <div class="project__group">
        <project-info></project-info>
        <project-sale></project-sale>
      </div>
      <div class="project__group">
        <project-details></project-details>
        <project-whitelist
        v-if="item.useWhitelist"
        ></project-whitelist>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectInfo from '@/components/Project/ProjectInfo.vue';
import ProjectSale from '@/components/Project/ProjectSale.vue';
import ProjectDetails from '@/components/Project/ProjectDetails.vue';
import ProjectWhitelist from '@/components/Project/ProjectWhitelist.vue';

import maskTextMixin from '@/mixins/maskTextMixin';

import axios from 'axios';
import { useRoute } from 'vue-router';
import { mapGetters } from 'vuex';

export default {
  title () {
    return `Project - ${this.item.name}`
  },
  setup() {
    const route = useRoute()
    let item = {}

    axios.get('/project/' + route.params.project)
      .then(function (response) {
        item = response
      })

    // Убрать 
    item = {
      id: 24,
      name: 'BabyMafia',
      status: 'live',
      image: require('@/assets/images/temp/list-item-1.jpg'),
      blockchainSymbol: 'BNB',
      tokenSymbol: '$BMF',
      collected: 0,
      saleStart: '',
      softCap: 75,
      hardCap: 150,
      exchangeRate: 5000000000,

      useWhitelist: true,
      minBuy: 0.1,
      maxBuy: 1,

      descr: 'Baby Mafia is a BSC Token that offers BUSD auto-rewards to all holders, and its main utility is that the token will be used as a primary asset to purchase the upcoming Mafia-themed NFT collection.',
      presaleAdress: '0x7Da9aB4Ba28677329Fe1BD7338506EF3E5E0895E',  
      tokenDecimals: 9,
      tokenAdress: '0xB4B57F17635134eA65deF7237292ba5ED8e4C975',
      totalSupply: 1000000000000000,
      tokenForPresale: 229999999999950,
      tokenForLiquadity: 160999999999965,
      presaleRate: 1533333333333,
      listingRate: 1533333333333,
      initialMarketCap: 147636.2,
      unsoldTokens: 'Refund',

      socials:[
        {
          href: '#',  
          type: 'telegram',
        },
        {
          href: '#',
          type: 'twitter',
        },
        {
          href: '#',
          type: 'discord',
        },
      ],

      presaleStartTime: '2022-02-10T22:53:30',
      presaleEndTime: '2022-02-17T22:53:30', 
      // Если началась предпродажа, то таймер стопаеться

      listingOn: 'Pancakeswap',
      liquadityPercent: 70,
      liquadityLockupTime: '120 days after pool ends',

      whitelistLength: 35,
    }

    return {
      item,
    }
  },
  mounted () {
    if(this.item.useWhitelist){
      let inWhitelist = false
      axios.get('/project/' + this.wallet.id)
        .then(function (response) {
          inWhitelist = response
        })

      // Remove
      inWhitelist = true

      return inWhitelist
    }
  },
  computed: {
    ...mapGetters([
      'wallet'
    ]),
    editeditem() {
      let item = this.item

      let percentageRate = item.hardCap / 100
      item.progress = item.collected / percentageRate
      if(item.progress > 100){
        item.lineProgress = 'width: 100%'
      }else{
        item.lineProgress = 'width:' + item.progress + '%'
      }

      item.progressMask = item.progress.toFixed(2) + '%'

      item.exchangeRateMask = this.maskText(item.exchangeRate)
      item.softCapMask = this.maskText(item.softCap) + ' ' + item.blockchainSymbol
      item.hardCapMask = this.maskText(item.hardCap) + ' ' + item.blockchainSymbol

      item.totalSupplyMask = this.maskText(item.totalSupply) + ' ' + item.tokenSymbol
      item.tokenForPresaleMask = this.maskText(item.tokenForPresale) + ' ' + item.tokenSymbol
      item.tokenForLiquadityMask = this.maskText(item.tokenForLiquadity) + ' ' + item.tokenSymbol
      item.presaleRateMask = this.maskText(item.presaleRate) + ' ' + item.tokenSymbol
      item.listingRateMask = this.maskText(item.listingRate) + ' ' + item.tokenSymbol
      item.initialMarketCapMask = this.maskText(item.initialMarketCap) + ' ' + item.tokenSymbol

      item.minBuyMask = this.maskText(item.minBuy) + ' ' + item.blockchainSymbol
      item.maxBuyMask = this.maskText(item.maxBuy) + ' ' + item.blockchainSymbol

      item.presaleStartTime = new Date(item.presaleStartTime)

      item.presaleStartTimeMask = 
        item.presaleStartTime.getFullYear() + '.' +
        this.months[item.presaleStartTime.getMonth()] + '.' +
        item.presaleStartTime.getDate() + ' ' +
        item.presaleStartTime.getHours() + ':' +
        item.presaleStartTime.getMinutes() + ' (UTC)'

      return item
    }
  },
  data() {
    return {
      months: ["01", "02", "03", "04", "05", "06",
         "07", "08", "09", "10", "11", "12"],
    }
  },
  mixins:[
    maskTextMixin,
  ],
  provide() {
    return {
      project: this.editeditem,
    }
  },
  components: {
    ProjectInfo,
    ProjectSale,
    ProjectDetails,
    ProjectWhitelist,
  },
}
</script>