<template>
  <section class="index-info">
    <div class="container">
      <ul class="index-info__items">
        <li class="index-info__item block"
        v-for='(item, index) in info.items'
        :key="item"
        >
          <p class="index-info__title">
            {{ item.title }}
          </p>
          <p class="index-info__descr">
            {{ item.descr }}
          </p>
          <app-button
          :title="item.btnTitle"
          big
          :innerLink="index === 0"
          :link="index !== 0"
          :href="item.href"
          :view="index === 0 ? 'yellow' : ''"
          ></app-button>
        </li>
      </ul>
      <div class="index-info__instruction block">
        <p class="index-info__descr">
          {{ info.instruction.descr }}
        </p>
        <app-button
        :title="info.instruction.btnTitle"
        big
        innerLink
        view="dark-blue"
        :href="info.instruction.href"
        ></app-button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      info:{
        items:[
          {
            title: 'Add project',
            descr: 'The interface is as simple and intuitive as possible. To launch a project, it is enough to submit a request by clicking on the Create button.',
            btnTitle: 'Create Project',
            href: '/gfgffg',
          },
          {
            title: 'Buy tokens',
            descr: 'To invest in the project, connect your wallet. Go to the page with all the companies. Select the appropriate company, enter the amount in BNB (IMX, NEAR) in the amount field, and click Buy.',
            btnTitle: 'Launchpad List',
            href: '/list',
          },
        ],
        instruction:{
          descr: 'The interface is as simple and intuitive as possible. To launch a project, it is enough to submit a request by clicking on the Create button.',
          btnTitle: 'Documents',
          href: '/gfgffg',
        },
      },
    }
  },
}
</script>