<template>
    <div id="div" ref="myid">
        <img src="../assets/running.jpg" @click="test">
    </div>
</template>
<script>
    export default {
        name: "Test",
        mounted() {
                this.$refs["myid"].innerHTML = `<img src=${require("../assets/running.jpg")} @click="test">`;
        },
        methods:{
            test(){
                alert("hello");
            }
        }
    }
</script>

<style scoped>

</style>