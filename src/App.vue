<template>
    <v-app>
        <Header/>
    <v-content>
      <router-view>
      </router-view>
    </v-content>
        <Footer id="footerMobile"/>
    </v-app>
</template>

<script>
  import Header from "./components/Header";
  import Footer from "./components/Footer";
export default {
  name: 'App',
  components: {
      Footer,
    Header,
  }
};
</script>

<style>
    @media all and (min-width: 761px){
        #footerMobile{
            display: none;
        }
    }
</style>
