<template>
    <div id="header">
        <div v-responsive.lg.xl>
        <v-toolbar dark>
                    <v-toolbar-title><v-btn to="/accueil" text>Accueil</v-btn></v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn to="/parcours" text>Parcours</v-btn>
                    <v-btn to="/projets" text>Projets</v-btn>
                    <!--<v-btn to="/articles" text>Articles</v-btn>-->
                    <v-btn to="/interets" text>Centres d'intérêt</v-btn>
                    <v-btn text to="/contact">Contact</v-btn>
        </v-toolbar>
        </div>
        <div v-responsive.sm.xs>
            <v-app-bar dense dark>
                <v-btn icon @click.stop="drawer = !drawer">
                    <v-icon>mdi-menu</v-icon>
                </v-btn>
                <v-toolbar-title>Gabriel</v-toolbar-title>
            </v-app-bar>
            <v-navigation-drawer dark v-model="drawer" absolute temporary>
                    <v-list>
                        <v-list-item to="/accueil">
                            <v-icon>mdi-home</v-icon>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item to="/parcours">
                            <v-list-item-title>Parcours</v-list-item-title>
                        </v-list-item>
                        <v-list-item to="/projets">
                            <v-list-item-title>Projets</v-list-item-title>
                        </v-list-item>
                        <v-list-item to="/interets">
                            <v-list-item-title>Centres d'intérêt</v-list-item-title>
                        </v-list-item>
                        <v-list-item to="/contact">
                            <v-list-item-title>Contact</v-list-item-title>
                        </v-list-item>
                    </v-list>
            </v-navigation-drawer>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data () {
            return {
                drawer: null
            }
        }
    }

</script>

<style scoped>

</style>