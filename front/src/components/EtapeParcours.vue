<template>
        <v-timeline-item id="etape" :icon="icone" color="black" fill-dot>
            <span slot="opposite">{{date}}</span>
            <v-card color="grey">
                <v-card-title>{{title}}</v-card-title>
                <v-card-text id="test" class="white text--primary">{{description}}</v-card-text>
            </v-card>
        </v-timeline-item>
</template>

<script>
    export default {
        name: "EtapeParcours",
        props:{
            description: String,
            title: String,
            date: String,
            icone: String
        }
    }
</script>

<style scoped>
    #etape{
        padding-left: 14%;
        padding-right: 14%;
    }
    #test{
        padding-top: 15px;
    }
</style>