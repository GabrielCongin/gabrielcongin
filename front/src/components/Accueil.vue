<template>
    <div id="accueil">
        <img id="logo" src="../assets/gabriel_pdp_2.png"><img>
        <h1 id="welcome">Bienvenue !</h1>
        <p id="present"> Je suis Gabriel,<br/> Étudiant en <span class="keyword">Informatique </span><v-icon>mdi-laptop</v-icon><br/>& Passionné de <span class="keyword">Sport </span><v-icon>mdi-dumbbell</v-icon></p>
    </div>
</template>

<script>
    export default {
        name: "Accueil"
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
        color: forestgreen;
        font-weight: bold;
    }
    #present{
        color: gray;
        font-size: 27px;
    }
    #accueil {
        padding-left: 5%;
        padding-top: 7%;
    }
</style>