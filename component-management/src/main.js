// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@mdi/font/css/materialdesignicons.css'
import VueCodemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import '../node_modules/vuetify/src/stylus/app.styl'
//Event bus
const EventBus = new Vue();
Vue.prototype.$eventBus = EventBus;
Vue.use(VueCodemirror);

//store
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        projects: [],
    },
    getters: {
        getProjectById: (state) => (id) => {
            for (let project of state.projects) {
                if (project.projectId === id) {
                    return project;
                }
            }
            return null;
        },
    },
    mutations: {
        setProjects(state, projects) {
            state.projects = projects;
        }
    },
    actions:{}

});

//vuetify
import {
    Vuetify,
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VAvatar,
    VMenu,
    VSelect,
    VTextField,
    VCard,
    VTooltip,
    VDivider,
    VDialog,
    VTabs,
    VTextarea,
    transitions
} from 'vuetify'
Vue.use(Vuetify, {
    components: {
        VApp,
        VNavigationDrawer,
        VFooter,
        VList,
        VBtn,
        VIcon,
        VGrid,
        VToolbar,
        VAvatar,
        VMenu,
        VSelect,
        VTextField,
        VCard,
        VTooltip,
        VDivider,
        VDialog,
        VTabs,
        VTextarea,
        transitions
    },
    theme: {
        primary: '#ee44aa',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
    }
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});
