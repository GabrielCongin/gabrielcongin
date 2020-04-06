<template>
        <v-timeline-item id="etape" :icon="icone" color="green">
            <span slot="opposite">{{date}}</span>
            <v-card>
                <v-card-title>{{title}}</v-card-title>
                <v-card-text>{{description}}</v-card-text>
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
</style>