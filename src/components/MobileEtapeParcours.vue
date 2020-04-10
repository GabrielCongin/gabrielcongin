<template>
    <div id="etapeParcours">
        <div id="date">
            <p>{{date}}</p>
            <p>{{duree}}</p>
        </div>
        <div id="content">
            <h4 style="color:#212121;padding-bottom: 5px;">{{title}}</h4>
            <p>{{description}}</p>
        </div>
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
    #date{
        display: inline;
        float: left;
        width: 100px;
    }
    #content{
        display: inline;
        float: left;
    }

</style>