<template>
    <div id="accueil">
        <img id="logo" src="../assets/gabriel_pdp_2.png"><img>
        <h1>Bienvenue !</h1>
        <p id="present"> Je suis Gabriel, étudiant en <span class="keyword">informatique<br/> </span> et passionné de <span class="keyword">sport</span></p>
    </div>
</template>

<script>
    export default {
        name: "Accueil"
    }
</script>

<style scoped>
    #logo {
        width: 180px;
    }
    .keyword {
        color: forestgreen;
    }
    #present{
        color: gray;
        font-size: x-large;
    }
    #accueil {
        padding-left: 5%;
        padding-top: 7%;
    }
</style>