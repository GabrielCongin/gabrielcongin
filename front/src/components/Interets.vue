<template>
    <div id="interets">
        <div class="liste_interets">
            <Interet text="Je ne me rappelle pas avoir vécu sans faire de sport, cela fait maintenant 8 ans que je fais
                            du handball, 2 ans que je fais du badminton, 2 ans que je fais de la musculation et récemment,
                            je me suis mis à la boxe française.
                            Cela me permet de toujours avoir des objectifs. Le sport est à la fois un refuge et un moyen
                            pour moi de me surpasser."
                     title="Grand amateur de sport" img_interet="running.jpg"></Interet>
        </div>
        <div class="liste_interets">
            <Interet text="Ayant une famille de musicien, j'ai toujours baigné dans la musique. J'ai pratiqué du cor d'Harmonie
                            pendant quelques années et plus récemment, j'apprends le piano en autodidacte. Quand l'envie me prend,
                            je poste des vidéos sur ma chaîne YouTube."
                     title="Musicien de temps à autre" img_interet="piano.jpg"></Interet>
        </div>
        <div class="liste_interets">
            <Interet text="Des conférences aux articles en passant par des vidéos, la vulgarisation scientifique, notamment l'astronomie me passionne depuis
                            toujours. Quoi de plus passionnant qu'une nuit étoilée lorsque l'on possède un téléscope ?"
                     title="Féru de vulgarisation scientifique" img_interet="astronomie.jpg"></Interet>
        </div>
        <div class="liste_interets">
            <Interet text="Vous le voyiez venir ? J'ai découvert la programmation assez tard, à la fin du lycée, et je me suis
                           découvert une véritable passion pour celle-ci. Bien que ce concept soit large, pouvoir
                           créer quelque chose à partir de lignes de code est très satisfaisant."
                     title="Passionnée de programmation" img_interet="computer.jpg"></Interet>
        </div>
    </div>
</template>

<script>
    import Interet from "./Interet";
    export default {
        name: "Interets",
        components: {Interet}
    }
</script>

<style scoped>
    .liste_interets{
        display: inline;
        float: left;
    }
    #interets{
        padding-left: 22px;
    }

</style>