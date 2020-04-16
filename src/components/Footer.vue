<template>
    <footer>
        <p id="footer">© 2020 Gabriel Congin with VueJS
            <v-icon @click="youtube">mdi-youtube</v-icon>
            <v-icon @click="git">mdi-github</v-icon>
            <v-icon @click="instagram">mdi-instagram</v-icon>
            <v-icon @click="facebook">mdi-facebook</v-icon>
            <v-icon @click="linkedin">mdi-linkedin</v-icon>
            <v-icon @click="gmail">mdi-gmail</v-icon>
            <br/>
            Graphismes par Manon Congin et Antoine Neveux
        </p>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
        methods:{
            youtube(){
                window.open("https://www.youtube.com/channel/UCUGoPLrsoJrCtX_WZgs1JDw");
            },
            git(){
                window.open("https://github.com/GabrielCongin");
            },
            instagram(){
                window.open("https://www.instagram.com/gabriel_cngn/");
            },
            facebook(){
                window.open("https://www.facebook.com/gabriel.congin");
            },
            linkedin(){
                window.open("https://www.linkedin.com/in/gabriel-congin-544120151/");
            },
            gmail(){
                window.open("mailto:gabriel.congin@gmail.com")
            }
        }
    }
</script>

<style scoped>
    #footer{
        font-size: 10px;
        text-align: center;
    }
    footer{
        padding-top: 70px;
    }

</style>