<template>
  <section class="list-items">
    <div class="container">
      <infinite-scroll @infinite-scroll="loadNewItems">
        <div class="list-items__items">
          <router-link class="list-items__item project-card"
          :class="
            item.status == 'upcoming' ? 'project-card--upcoming' :
            item.status == 'live' ? 'project-card--live' : 
            'project-card--ended'
          "

          :to="'/project/' + item.name"

          v-for='item in allProjects'
          :key="item"
          >
            <span class="project-card__imgwrapper">
              <img :src="item.image" alt="">
              <span class="project-status"
              :class="
                item.status == 'upcoming' ? 'project-status--upcoming' :
                item.status == 'live' ? 'project-status--live' : 
                'project-status--ended'
              "
              >
                {{ 
                  item.status == 'upcoming' ? 'Upcoming' :
                  item.status == 'live' ? 'Sale Live' : 
                  'Sale Ended'
                }}
              </span>
            </span>
            <span class="project-card__info">         
              <span class="project-card__name">
                {{ item.name }}
              </span>
              <span class="project-card__cap">
                <span class="project-card__cap-label project-card__label">
                  Soft/Hard Cap:
                </span>
                <span class="project-card__cap-value">
                  {{ item.softCapMask + ' ' + item.blockchainSymbol }}
                  <span class="project-card__cap-divider">
                    -
                  </span>
                  <div class="project-card__cap-value--hard-cap">
                    {{ item.hardCapMask + ' ' + item.blockchainSymbol }}
                  </div>
                </span>
              </span>
              <span class="project-card__rate">
                {{ 1 + ' ' + item.blockchainSymbol + ' = ' + item.exchangeRateMask + ' ' + item.tokenSymbol }}
              </span>
              <span class="progress">
                <span class="project-card__progress-label project-card__label">
                  {{ 'Progress: (' + item.progressMask + ')' }}
                </span>
                <span class="progress-line"></span>
                <span class="progress-line progress-line--done"
                :style="item.lineProgress"
                ></span>
                <span class="progress-values">
                  <span class="progress-value">
                    {{ item.collected + ' ' + item.blockchainSymbol }}
                  </span>
                  <span class="progress-value">
                    {{ item.hardCapMask + ' ' + item.blockchainSymbol}}
                  </span>
                </span>
              </span>

              <span class="project-card__footer">
                <span class="project-card__sale">
                  <span class="project-card__sale-label"
                  v-if="item.status === 'live'"
                  >
                    Sale Ends In:
                  </span>
                  <span class="project-card__sale-label"
                  v-else
                  >
                    Presale:
                  </span>
                  <span class="project-card__sale-time"
                  v-if="item.status === 'ended'"
                  >
                    Ended
                  </span>
                  <span class="project-card__sale-time"
                  v-else
                  >
                    <vue3-flip-countdown 
                    :deadlineDate="item.status === 'upcoming' ? item.presaleStartTime : item.saleStartTime"
                    :flipAnimation="false"
                    :showLabels="false"
                    />
                  </span>
                </span>
                <app-button
                title="View"
                view="dark-blue"
                ></app-button>
              </span>
            </span>
          </router-link>
        </div>
      </infinite-scroll>
    </div>
  </section>
</template>

<script>
import maskTextMixin from '@/mixins/maskTextMixin';

import InfiniteScroll from "infinite-loading-vue3";
// import axios from "axios";

