<template>
    <v-container>
        <v-hover v-slot:default="{ hover }">
            <div id="article">
                <v-card :elevation="hover ? 12 : 2" id="card" :width="getWidth()" :height="getHeight()" :href="lien_internet" :to="lien_article" :target="newPage">
                    <v-img :src="resolve_img_url(img_article)" width="200px" max-height="150px"></v-img>
                    <v-card-title>{{title}}</v-card-title>
                    <v-card-subtitle>{{subtitle}}</v-card-subtitle>
                    <v-card-text>{{description}}</v-card-text>
                </v-card>
            </div>
        </v-hover>
    </v-container>
</template>

<script>
    export default {
        name: "Article",
        props : {
            title: String,
            subtitle: String,
            description: String,
            img_article: String,
            lien_article: String,
            lien_internet: String,
            newPage: String
        },
        methods: {
            resolve_img_url: function (path) {
                let images = require.context('../assets/', false, /\.png$|\.jpg$/)
                return images("./"+path)
            },
            getWidth(){
                if( screen.width <= 760 ) {
                    return "250px";
                }
                else {
                    return "380px";
                }
            },
            getHeight(){
                if( screen.width <= 760 ) {
                    return "380px";
                }
                else {
                    return "300px";
                }
            }

        }
    }
</script>

<style scoped>
    #card{
        padding: 0px;
    }

</style>