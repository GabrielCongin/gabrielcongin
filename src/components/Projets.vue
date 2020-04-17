<template>
    <div id="projets">
        <div class="liste_projets">
            <Article description="Se joue à deux, alignez 3 croix ou 3 ronds pour gagner" title="Jeu du Morpion" subtitle="Projet personnel 03-2020" img_article="jeu_morpion.png" lien_article="/projets/morpion"></Article>
        </div>
        <div class="liste_projets">
            <Article description="Se joue à deux, mangez toutes les pièces de votre adversaire" title="Jeu de Dame" subtitle="Projet personnel 03-2020" img_article="jeu_dame.png" lien_article="/projets/dame"></Article>
        </div>
        <div class="liste_projets">
            <Article description="Se joue seul, retrouvez toutes les paires de même valeur et de même couleur
                                       (les carreaux avec les coeurs, les trèfles avec les piques)" title="Jeu des Paires" subtitle="Projet personnel 02-2020" img_article="jeuCarte.png" lien_article="/projets/jeuPaires"></Article>
        </div>
        <div class="liste_projets">
            <Article description="Démo d'un logiciel enregistrant les données brutes du clavier MIDI et des capteurs du gant et produisant avec ces derniers un replay sur partition (entièrement faite manuellement) (Voir description vidéo)"
                     title="Technologie de détection des doigtés" subtitle="Projet de stage 04-2019 / 07-2019" img_article="pianopiezos.jpg" lien_internet="https://www.youtube.com/watch?v=mSampL4a3IA&feature=youtu.be"
                     newPage="_blank"></Article>
        </div>
        <div class="liste_projets">
            <Article description="Création d'un programme permettant l'affichage de fichiers ply" title="Modélisation fichiers ply" subtitle="Projet universitaire 10-2018" img_article="modelisation_ply.png" lien_internet="https://www.youtube.com/watch?v=3Qf3Tk4DkuM"
                     newPage="_blank"></Article>
        </div>
        <div class="liste_projets">
            <Article description="Création d'un logiciel permettant d'obtenir la nuance de gris correspondant à une couleur." title="Convertisseur de gris" subtitle="Projet universitaire 05-2018" img_article="grey_converter.png" lien_internet="https://www.youtube.com/watch?v=brMQeYCLLNw"
                     newPage="_blank"></Article>
        </div>
        <div class="liste_projets">
            <Article description="Tous les TPs de Conceptions Orientée Objet" title="Conception Orientée Objet" subtitle="Projet universitaire 09-2019 / 12-2019" img_article="miage_logo.jpg" lien_internet="https://github.com/GabrielCongin/COO-TPs"
                     newPage="_blank"></Article>
        </div>
        <div class="liste_projets">
            <Article description="Tous les TPs de Base de Données" title="Base de Données" subtitle="Projet universitaire 01-2020 / 03-2020" img_article="miage_logo.jpg" lien_internet="https://github.com/GabrielCongin/BaseDeDonnees_TPs"
                     newPage="_blank"></Article>
        </div>
        <div class="liste_projets">
            <Article description="Tous les TPs de Haskell" title="Programmation fonctionnelle" subtitle="Projet universitaire 01-2020 / 03-2020" img_article="miage_logo.jpg" lien_internet="https://github.com/GabrielCongin/Haskell_TPs"
                     newPage="_blank"></Article>
        </div>
        <Footer id="footer"/>
    </div>
</template>

<script>
    import Article from "./Article";
    import Footer from "./Footer";
    export default {
        name: "Projets",
        components: {Footer, Article}
    }
</script>

<style scoped>
    .liste_projets{
        display: inline;
        float: left;
    }
    #projets{
        padding-top: 10px;
        padding-left: 2%;
    }
    @media all and (min-width: 761px){
        #projets{
            height: 1062px;
            background-image: url("../assets/background/design.png");
            background-position: right;
        }
        #footer{
            position: marker;
        }
    }
    @media all and (max-width: 1280px){
        #footer{
            padding-top: 990px;
        }
    }
    @media all and (min-width: 1281px){
        #footer{
            padding-top: 975px;
        }
    }
    @media all and (max-width: 760px){
        #footer{
            display: none;
        }
    }

</style>