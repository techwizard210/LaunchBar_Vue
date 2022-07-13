<template>
  <section class="list-filters">
    <div class="container">
      <div class="list-filters__inner">
        <div class="list-filters__search-wrapper">
          <app-input
          placeholderText="Search"
          view="search"
          v-model="data.search"
          ></app-input>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3566 2.28852C10.3056 -0.762507 5.33978 -0.762507 2.28875 2.28852C-0.761615 5.34021 -0.761615 10.3053 2.28875 13.357C5.00577 16.0734 9.23739 16.3644 12.2864 14.2433C12.3506 14.5469 12.4974 14.8366 12.7335 15.0727L17.1768 19.5159C17.8243 20.1621 18.8706 20.1621 19.5148 19.5159C20.1617 18.8691 20.1617 17.8228 19.5148 17.1779L15.0716 12.7333C14.8368 12.4992 14.5464 12.3517 14.2429 12.2875C16.3653 9.23782 16.0743 5.00686 13.3566 2.28852ZM11.9538 11.9542C9.6759 14.232 5.96877 14.232 3.69157 11.9542C1.41504 9.67633 1.41504 5.96986 3.69157 3.69201C5.96877 1.41481 9.6759 1.41481 11.9538 3.69201C14.2316 5.96986 14.2316 9.67633 11.9538 11.9542Z" fill="#9E9EA7"/>
          </svg>
        </div>
        <div class="list-filters__checkboxes-mobileoverflow">
          <div class="list-filters__checkboxes-wrapper">
            <div class="list-filters__inputs-wrapper">
              <div class="list-filters__inputs">
                <div class="list-filters__inputs-content">
                  <app-input
                  v-for='item in info.filtersCheckboxes'
                  :key='item'
                  radio
                  :checkboxValue='item.value'
                  :descr='item.text'
                  :checkboxChecked='item.checked'
                  :checkboxName='info.filtersName'
                  @choosed='setType'
                  ></app-input>
                </div>
              </div>
            </div>
            <div class="list-filters__selects">
              <app-select
              :options='info.filtersSelects[0].options'
              @selectedBlockchain='setFilterStatus'
              :placeholderValue="info.filtersSelects[0].text"
              ></app-select>
              <app-select
              :options='info.filtersSelects[1].options'
              @selectedBlockchain='setFilterSort'
              :placeholderValue="info.filtersSelects[1].text"
              ></app-select>
            </div>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppSelect from '@/components/App/AppSelect.vue';

import { mapGetters, mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations(['changeFilters']),
    setFilterStatus(value) {
      this.data.status = value
    },
    setFilterSort(value) {
      this.data.sort = value
    },
    setType(value){
      this.data.type = value
    }
  },
  mounted () {
    this.data = JSON.parse(JSON.stringify(this.filters))
  },
  computed: {
    ...mapGetters(['filters'])
  },
  watch: {
    data: {
      deep: true,
      handler(value){
        this.changeFilters(value)
      }
    }
  },
  data() {
    return {
      data:{
        search: '',
        type: '',
        status: '',
        sort: '',
      },
      info:{
        filtersName: 'list-filters',
        filtersCheckboxes:[
          {
            text: 'All Launchpads',
            value: 'all',
            checked: true,
          },
          {
            text: 'My Contributions',
            value: 'my-contrubs',
          },
        ],
        filtersSelects:[
          {
            text: 'All Status',
            options:[
              {
                value: 'all',
                label: 'All sales',
              },
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
          },
          {
            text: 'No Filter',
            options:[
              {
                label: 'No filter',
                value: 'nofilter',
              },
              {
                label: 'Hard Cap',
                value: 'hardcap',
              },
              {
                label: 'Soft Cap',
                value: 'softcap',
              },
              {
                label: 'LP Percent',
                value: 'lppercent',
              },
              {
                label: 'Start Time',
                value: 'starttime',
              },
              {
                label: 'End Time',
                value: 'endtime',
              },
            ],
          },
        ]
      },
    }
  },
  components: {
    AppSelect,
  },
}
</script>