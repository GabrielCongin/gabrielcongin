<template>
    <div id="projets">
        <div class="liste_projets">
            <Article description="Se joue à deux, alignez 3 croix ou 3 ronds pour gagner" title="Jeu du Morpion" subtitle="Projet personnel" img_article="jeu_morpion.png" lien_article="/projets/morpion"></Article>
        </div>
        <div class="liste_projets">
            <Article description="Se joue à deux, mangez toutes les pièces de votre adversaire" title="Jeu de Dame" subtitle="Projet personnel" img_article="jeu_dame.png" lien_article="/projets/dame"></Article>
        </div>
        <div class="liste_projets">
            <Article description="Démo d'un logiciel enregistrant les données brutes du clavier MIDI et des capteurs du gant et produisant avec ces derniers un replay sur partition (entièrement faite manuellement) (Voir description vidéo)"
                    title="Technologie de détection des doigtés" subtitle="Projet de stage" img_article="pianopiezos.jpg" lien_internet="https://www.youtube.com/watch?v=mSampL4a3IA&feature=youtu.be"></Article>
        </div>
        <div class="liste_projets">
            <Article description="Tous les TPs de Conceptions Orientée Objet" title="Conception Orientée Objet" subtitle="Projet universitaire" img_article="miage_logo.jpg" lien_internet="https://github.com/GabrielCongin/COO-TPs"></Article>
        </div>
        <div class="liste_projets">
            <Article description="Tous les TPs de Base de Données" title="Base de Données" subtitle="Projet universitaire" img_article="miage_logo.jpg" lien_internet="https://github.com/GabrielCongin/BaseDeDonnees_TPs"></Article>
        </div>
        <div class="liste_projets">
            <Article description="Tous les TPs de Haskell" title="Programmation fonctionnelle" subtitle="Projet universitaire" img_article="miage_logo.jpg" lien_internet="https://github.com/GabrielCongin/Haskell_TPs"></Article>
        </div>
        <div class="liste_projets">
            <Article description="Création d'un programme permettant l'affichage de fichiers ply" title="Modélisation fichiers ply" subtitle="Projet universitaire" img_article="modelisation_ply.png" lien_internet="https://www.youtube.com/watch?v=3Qf3Tk4DkuM"></Article>
        </div>
        <div class="liste_projets">
            <Article description="Création d'un logiciel permettant d'obtenir la nuance de gris correspondant à une couleur." title="Convertisseur de gris" subtitle="Projet universitaire" img_article="grey_converter.png" lien_internet="https://www.youtube.com/watch?v=brMQeYCLLNw"></Article>
        </div>
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
    .liste_projets{
        display: inline;
        float: left;
    }
    #projets{
        padding-left: 22px;
    }

</style>