<template>
    <div id="projets">
        <Article description="Se joue à deux, alignez 3 croix ou 3 ronds pour gagner" title="Jeu du Morpion" subtitle="Projet personnel" img_article="jeu_morpion.png" lien_article="/projets/morpion"></Article>
        <Article description="Se joue à deux, mangez toutes les pièces de votre adversaire" title="Jeu de Dame" subtitle="Projet personnel" img_article="jeu_dame.png" lien_article="/projets/dame"></Article>

    </div>
</template>

<script>
    import Article from "./Article";
    export default {
        name: "Projets",
        components: {Article}
    }
</script>

<style scoped>

</style>