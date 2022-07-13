<template>
  <section class="project-info">
    <div class="project-info__top">
      <div class="project-info__logo-wrapper">
        <img src="@/assets/images/temp/logo-1.jpg" alt="">
      </div>
      <div class="project-info__top-inner">
        <h1 class="project-info__name">
          {{ project.name }}
        </h1>
        <span class="project-status"
        :class="
          project.status == 'upcoming' ? 'project-status--upcoming' :
          project.status == 'live' ? 'project-status--live' : 
          'project-status--ended'
        "
        >
          {{ 
            project.status == 'upcoming' ? 'Upcoming' :
            project.status == 'live' ? 'Sale Live' : 
            'Sale Ended'
          }}
        </span>
        <app-socials
        :custom="project.socials"
        ></app-socials>
        <p class="project-info__descr">
          {{ project.descr }}
        </p>

      </div>
    </div>
    <ul class="project-info__characters">
      <li class="project-info__characters-item">
        <p class="project-info__characters-label">
          Status
        </p>
        <p class="project-info__characters-value"
        :class="
          project.status == 'upcoming' ? 'project-info__characters-value--upcoming' :
          project.status == 'live' ? 'project-info__characters-value--live' : 
          'project-info__characters-value--ended'
        "
        >
          {{ 
            project.status == 'upcoming' ? 'Upcoming' :
            project.status == 'live' ? 'Sale Live' : 
            'Sale Ended'
          }}
        </p>
      </li>
      <li class="project-info__characters-item">
        <p class="project-info__characters-label">
          Sale type:
        </p>
        <p class="project-info__characters-value project-info__characters-value--type">
          {{ 
            project.useWhitelist ? 'Whitelist Only' : 'Open to everyone'
          }}
        </p>
      </li>
      <li class="project-info__characters-item">
        <p class="project-info__characters-label">
          Minimum Buy:
        </p>
        <p class="project-info__characters-value project-info__characters-value--currency">
          {{ project.minBuyMask }}
        </p>
      </li>
      <li class="project-info__characters-item">
        <p class="project-info__characters-label">
          Maximum Buy:
        </p>
        <p class="project-info__characters-value project-info__characters-value--currency">
          {{ project.maxBuyMask }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
import AppSocials from '@/components/App/AppSocials.vue';

export default {
  inject:[
    'project',
  ],
  components: {
    AppSocials,
  },
}
</script>