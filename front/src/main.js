import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Accueil from "./components/Accueil";
import Projets from "./components/Projets";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Morpion from "./components/Morpion";
import Dame from "./components/Dame";
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes : [
    { path: '/', redirect: '/accueil'},
    { path: '/accueil', component: Accueil},
    { path: '/projets', component: Projets},
    { path: '/articles', component: Articles},
    { path: '/contact', component: Contact},
    { path: '/projets/morpion', component : Morpion},
    { path: '/projets/dame', component : Dame}
  ]
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
