<template>
  <section class="project-details">
    <ul class="project-details__table">
      <li class="project-details__item">
        <p class="project-details__label">
          Presale Address
        </p>
        <span class="project-details__value">
          {{ project.presaleAdress }}
        </span>
      </li>
      <li class="project-details__item">
        <p class="project-details__label">
          Token Name
        </p>
        <span class="project-details__value">
          {{ project.name }}
        </span>
      </li>
      <li class="project-details__item">
        <p class="project-details__label">
          Token Symbol
        </p> 
        <span class="project-details__value">
          {{ project.tokenSymbol }}
        </span>
      </li>
      <li class="project-details__item">
        <p class="project-details__label">
          Token Decimals
        </p> 
        <span class="project-details__value">
          {{ project.tokenDecimals }}
        </span>
      </li>
      <li class="project-details__item">
        <p class="project-details__label">
          Token Address
        </p>
        <span class="project-details__value">
          {{ project.tokenAdress }}
          <span class="project-details__value-descr">
            (Do not send BNB to the token address!)
          </span>
        </span>
      </li>
      <li class="project-details__item">
        <p class="project-details__label">
          Total Supply
        </p>
        <span class="project-details__value">
          {{ project.totalSupplyMask }}
        </span>
      </li>
      <li class="project-details__item">
        <p class="project-details__label">
          Tokens For Presale
        </p>
        <span class="project-details__value">
          {{ project.tokenForPresaleMask }}
        </span>
      </li>
      <li class="project-details__item">
        <p class="project-details__label">
          Tokens For Liquidity
        </p>
        <span class="project-details__value">
          {{ project.tokenForLiquadityMask }}
        </span>
      </li>
      <li class="project-details__item">
        <p class="project-details__label">
          Presale Rate
        </p>
        <span class="project-details__value">
          {{ project.presaleRateMask }}
        </span>
      </li>
      <li class="project-details__item">
        <p class="project-details__label">
          Listing Rate
        </p>
        <span class="project-details__value">
          {{ project.listingRateMask }}
        </span>
      </li>
      <li class="project-details__item">
        <p class="project-details__label">
          Initial Market Cap (estimate)
        </p>
        <span class="project-details__value">
          {{ project.initialMarketCapMask }}
        </span>
      </li>
      <li class="project-details__item">
        <p class="project-details__label">
          Soft Cap
        </p>
        <span class="project-details__value">
          {{ project.softCapMask }}
        </span>
      </li>
      <li class="project-details__item">
        <p class="project-details__label">
          Hard Cap
        </p>
        <span class="project-details__value">
          {{ project.hardCapMask }}
        </span>
      </li>
      <li class="project-details__item">
        <p class="project-details__label">
          Unsold Tokens
        </p>
        <span class="project-details__value">
          {{ project.unsoldTokens }}
        </span>
      </li>
      <li class="project-details__item">
        <p class="project-details__label">
          Presale Start Time
        </p>
        <span class="project-details__value">
          {{ project.presaleStartTimeMask }}
        </span>
      </li>
      <li class="project-details__item">
        <p class="project-details__label">
          Presale End Time
        </p>
        <span class="project-details__value">
          {{ project.presaleEndTime }}
        </span>
      </li>
      <li class="project-details__item">
        <p class="project-details__label">
          Listing On
        </p>
        <span class="project-details__value">
          {{ project.listingOn }}
        </span>
      </li>
      <li class="project-details__item">
        <p class="project-details__label">
          Liquidity Percent
        </p>
        <span class="project-details__value">
          {{ project.liquadityPercent + '%' }}
        </span>
      </li>
      <li class="project-details__item">
        <p class="project-details__label">
          Liquidity Lockup Time
        </p>
        <span class="project-details__value">
          {{ project.liquadityLockupTime }}
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
import maskTextMixin from '@/mixins/maskTextMixin'

export default {
  inject:[
    'project',
  ],
  mixins:[
    maskTextMixin,
  ],
}
</script>