<template>
    <div id="formulaire_contact">
       <form @submit.prevent="sendEmail">
            <v-text-field
                name="user_name"
                v-model="name"
                :rules="nameRules"
                :counter="30"
                label="Prénom et nom"
                required
                outlined
                color="green"
            >
            </v-text-field>
            <v-text-field
                    name="user_email"
                    v-model="email"
                    :rules="emailRules"
                    :counter="70"
                    label="Email"
                    required
                    outlined
                    color="green"
            >
            </v-text-field>
            <v-textarea
                    name="message"
                    label="Message"
                    required
                    outlined
                    color="green"
            ></v-textarea>
            <v-btn class="mr-4" type="submit" value="Send">Envoyer</v-btn>
        </form>
    </div>
</template>

<script>
    import emailjs from 'emailjs-com';
    export default {
        name: "Contact",
        methods: {
            sendEmail: (e) => {
                emailjs.sendForm('gmail', 'template_WrolnKjg', e.target, 'user_kPj7i6q51Puft0vl0oma2')
                    .then((result) => {
                        console.log('SUCCESS!', result.status, result.text);
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
            }
        },
        data: () => ({
            name: '',
            nameRules: [
                v => !!v || 'Veuillez saisir votre prénom et nom',
                v => (v && v.length <= 30) || 'Plus de 30 caractères',
            ],
            email: '',
            emailRules: [
                v => !!v || 'Veuillez saisir votre e-mail',
                v => /.+@.+\..+/.test(v) || 'Votre e-mail doit être valide',
            ]
        })
    }
</script>

<style scoped>
    #formulaire_contact{
        padding-left: 5%;
        padding-top: 5%;
        padding-right: 55%;
    }
</style>