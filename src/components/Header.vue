<template>
        <!-- dark ou color="elevation-0" ou color="green" ou rien -->
    <v-toolbar dark>
                <v-toolbar-title><v-btn to="/accueil" text>gabrielc.dev</v-btn></v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn to="/parcours" text>Parcours</v-btn>
                <v-btn to="/projets" text>Projets</v-btn>
                <!--<v-btn to="/articles" text>Articles</v-btn>-->
                <v-btn to="/interets" text>Centres d'intérêt</v-btn>
                <v-btn text to="/contact">Contact</v-btn>
    </v-toolbar>
</template>

<script>
    export default {
        name: "Header"
    }

</script>

<style scoped>

</style>