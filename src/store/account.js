import { userService } from '../service';

const user = JSON.parse(localStorage.getItem('user'));
const state = user
    ? { status: { loggedIn: true }, user }
    : { status: {}, user: null };

const actions = {
    logout({ commit }) {
        userService.logout();
        commit('logout');
    },
};

const mutations = {

    logout(state) {
        state.status = {};
        state.user = null;
    },

};

const account = {
    namespaced: true,
    state,
    actions,
    mutations
};

export default account