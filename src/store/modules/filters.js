const state = {
  filters:{
    search: '',
    type: '',
    status: '',
    sort: '',
  },
};

const getters = {
  filters: state => state.filters,
};

const mutations = {
  changeFilters(state, payload){
    state.filters = payload
  }
};

export default {
  state,
  getters,
  mutations,
};