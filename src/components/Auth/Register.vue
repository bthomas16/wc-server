<template>
    <b-container>
        <b-row>
            <div class="card-text mx-auto w-100"> 
                <b-alert show v-bind:variant="responseStyle" v-if="showAlert" class="py-1 py-md-0 my-1">{{responseMessage}} <em v-if="isRefreshPage" @click="reloadPage"> - Try Again</em></b-alert> 
                <b-form @submit.prevent="onSubmit">
                    <b-form-group id="email"
                        v-if="card == 1"
                        label="Email:"
                        label-for="Email"
                        class="mt-md-2"
                        description="We'll never share your email with anyone.">
                        <b-form-input id="email"
                                    type="email"
                                    v-model="form.email"
                                    required
                                    autocomplete="off"
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                    placeholder="Start with an email"
                                    @input="validateEmail(form.email)"
                                    >
                        </b-form-input>
                    </b-form-group>
                    <b-form-group id="password"
                        v-if="card == 1"
                        label="Password:"
                        label-for="password"
                        class="mt-md-3">
                        <b-form-input id="password"
                                    type="password"
                                    v-model="form.password"
                                    required
                                    autocomplete="off"
                                    placeholder="Create a password"
                                    @input="validatePassword(form.password)">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group id="names"
                        v-if="card == 2"
                        label="First Name:"
                        label-for="First Name">
                        <b-form-input id="firstName"
                                    type="text"
                                    v-model="form.firstName"
                                    required
                                    autocomplete="off"
                                    placeholder="First Name">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group id="credentials"
                        v-if="card == 2"
                        label="Last Name:"
                        label-for="lastName">
                        <b-form-input id="password"
                                    type="text"
                                    v-model="form.lastName"
                                    required
                                    autocomplete="off"
                                    placeholder="Last Name"
                                    >
                        </b-form-input>
                </b-form-group>
                <h6 class="red thin h7">{{passwordErrMsg}}</h6>
                <b-row align-v="center" class="my-md-2 pt-md-3">
                    <b-col cols="4">
                        <b-button variant="success" @click="card=2" :disabled="form.password.length < 4" v-if="card == 1">Continue</b-button>
                        <b-button variant="success" :disabled="!form.firstName || !form.lastName" type="submit" v-if="card == 2">Finish</b-button>
                    </b-col>
                    <b-col cols="8" class="right-align">
                        <p class="h8 m-1">Already a user? <span class="link nowrap" @click="toggleAuthChild">Login Here</span></p>
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
    name: 'register',
    data () {
        return {
            ROOT_API: process.env.VUE_APP_ROOT_API,
            form: {
                email: '',
                firstName: '',
                lastName: '',
                password: ''
            },
            card: 1,
            showAlert: false,
            responseMessage: '',
            responseStyle: 'light',
            isRefreshPage: false,
            showForm: true,
            passwordErrMsg: '',
            formValid: true
        }
    },
    methods: {
        onSubmit () 
        {
            this.showAlert = false;
            this.form.email.toLowerCase();
            this.$store.dispatch('register', this.form)
            .then((res) => {
                if(res.isSuccess) {
                    this.$store.dispatch('sendWelcomeEmail', this.form);
                    this.$router.push({path: '/profile'});
                }
                else {
                    this.showAlert = true;
                    this.responseMessage = res.message;
                    this.responseStyle = 'danger';
                    this.isRefreshPage = res.isRefreshPage;
                }
            }).catch(err => {
                this.showAlert = true;
                this.responseMessage = err.message;
                this.responseStyle = 'danger';
            })
        },

        toggleAuthChild ()
        {
            this.$emit('toggleAuthView')
        },

        validateEmail(email) 
        {
            // regex expression making sure email is in valid format
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(re.test(email)) {
                return true;
            }
            else {
                this.form.password = '';
                return re.test(email);
            }
        },

        validatePassword(password) 
        {
            if(password.length < 4) 
            {
                this.passwordErrMsg = 'Password must be at least 4 characters';
                return false;
            }
            else {
                this.passwordErrMsg = '';
                return true;
            }
        },

        validateNames(first, last) 
        {
            if(first.length && last.length) return true;
            else return false;
        },

        reloadPage() {
            location.reload();
        }

        // isDuplicateEmail(email)
        // {
        //     console.log('should check', email)
        //     axios.get('/api/user/isDuplicateEmail?email=' + email).then(res => {
        //         console.log(res)
        //     })
        // }
    }
}
</script>

<style fluid>
.form-control:focus {
    border: none;
    outline: none !important;
}

    #register-wrapper {
        padding:auto;
    }

    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
</style>