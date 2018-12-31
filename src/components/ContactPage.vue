<template>
    <b-container fluid :class="env == 'development' ? 'devBackground' : 'background'" class="p-0 m-0">
        <b-row no-gutters align-v="center">
            <b-col id="titleCard" class="bg-lightgray mx-auto mt-3 mt-md-4 p-1" cols="11" md="6">
                <p class="h2 white center">Watch Collecton</p>
                <p class="h4 white center">Manage your current, past and future <strong>Watch Collection</strong> </p>
            </b-col>
            <b-col cols="11" md="8" class="mx-auto mt-3 mt-md-4 p-0">
                <b-card>
                    <div slot="header">Contact Us!</div>
                    <b-row no-gutters >
                        <p v-if="showResMessage" :class="isResSuccess ? 'bg-green' : 'bg-red'" class="p-1 w-100 white center my-0">{{resMessage}}</p>
                        <b-form @submit.prevent="submit" class="w-100">
                            <b-col cols="12" class="mt-2 p-0">
                                <em>We love hearing from you!</em>
                                <p class="mt-2 mb-0">Your email here:</p>
                                <b-col cols="12" md="8" class="p-0">
                                    <b-input-group>
                                        <b-input type="email" class="w-100 p-2 border" placeholder="testemail@gmail.com" v-model="form.emailTo"/>
                                    </b-input-group>
                                </b-col>
                                <p class="mt-3 mb-0">Your message here:</p>
                                <b-input-group cols="12" class="p-0">
                                    <textarea placeholder="I love using Watch SOC because..." class="border w-100 p-2 mt-0" name="contactMessage" rows="5" v-model="form.messageBody"></textarea>
                                </b-input-group>
                            </b-col>
                            <b-col cols="12" class="mt-2">
                                <b-btn type="submit" variant="primary" class="right" :disabled="!form.emailTol && !form.messageBody">Submit</b-btn>
                            </b-col>
                        </b-form>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>


<script>
export default {
    name: 'contactPage',
    data: function() {
        return {
            showResMessage: false,
            isResSuccess: false,
            env: process.env.NODE_ENV,
            resMessage: '',
            form: {
                emailTo: '',
                messageBody: ''
            }
        }
    },

    methods: {
        submit() {
            this.$store.dispatch('contacUsEmail', this.form).then(res => {
                this.showResMessage = true;
                this.isResSuccess = res.isSuccess;
                this.resMessage = res.message;
            }).catch((err) => {     
                console.log(err);
                this.showResMessage = true;
                this.isResSuccess = res.isSuccess;
                this.resMessage = res.message;
            })
        }
    }
}
</script>

<style scoped>
    .background {
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/api/static-assets/tablebg.jpg");
        min-height: 100vh;
        width: 100%;
        background-position: center;
        background-repeat:repeat;
        background-size: cover;
    }
    .devBackground {
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("http://localhost:8081/api/static-assets/tablebg.jpg");
        min-height: 100vh;
        width: 100%;
        background-position: center;
        background-repeat:repeat;
        background-size: cover;
        /* position: relative; */
    }

    #titleCard {
        border-radius: .25rem;
    }
</style>
