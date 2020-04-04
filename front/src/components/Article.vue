<template>
    <v-container>
        <v-flex xs6>
            <v-card max-width="600px">
                <v-img :src="resolve_img_url(img_article)" width="150px" max-height="100px"></v-img>
                <v-card-title>{{title}}</v-card-title>
                <v-card-subtitle>{{subtitle}}</v-card-subtitle>
                <v-card-text>{{description}}</v-card-text>
            </v-card>
        </v-flex>
    </v-container>
</template>

<script>
    export default {
        name: "Article",
        props : {
            title: String,
            subtitle: String,
            description: String,
            img_article: String
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

</style>