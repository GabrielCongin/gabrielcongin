<template>
    <div id="parcours">
        <v-timeline align-top>
            <EtapeParcours description="Méthodes Informatiques Appliquées à la Gestion des Entreprises"
                           title="Licence 3 MIAGE" icone="mdi-school"
                           date="Depuis 09-2019"></EtapeParcours>
            <EtapeParcours description="Encadrement d'une salle informatique et aide aux étudiants 7H/semaine
                                        au sein de l'Université de Lille"
                           title="Monitorat" icone="mdi-account-supervisor"
                           date="09-2019 / 03-2020"></EtapeParcours>
            <EtapeParcours description="CDD de 1 mois en qualité d'ingénieur développeur au sein de l'équipe Loki, spécialisée dans la recherche en interaction homme-machine"
                           title="CDD au centre de recherche Inria" icone="mdi-laptop"
                           date="07-2019"></EtapeParcours>
            <EtapeParcours description="Stage de 3 mois au sein de l'équipe Loki, spécialisée dans la recherche en interaction homme-machine"
                           title="Stage au centre de recherche Inria" icone="mdi-laptop"
                           date="04-2019 / 06-2019"></EtapeParcours>
            <EtapeParcours description="DUT Informatique à l'IUT A de l'Université de Lille"
                           title="DUT Informatique" icone="mdi-school"
                           date="09-2017 / 06-2010"></EtapeParcours>
            <EtapeParcours description="Baccalauréat scientifique obtenu mention très bien au lycée Henri Wallon à Valenciennes"
                           title="Baccalauréat Scientifique" icone="mdi-school"
                           date="2014-2017"></EtapeParcours>
        </v-timeline>
    </div>
</template>

<script>
    import EtapeParcours from "./EtapeParcours";
    export default {
        name: "Parcours",
        components: {EtapeParcours}
    }
</script>

<style scoped>
    #parcours{
        padding-top: 7px;
    }

</style>