<template>
    <b-container>     
        <b-row>
            <div class="card-text mx-auto w-100"> 
                <b-alert show v-bind:variant="responseStyle" v-if="showAlert" class="p-1 my-md-0">{{responseMessage}}</b-alert> 
                <b-form @submit.prevent="onSubmit">
                        <b-form-group id="exampleInputGroup1"
                        label="Email:"
                        label-for="email"
                        class="mt-md-2"
                        description="We still aren't sharing your email with anyone!">
                            <b-form-input id="email"
                                        type="email"
                                        v-model="form.email"
                                        required
                                        autocomplete="off"
                                        placeholder="Enter email">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                                        label="Password:"
                                        label-for="password"
                                        class="mt-md-3">
                            <b-form-input id="password"
                                        type="password"
                                        v-model="form.password"
                                        required
                                        autocomplete="off"
                                        placeholder="Password">
                            </b-form-input>
                        </b-form-group>
                        <b-row align-v="center" class="my-md-2 pt-md-3">
                            <b-col cols="4">
                                <b-button type="submit" variant="success" :disabled="!form.email || !form.password">Submit</b-button>
                            </b-col>
                            <b-col cols="8" class="right-align">
                                <p class="h8 m-1">Not a user? <span class="link nowrap" @click="toggleAuthChild">Register Here</span></p>
                            </b-col>
                        </b-row>
                </b-form>
            </div>
        </b-row>   
    </b-container>
</template>

<script>
    import axios from 'axios';
    export default {
    data () {
        return {
            form: 
            {
                email: '',
                password: ''
            },
                showAlert: false,
                responseMessage: 'Login Here!',
                responseStyle: 'light'
        }
    },
    methods: {
        onSubmit () 
        {
            this.showAlert = false;
            console.log('submitting', this.form)
            this.$store.dispatch('login', this.form).then((res) => {
                if(res.isSuccess) {
                    this.$router.push({ path: '/profile'}); 
                    this.showAlert = false;
                }   
                else {
                    this.showAlert = true;
                    this.responseStyle = 'danger';
                    this.responseMessage = res.message
                }
            })
        },

        toggleAuthChild ()
        {
            this.$emit('toggleAuthView')
        }
    }
}
</script>

<style scoped>
  
</style>