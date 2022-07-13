<template>
  <section class="project-sale"
  :class="errorText ? 'project-sale--error' : ''"
  >
    <h2 class="project-sale__title">
      Presale Starts In:
    </h2>
    <p class="project-sale__timer">
      <vue3-flip-countdown 
      :deadlineDate="project.presaleStartTime"
      :flipAnimation="false"
      :showLabels="false"
      />
    </p>
    <div class="progress">
      <span class="progress-line"></span>
      <span class="progress-line progress-line--done"
      :style="project.lineProgress"
      ></span>
      <span class="progress-values">
        <span class="progress-value">
          {{ project.collected + ' ' + project.blockchainSymbol }}
        </span>
        <span class="progress-value">
          {{ project.hardCap + ' ' + project.blockchainSymbol}}
        </span>
      </span>
    </div>
    <div class="project-sale__input-wrapper">
      <app-input
      descr="Amount"
      placeholderText="0.0"
      view="grey"
      v-model="tokenBuy"
      type="number"
      ></app-input>
      <p class="project-sale__error">
        {{ errorText }}
      </p>
      <button class="project-sale__max btn-clear"
      @click="setMax()"
      >
        MAX
      </button>
    </div>
    <app-button
    title="Buy"
    @click="buyToken()"
    ></app-button>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  inject:[
    'project',
  ],
  data() {
    return {
      tokenBuy: '',
      errorText: '',
      errors:{
        tooSmall: 'Value must be more than 0.000000000000000000000000000001',
        tooBig: 'Value must be less than max',
      },
    }
  },
  watch: {
    tokenBuy(value){
      console.log(value)
      if(value === ''){
        this.errorText = ''
      }else if(value > this.project.maxBuy){
        this.errorText = this.errors.tooBig
      }else if(value < 0.000000000000000000000000000001){
        this.errorText = this.errors.tooSmall
      }else{
        this.errorText = ''
      }
    }
  },
  methods: {
    setMax() {
      this.tokenBuy = this.project.maxBuy
    },
    buyToken(){
      // Убрать
      this.tokenBuy = ''

      // Расскоментировать
      axios.post('/buy/' + this.project.id, this.tokenBuy)
        .then(function() {
          this.tokenBuy = ''
        })
    }
  },
}
</script>