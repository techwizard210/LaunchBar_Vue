<template>
  <ul class="social__list">
    <li class="social__item"
    v-for='social in items'
    :key='social'
    >
      <a class='social__link' :href='social.href'
      :class='social.type == "telegram" ? "social__link--telegram" : ""'
      target="_blank"
      >
        <img :src="getIcon(social.type)" alt="">
      </a>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    custom: {
      type: Array,
      default: null,
    },
  },
  methods: {
    getIcon(type){
      if(type === 'telegram'){
        return this.theme === '' ? require('@/assets/images/telegram.svg') : require('@/assets/images/telegram--theme.svg')
      }else if(type === 'twitter'){
        return this.theme === '' ? require('@/assets/images/twitter.svg') : require('@/assets/images/twitter--theme.svg')
      }else if(type === 'discord'){
        return this.theme === '' ? require('@/assets/images/discord.svg') : require('@/assets/images/discord--theme.svg')
      }
    }
  },
  computed: {
    ...mapGetters(['theme']),
    items() {
      return this.custom ? this.custom : this.socials
    }
  },
  data() {
    return {
      socials:[
        {
          href: 'https://www.instagram.com',  
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
    }
  },
}
</script>