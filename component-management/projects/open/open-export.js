import Vue from 'vue'
import nokiaButton from './components/nokia-button'
import nokiaHero from './components/nokia-hero'
import nokiaAvatarUser from './components/nokia-avatar-user'
import nokiaPagination from './components/nokia-pagination'
import nokiaHeader from './components/nokia-header'
import nokiaCarousel from  './components/nokia-carousel'
import nokiaSocials from  './components/nokia-socials'
import nokiaSelect from  './components/nokia-select'
import nokiaNavigation from './components/nokia-navigation'
import nokiaFlickity from  './components/nokia-flickity'
import nokiaAsyncTable from  './components/nokia-async-table'

Vue.component('nokia-button', nokiaButton);
Vue.component('nokia-hero', nokiaHero);
Vue.component('nokia-avatar-user', nokiaAvatarUser);
Vue.component('nokia-pagination',nokiaPagination);
Vue.component('nokia-header',nokiaHeader);
Vue.component('nokia-carousel',nokiaCarousel);
Vue.component('nokia-socials',nokiaSocials);
Vue.component('nokia-select',nokiaSelect);
Vue.component('nokia-navigation',nokiaNavigation);
Vue.component('nokia-flickity',nokiaFlickity);
Vue.component('nokia-async-table',nokiaAsyncTable);

if(typeof window !== undefined ) {
    window.Vue= Vue;
}




