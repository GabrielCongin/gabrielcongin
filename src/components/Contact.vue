<template>
    <div id="contact">
        <div id="formulaire_contact">
           <v-form @submit.prevent="sendEmail">
                <v-text-field
                        :class="getClass()"
                    name="user_name"
                    v-model="name"
                    :rules="nameRules"
                    :counter="30"
                    label="Prénom et nom"
                    required
                    outlined
                    color="#212121"
                    full-width
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
                        color="#212121"
                >
                </v-text-field>
                <v-textarea
                        name="message"
                        label="Message"
                        required
                        outlined
                        color="#212121"
                ></v-textarea>
                <v-btn class="mr-4" type="submit" value="Send">Envoyer</v-btn>
            </v-form>
        </div>
        <div id="illustration" v-responsive.lg.xl>
            <v-img width="350px" src="../assets/avatar_croquis.jpg"></v-img>
        </div>
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
                        alert("Merci pour votre message!")
                    }, (error) => {
                        console.log('FAILED...', error);
                        alert("Une erreur est survenue! N'hésitez pas à me joindre directement par mail : gabriel.congin@gmail.com ou en cliquant sur l'icône dans le footer")
                    });
            },
            getClass(){
                if(screen.width>760){
                    return "mobile";
                }else{
                    return "mobile";
                }
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
        display: inline;
        float: left;
    }
    #illustration{
        padding-top: 7%;
        display: inline;
        padding-left: 14%;
        float: left;
    }
    .desktop{
        width:450px;
    }
    .mobile{
        width: 236px;
    }
</style>