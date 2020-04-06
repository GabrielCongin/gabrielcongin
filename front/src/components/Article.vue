<template>
    <v-container>
            <v-card id="card" width="380px" height="300" :href="lien_internet" :to="lien_article" target="_blank">
                <v-img :src="resolve_img_url(img_article)" width="200px" max-height="150px"></v-img>
                <v-card-title>{{title}}</v-card-title>
                <v-card-subtitle>{{subtitle}}</v-card-subtitle>
                <v-card-text>{{description}}</v-card-text>
            </v-card>
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
            lien_internet: String
        },
        methods: {
            resolve_img_url: function (path) {
                let images = require.context('../assets/', false, /\.png$|\.jpg$/)
                return images("./"+path)
            }
        }
    }
</script>

<style scoped>
    #card{
        padding: 0px;
    }

</style>