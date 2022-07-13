<template>
  <section class="admin-login">
    <div class="container">
      <form class="admin-login__inner"
      @submit.prevent="loginAdmin()"
      >
        <h1 class="admin-login__title title">
          Login admin
        </h1>
        <app-input
        descr="Login"
        :inputRequired="true"
        v-model="admin.login"
        ></app-input>
        <app-input
        descr="Password"
        :inputRequired="true"
        v-model="admin.password"
        ></app-input>
        <span class="admin-login__error"
        :class="error.length > 0 ? 'admin-login__error--active' : ''"
        >
          {{ error }}
        </span>
        <app-button
        title="Login"
        big
        type="submit"
        ></app-button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  title: 'Admin',
  data() {
    return {
      admin:{
        login: '',
        password: '',
      },
      error: '',
    }
  },
  methods: {
    loginAdmin() {
      let isCorrect = this.admin.login === 'admin' && this.admin.password === 'Ttr!hx7CMcR7#nnE0biC6vzKs'
      if(isCorrect){
        localStorage.setItem('isAdmin', 'true')
        this.$router.push({ path: '/admin/list' })
      }else{
        this.admin = {}
        this.error ='Something wrong'
      }
    }
  },
}
</script>