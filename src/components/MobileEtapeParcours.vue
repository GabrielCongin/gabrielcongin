<template>
    <div id="etapeParcours">
        <p style="color:gray;"> <span style="color:#212121;padding-bottom:5px;font-size: medium;font-weight: bold">{{title}}</span> / {{date}}</p>
        <p>{{description}}</p>
        <v-divider></v-divider>
    </div>
</template>

<script>
    export default {
        name: "MobileEtapeParcours",
        props:{
            date: String,
            title: String,
            description: String
        }
    }
</script>

<style scoped>
    #etapeParcours{
        padding-top: 10px;
        padding-left: 10px;
    }
</style>