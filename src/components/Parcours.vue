<template>
    <div id="parcours">
        <div v-responsive.lg.xl>
            <v-timeline align-top>
                <EtapeParcours :description="items[0].description" :title="items[0].title" :icone="items[0].icon" date="Depuis le 09-2019"></EtapeParcours>
                <EtapeParcours :description="items[1].description" :title="items[1].title" :icone="items[1].icon" :date="items[1].date"></EtapeParcours>
                <EtapeParcours :description="items[2].description" :title="items[2].title" :icone="items[2].icon" :date="items[2].date"></EtapeParcours>
                <EtapeParcours :description="items[3].description" :title="items[3].title" :icone="items[3].icon" :date="items[3].date"></EtapeParcours>
                <EtapeParcours :description="items[4].description" :title="items[4].title" :icone="items[4].icon" :date="items[4].date"></EtapeParcours>
                <EtapeParcours :description="items[5].description" :title="items[5].title" :icone="items[5].icon" :date="items[5].date"></EtapeParcours>
            </v-timeline>
        </div>
        <div v-responsive.sm.xs v-for="(item, i) in items" :key="i">
            <MobileEtapeParcours :description="item.description" :title="item.title" :date="item.date"></MobileEtapeParcours>
        </div>
    </div>
</template>

<script>
    import EtapeParcours from "./EtapeParcours";
    import MobileEtapeParcours from "./MobileEtapeParcours";
    export default {
        name: "Parcours",
        components: {MobileEtapeParcours, EtapeParcours},
        data:() => ({
            items:[
                {
                    description: "Méthodes Informatiques Appliquées à la Gestion des Entreprises",
                    title: "Licence 3 MIAGE",
                    date:"09-2019",
                    icon:"mdi-school"
                },
                {
                    description:"Encadrement d'une salle informatique et aide aux étudiants 7H/semaine au sein de l'Université de Lille",
                    title:"Monitorat",
                    date:"09-2019 / 03-2020",
                    icon:"mdi-account-supervisor"
                },
                {
                    description:"CDD de 1 mois en qualité d'ingénieur développeur au sein de l'équipe Loki, spécialisée dans la recherche en interaction homme-machine",
                    title:"CDD au centre de recherche Inria",
                    date:"07-2019",
                    icon:"mdi-laptop"
                },
                {
                    description:"Stage de 3 mois au sein de l'équipe Loki, spécialisée dans la recherche en interaction homme-machine",
                    title:"Stage au centre de recherche Inria",
                    date:"04-2019 / 06-2019",
                    icon:"mdi-laptop"
                },
                {
                    description:"DUT Informatique à l'IUT A de l'Université de Lille",
                    title:"DUT Informatique",
                    date:"09-2017 / 06-2019",
                    icon:"mdi-school"
                },
                {
                    description:"Baccalauréat scientifique obtenu mention très bien au lycée Henri Wallon à Valenciennes",
                    title:"Baccalauréat Scientifique",
                    date:"2014-2017",
                    icon:"mdi-school"
                }
            ]
        })
    }
</script>

<style scoped>
    #parcours{
        padding-top: 7px;
    }
</style>