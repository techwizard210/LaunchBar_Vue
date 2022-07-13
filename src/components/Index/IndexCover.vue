<template>
  <section class="index-cover">
    <div class="container">
      <div class="index-cover__inner">
        <div class="index-cover__info">
          <h1 class="index-cover__title title">
            A Fully Decentralized Launchpad
          </h1>
          <p class="index-cover__descr">
            That allows any project to collect initial investments!
          </p>
          <div class="index-cover__buttons">
            <app-button
            view='yellow'
            big
            innerLink
            title="Create"
            href="gfgffg/"
            ></app-button>
            <app-button
            title='Launchpad'
            view='blue'
            big
            link
            href="/list"
            ></app-button>
          </div>
        </div>
        <div class="index-cover__imgwrapper">
          <img src="@/assets/images/phone.svg" alt="">
        </div>
      </div>
      <div class="index-cover__graphic">
        <img src="@/assets/images/index-graphic-bg.png" alt="">
      </div>
    </div>
  </section>  
</template>

<script>
export default {
  
}
</script>