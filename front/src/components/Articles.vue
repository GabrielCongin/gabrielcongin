<template>
    <div id="articles">
        <Article description="4 exercices pour travailler biceps, triceps" title="Programme de musculation" subtitle="Musculation des bras" img_article="article_muscu.png"></Article>
        <Article description="4 exercices pour travailler le dos" title="Programme de musculation" subtitle="Musculation du dos" img_article="article_muscu.png"></Article>
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

</style>