<template>
    <div id="articles">
        <div class="liste_articles">
            <Article description="4 exercices pour travailler biceps, triceps" title="Programme de musculation" subtitle="Musculation des bras" img_article="article_muscu.png"></Article>
        </div>
        <div class="liste_articles">
            <Article description="4 exercices pour travailler le dos" title="Programme de musculation" subtitle="Musculation du dos" img_article="article_muscu.png"></Article>
        </div>
    </div>
</template>

<script>
    import Article from "./Article";
    export default {
        name: "Articles",
        components: {Article}
    }
</script>

<style scoped>
    .liste_articles{
        display: inline;
        float: left;
    }
    #articles{
        padding-left: 22px;
    }

</style>