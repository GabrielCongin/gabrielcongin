<template>
    <v-container>
        <v-hover v-slot:default="{ hover }">
            <v-card
                    id="card"
                    class="mx-auto"
                    :width="getWidth()"
                    :height="getHeight()"
                    :elevation="hover ? 12 : 2"
            >
                <v-img
                        :src="resolve_img_url(img_interet)"
                        height="200px"
                ></v-img>
                <v-card-title>
                    {{title}}
                </v-card-title>
                <v-divider class="mx-4"></v-divider>
                <v-card-text>{{text}}</v-card-text>
            </v-card>
        </v-hover>
    </v-container>
</template>

<script>
    export default {
        name: "Interet",
        data: () => ({
            show: false,
        }),
        props:{
            text: String,
            title: String,
            img_interet: String
        },
        methods: {
            resolve_img_url: function (path) {
                let images = require.context('../assets/', false, /\.png$|\.jpg$/)
                return images("./"+path)
            },
            getWidth(){
                if( screen.width <= 760 ) {
                    return "320px";
                }
                else {
                    return "374px";
                }
            },
            getHeight(){
                if( screen.width <= 760 ) {
                    return "530px";
                }
                else {
                    return "450px";
                }
            }
        }
    }
</script>

<style scoped>
    #card{
        padding:0px;
    }
</style>