const state = {
  theme: '',
};

if(localStorage.getItem("theme") === null){
  localStorage.setItem("theme", '')
}

state.theme = localStorage.getItem('theme')

const getters = {
  theme: state => state.theme,
};

const mutations = {
  setTheme(state, payload){
    state.theme = payload
  }
};

export default {
  state,
  getters,
  mutations,
};