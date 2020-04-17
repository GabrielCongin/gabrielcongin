<template>
        <div id="accueil">
            <div id="message">
                <img id="logo" src="../assets/gabriel_pdp_2.png"><img>
                <h1 id="welcome">Bienvenue !</h1>
                <p id="present"> Je suis Gabriel,<br/> Étudiant en <span class="keyword">Informatique </span><v-icon>mdi-laptop</v-icon><br/>& Passionné de <span class="keyword">Sport </span><v-icon>mdi-dumbbell</v-icon></p>
            </div>
            <div id="illustration" v-responsive.lg.xl>
                <v-img id="perso" src="../assets/background/perso.png"></v-img>
            </div>
            <Footer id="footer"/>
        </div>
</template>

<script>
    import Footer from "./Footer";
    export default {
        name: "Accueil",
        components: {Footer}
    }
</script>

<style scoped>
    #welcome{
        font-size: 42px;
    }
    #logo {
        width: 180px;
    }
    .keyword {
        color: #212121;
        font-weight: bold;
    }
    #present{
        color: grey;
        font-size: 27px;
    }
    #accueil {
        padding-left: 5%;
        padding-top: 4%;
    }
    #message{
        padding-top: 3%;
    }
    #message,#illustration{
        float:left;
        display: inline;
    }
    #illustration{
        padding-top: 1%;
        padding-left: 25%;
    }
    @media all and (min-width: 761px) and (max-width: 1280px) {
        #perso{
            width:300px;
        }
        #accueil{
            height: 623px;
            background-image: url("../assets/background/design.png");
            background-position: right;
        }
        #footer{
            position: absolute;
            padding-top: 518px;
            padding-left: 36%;
        }
    }
    @media all and (min-width: 1281px){
        #perso{
            width:300px;
        }
        #illustration{
            padding-left: 34%;
        }
        #accueil{
            height: 720px;
            background-image: url("../assets/background/design.png");
            background-position: right;
        }
        #footer{
            position: absolute;
            padding-top: 600px;
            padding-left: 36%;
        }
    }
    @media all and (max-width: 760px){
        #footer{
            display: none;
        }
    }
</style>