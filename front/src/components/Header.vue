<template>
    <div id="header">
            <v-toolbar>
                <v-toolbar-title><v-btn to="/accueil" text>gabrielc.dev</v-btn></v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn to="/projets" text>Projets</v-btn>
                <v-btn to="/articles" text>Articles</v-btn>
                <v-btn text>Centres d'intérêt</v-btn>
                <v-btn text to="/contact">Contact</v-btn>
            </v-toolbar>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }

</script>

<style scoped>

</style>