import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Accueil from "./components/Accueil";
import Projets from "./components/Projets";
//import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Morpion from "./components/Morpion";
import Parcours from "./components/Parcours";
import Dame from "./components/Dame";
import vuetify from './plugins/vuetify';
import Interets from "./components/Interets";
import JeuCarte from "./components/JeuCarte";
import Test from "./components/Test";

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(vuetify, {
  iconfont: 'md'
})

const router = new VueRouter({
  mode: "history",
  routes : [
    { path: '/', redirect: '/accueil'},
    { path: '/accueil', component: Accueil},
    { path: '/projets', component: Projets},
    //{ path: '/articles', component: Articles},
    { path: '/contact', component: Contact},
    { path: '/projets/morpion', component : Morpion},
    { path: '/projets/dame', component : Dame},
    { path: '/parcours', component: Parcours},
    { path: '/interets', component: Interets},
    { path: '/projets/jeuPaires', component: JeuCarte},
    { path: '/projets/test', component: Test}
  ]
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
