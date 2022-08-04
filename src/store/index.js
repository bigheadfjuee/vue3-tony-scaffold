import { createStore } from "vuex";

import account from './account';
import navbar from './navbar';

const store = createStore({
  modules: {
    account,
    navbar,
  }
})


export default store;
