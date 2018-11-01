import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules';

Vue.use(Vuex);

const state = { //state in global module

};

const mutations = { //mutations in global module

};

const actions = { //actions in global module.

};

const store = new Vuex.Store({ // open store
    state,
    mutations,
    actions,
    modules
});

export default store;