import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'filters',
      'currentBlockchain',
    ]),
    allProjects() {
      return this.info.items.map( (item) => {

        let percentageRate = item.hardCap / 100
        item.progress = item.collected / percentageRate
        if(item.progress > 100){
          item.lineProgress = 'width: 100%'
        }else{
          item.lineProgress = 'width:' + item.progress + '%'
        }
        
        item.progressMask = item.progress.toFixed(2) + '%'

        item.exchangeRateMask = this.maskText(item.exchangeRate)
        item.softCapMask = this.maskText(item.softCap)
        item.hardCapMask = this.maskText(item.hardCap)
        
        item.presaleStartTime = new Date(item.presaleStartTime)
        item.saleStartTime = new Date(item.saleStartTime)

        return item
      })
    }
  },
  methods: {
    async loadNewItems() {
      this.info.items.push({
            name: 'BabyMafia',
            status: 'upcoming',
            image: require('@/assets/images/temp/list-item-1.jpg'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 0,
            softCap: 75,
            hardCap: 150,
            exchangeRate: 5000000000,

            presaleAdress: '',  
            tokenDecimals: 9,
            tokenAdress: '0xB4B57F17635134eA65deF7237292ba5ED8e4C975',
            totalSupply: 1000000000000000,
            tokenForPresale: 229999999999950,
            tokenForLiquadity: 160999999999965,
            presaleRate: 1533333333333,
            listingRate: 1533333333333,
            initialMarketCap: 147636,
            unsoldTokens: 'Refund',

            // presaleStartTime: '2022.01.12 18:00 (UTC)',
            presaleStartTime: '2022-01-27T22:53:30',
            saleStartTime: '2022-01-28T22:53:30',
            presaleEndTime: '2022.01.12 18:00 (UTC)',

            listingOn: 'Pancakeswap',
            liquadityPercent: 70,
            liquadityLockupTime: '120 days after pool ends',
          },
          {
            name: 'NameProject',
            status: 'live',
            image: require('@/assets/images/temp/list-item-2.jpg'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 250,
            saleStart: '',
            softCap: 250,
            hardCap: 500,
            exchangeRate: 7347030021,

            presaleStartTime: '2022-01-24T22:53:30',
            saleStartTime: '2022-01-28T22:53:30',
          },
          {
            name: 'NameProject',
            status: 'ended',
            image: require('@/assets/images/temp/list-item-3.jpg'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 100,
            saleStart: '',
            softCap: 50,
            hardCap: 100,
            exchangeRate: 3240071022,

            presaleStartTime: '2022-01-26T22:53:30',
            saleStartTime: '2022-02-12T22:53:30',
          },
          {
            name: 'NameProject',
            status: 'upcoming',
            image: require('@/assets/images/temp/list-item-1.jpg'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 0,
            saleStart: '',
            softCap: 75,
            hardCap: 150,
            exchangeRate: 5000000000,

            presaleStartTime: '2022-01-26T22:53:30',
            saleStartTime: '2022-02-12T22:53:30',
          },
          {
            name: 'NameProject',
            status: 'live',
            image: require('@/assets/images/temp/list-item-2.jpg'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 250,
            saleStart: '',
            softCap: 250,
            hardCap: 500,
            exchangeRate: 7347030021,

            presaleStartTime: '2022-01-26T22:53:30',
            saleStartTime: '2022-02-12T22:53:30',
          },
          {
            name: 'NameProject',
            status: 'ended',
            image: require('@/assets/images/temp/list-item-3.jpg'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 100,
            saleStart: '',
            softCap: 50,
            hardCap: 100,
            exchangeRate: 3240071022,

            presaleStartTime: '2022-01-26T22:53:30',
            saleStartTime: '2022-02-12T22:53:30',
          },
          {
            name: 'NameProject',
            status: 'upcoming',
            image: require('@/assets/images/temp/list-item-1.jpg'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 0,
            saleStart: '',
            softCap: 75,
            hardCap: 150,
            exchangeRate: 5000000000,

            presaleStartTime: '2022-01-26T22:53:30',
            saleStartTime: '2022-02-12T22:53:30',
          },
          {
            name: 'NameProject',
            status: 'live',
            image: require('@/assets/images/temp/list-item-2.jpg'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 250,
            saleStart: '',
            softCap: 250,
            hardCap: 500,
            exchangeRate: 7347030021,

            presaleStartTime: '2022-01-26T22:53:30',
            saleStartTime: '2022-02-12T22:53:30',
          },
          {
            name: 'NameProject',
            status: 'ended',
            image: require('@/assets/images/temp/list-item-3.jpg'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 100,
            saleStart: '',
            softCap: 50,
            hardCap: 100,
            exchangeRate: 3240071022,

            presaleStartTime: '2022-01-26T22:53:30',
            saleStartTime: '2022-02-12T22:53:30',
          },
          {
            name: 'NameProject',
            status: 'upcoming',
            image: require('@/assets/images/temp/list-item-1.jpg'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 0,
            saleStart: '',
            softCap: 75,
            hardCap: 150,
            exchangeRate: 5000000000,

            presaleStartTime: '2022-01-26T22:53:30',
            saleStartTime: '2022-02-12T22:53:30',
          },
          {
            name: 'NameProject',
            status: 'live',
            image: require('@/assets/images/temp/list-item-2.jpg'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 250,
            saleStart: '',
            softCap: 250,
            hardCap: 500,
            exchangeRate: 7347030021,

            presaleStartTime: '2022-01-26T22:53:30',
            saleStartTime: '2022-02-12T22:53:30',
          },
          {
            name: 'NameProject',
            status: 'ended',
            image: require('@/assets/images/temp/list-item-3.jpg'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 100,
            saleStart: '',
            softCap: 50,
            hardCap: 100,
            exchangeRate: 3240071022,

            presaleStartTime: '2022-01-26T22:53:30',
            saleStartTime: '2022-02-12T22:53:30',
          },
          {
            name: 'NameProject',
            status: 'upcoming',
            image: require('@/assets/images/temp/list-item-1.jpg'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 0,
            saleStart: '',
            softCap: 75,
            hardCap: 150,
            exchangeRate: 5000000000,

            presaleStartTime: '2022-01-26T22:53:30',
            saleStartTime: '2022-02-12T22:53:30',
          },
          {
            name: 'NameProject',
            status: 'live',
            image: require('@/assets/images/temp/list-item-2.jpg'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 250,
            saleStart: '',
            softCap: 250,
            hardCap: 500,
            exchangeRate: 7347030021,

            presaleStartTime: '2022-01-26T22:53:30',
            saleStartTime: '2022-02-12T22:53:30',
          },
          {
            name: 'NameProject',
            status: 'ended',
            image: require('@/assets/images/temp/list-item-3.jpg'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 100,
            saleStart: '',
            softCap: 50,
            hardCap: 100,
            exchangeRate: 3240071022,

            presaleStartTime: '2022-01-26T22:53:30',
            saleStartTime: '2022-02-12T22:53:30',
          },)
      // try {
      //   const result = await axios.get(`items&page=${this.page}`, [this.filters, this.currentBlockchain.value])
      //   if(result) {
      //     this.info.items.push(...result);
      //     this.page++;
      //   } else {
      //     this.noResult = true;
      //     this.message = "No result found";
      //   }
      // } catch(err) {
      //   this.noResult = true;
      //   this.message = "Error loading data";
      // }
    }
  },
  mixins:[
    maskTextMixin,
  ],
  mounted () {
    this.loadNewItems()
  },
  data() {
    return {
      page: 1,
      noResult: false,
      message: "",

      today: new Date(),
      info:{
        items:[
          {
            name: 'BabyMafia',
            status: 'upcoming',
            image: require('@/assets/images/temp/list-item-1.jpg'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 0,
            saleStart: '',
            softCap: 75,
            hardCap: 150,
            exchangeRate: 5000000000,

            presaleAdress: '',  
            tokenDecimals: 9,
            tokenAdress: '0xB4B57F17635134eA65deF7237292ba5ED8e4C975',
            totalSupply: 1000000000000000,
            tokenForPresale: 229999999999950,
            tokenForLiquadity: 160999999999965,
            presaleRate: 1533333333333,
            listingRate: 1533333333333,
            initialMarketCap: 147636,
            unsoldTokens: 'Refund',

            // presaleStartTime: '2022.01.12 18:00 (UTC)',
            presaleStartTime: '2022-01-27T22:53:30',
            saleStartTime: '2022-01-28T22:53:30',
            presaleEndTime: '2022.01.12 18:00 (UTC)',

            listingOn: 'Pancakeswap',
            liquadityPercent: 70,
            liquadityLockupTime: '120 days after pool ends',
          },
          {
            name: 'NameProject',
            status: 'live',
            image: require('@/assets/images/temp/list-item-2.jpg'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 250,
            saleStart: '',
            softCap: 250,
            hardCap: 500,
            exchangeRate: 7347030021,

            presaleStartTime: '2022-01-24T22:53:30',
            saleStartTime: '2022-01-28T22:53:30',
          },
          {
            name: 'NameProject',
            status: 'ended',
            image: require('@/assets/images/temp/list-item-3.jpg'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 100,
            saleStart: '',
            softCap: 50,
            hardCap: 100,
            exchangeRate: 3240071022,

            presaleStartTime: '2022-01-26T22:53:30',
            saleStartTime: '2022-02-12T22:53:30',
          },
          {
            name: 'NameProject',
            status: 'upcoming',
            image: require('@/assets/images/temp/list-item-1.jpg'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 0,
            saleStart: '',
            softCap: 75,
            hardCap: 150,
            exchangeRate: 5000000000,

            presaleStartTime: '2022-01-26T22:53:30',
            saleStartTime: '2022-02-12T22:53:30',
          },
          {
            name: 'NameProject',
            status: 'live',
            image: require('@/assets/images/temp/list-item-2.jpg'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 250,
            saleStart: '',
            softCap: 250,
            hardCap: 500,
            exchangeRate: 7347030021,

            presaleStartTime: '2022-01-26T22:53:30',
            saleStartTime: '2022-02-12T22:53:30',
          },
          {
            name: 'NameProject',
            status: 'ended',
            image: require('@/assets/images/temp/list-item-3.jpg'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 100,
            saleStart: '',
            softCap: 50,
            hardCap: 100,
            exchangeRate: 3240071022,

            presaleStartTime: '2022-01-26T22:53:30',
            saleStartTime: '2022-02-12T22:53:30',
          },
          {
            name: 'NameProject',
            status: 'upcoming',
            image: require('@/assets/images/temp/list-item-1.jpg'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 0,
            saleStart: '',
            softCap: 75,
            hardCap: 150,
            exchangeRate: 5000000000,

            presaleStartTime: '2022-01-26T22:53:30',
            saleStartTime: '2022-02-12T22:53:30',
          },
          {
            name: 'NameProject',
            status: 'live',
            image: require('@/assets/images/temp/list-item-2.jpg'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 250,
            saleStart: '',
            softCap: 250,
            hardCap: 500,
            exchangeRate: 7347030021,

            presaleStartTime: '2022-01-26T22:53:30',
            saleStartTime: '2022-02-12T22:53:30',
          },
          {
            name: 'NameProject',
            status: 'ended',
            image: require('@/assets/images/temp/list-item-3.jpg'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 100,
            saleStart: '',
            softCap: 50,
            hardCap: 100,
            exchangeRate: 3240071022,

            presaleStartTime: '2022-01-26T22:53:30',
            saleStartTime: '2022-02-12T22:53:30',
          },
          {
            name: 'NameProject',
            status: 'upcoming',
            image: require('@/assets/images/temp/list-item-1.jpg'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 0,
            saleStart: '',
            softCap: 75,
            hardCap: 150,
            exchangeRate: 5000000000,

            presaleStartTime: '2022-01-26T22:53:30',
            saleStartTime: '2022-02-12T22:53:30',
          },
          {
            name: 'NameProject',
            status: 'live',
            image: require('@/assets/images/temp/list-item-2.jpg'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 250,
            saleStart: '',
            softCap: 250,
            hardCap: 500,
            exchangeRate: 7347030021,

            presaleStartTime: '2022-01-26T22:53:30',
            saleStartTime: '2022-02-12T22:53:30',
          },
          {
            name: 'NameProject',
            status: 'ended',
            image: require('@/assets/images/temp/list-item-3.jpg'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 100,
            saleStart: '',
            softCap: 50,
            hardCap: 100,
            exchangeRate: 3240071022,

            presaleStartTime: '2022-01-26T22:53:30',
            saleStartTime: '2022-02-12T22:53:30',
          },
          {
            name: 'NameProject',
            status: 'upcoming',
            image: require('@/assets/images/temp/list-item-1.jpg'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 0,
            saleStart: '',
            softCap: 75,
            hardCap: 150,
            exchangeRate: 5000000000,

            presaleStartTime: '2022-01-26T22:53:30',
            saleStartTime: '2022-02-12T22:53:30',
          },
          {
            name: 'NameProject',
            status: 'live',
            image: require('@/assets/images/temp/list-item-2.jpg'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 250,
            saleStart: '',
            softCap: 250,
            hardCap: 500,
            exchangeRate: 7347030021,

            presaleStartTime: '2022-01-26T22:53:30',
            saleStartTime: '2022-02-12T22:53:30',
          },
          {
            name: 'NameProject',
            status: 'ended',
            image: require('@/assets/images/temp/list-item-3.jpg'),
            blockchainSymbol: 'BNB',
            tokenSymbol: 'SOFT',
            collected: 100,
            saleStart: '',
            softCap: 50,
            hardCap: 100,
            exchangeRate: 3240071022,

            presaleStartTime: '2022-01-26T22:53:30',
            saleStartTime: '2022-02-12T22:53:30',
          },
        ],
      },
    }
  },
  components: {
    InfiniteScroll,
  },
}
</script>