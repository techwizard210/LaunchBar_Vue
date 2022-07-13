<template>
  <button
  class="theme btn-clear"
  :class="theme === 'light' ? 'theme--light' : ''"
  @click="toggleTheme()"
  >
    <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.4987 12C11.4987 7.29669 14.205 3.22613 18.1449 1.25855C16.5331 0.453626 14.7151 0 12.791 0C6.16359 0 0.791016 5.37257 0.791016 12C0.791016 18.6274 6.16359 24 12.791 24C14.7151 24 16.5331 23.5464 18.1449 22.7415C14.205 20.7739 11.4987 16.7033 11.4987 12Z" fill="#5F5F5F"/>
    </svg>
  </button>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      theme: "",
    };
  },
  mounted: function () {
    if(localStorage.getItem("theme") === null){
      localStorage.setItem("theme", '')
    }

    let localTheme = localStorage.getItem("theme"); //gets stored theme value if any
    document.documentElement.setAttribute("data-theme", localTheme); // updates the data-theme attribute

    this.theme = localTheme; // Автоматически дает класс кнопке
  },
  methods: {
    ...mapMutations(['setTheme']),
    toggleTheme() {
      this.theme = this.theme == "light" ? "" : "light"; //toggles theme value
      document.documentElement.setAttribute("data-theme", this.theme); // sets the data-theme attribute
      localStorage.setItem("theme", this.theme); // stores theme value on local storage

      this.setTheme(this.theme)
    },
  },
};
</script>