import { createStore } from 'vuex';

import blockchains from "./modules/blockchains";
import user from "./modules/user";
import theme from "./modules/theme";
import filters from "./modules/filters";

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    blockchains,
    user,
    theme,
    filters,
  },
});
