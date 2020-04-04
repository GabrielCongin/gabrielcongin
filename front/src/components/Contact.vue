<template>
    <div id="formulaire_contact">
        <v-form>
            <v-text-field
                v-model="name"
                label="Prénom et nom"
                required
            >
            </v-text-field>
            <v-text-field
                    v-model="email"
                    label="Email"
                    required
            >
            </v-text-field>
            <v-textarea
                    label="Message"
                    required
            ></v-textarea>
        </v-form>
    </div>
</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped>

</style>