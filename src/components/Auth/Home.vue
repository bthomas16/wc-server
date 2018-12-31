<template>
    <b-container fluid :class="env == 'development' ? 'devBackground' : 'background'">
        
        <!-- <p v-if="img1.src">LOADING</p> -->
        <b-row align-v="start" align-h="center" no-gutters class="p-0 pt-lg-3 pb-lg-2">
            <b-col cols="12" md="12" lg="6" xl="7" order="2" order-lg="1" class="mx-auto px-lg-0 px-xl-0">
                <featured-collection></featured-collection>
            </b-col> 
            <b-col cols="12" lg="6" xl="5" class="mx-auto p-0 px-lg-3 px-xl-4">
                <b-row align-h="center" no-gutters>
                    <b-col cols="12">
                        <b-card :img-src="ROOT_API + '/api/static-assets/watcheshomecardbg.jpg'" img-alt="Card image" class="p-0 card">
                            <b-row no-gutters align-h="center" align-v="center">
                                <b-col id="titleCard" class="bg-darkgray center t-0" cols="11" md="11">
                                    <p class="h2 white center underline">Watch SOC: </p>
                                    <p class="h4 white center">Manage your current, past & future <strong>Watch SOC</strong> </p>
                                </b-col>
                                <p v-if="isRegister" class="h4 my-0 left w-100">Register to<span class="nowrap left"> Manage your collection!</span></p>                            
                                <p v-if="!isRegister" class="h4 my-0 left w-100">Login to<span class="nowrap left"> Manage your collection!</span></p>                            
                                <app-register class="mt-2 mt-md-3" v-if="isRegister" v-on:toggleAuthView="toggleAuthParent"></app-register>
                                <app-login class="mt-2 mt-md-3" v-if="!isRegister" v-on:toggleAuthView="toggleAuthParent"></app-login>
                            </b-row>
                        </b-card>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        
    </b-container>
</template>

<script>
import Register from './Register.vue';
import Login from './Login.vue';

import FeaturedCollection from '../FeaturedCollection.vue';


export default {
    components: {
      appRegister: Register,
      appLogin: Login,
      featuredCollection: FeaturedCollection
    },
    data () {
        return {
            ROOT_API: process.env.VUE_APP_ROOT_API,
            selectedWatch: {},
            showLogin: false,
            env: process.env.NODE_ENV,
            isRegister: true
        }
    },
    methods: {
        toggleAuthParent: function() {
            return this.isRegister = !this.isRegister;
        },

        isValidToken() {
            return this.$store.state.isAuthorized;
        }
    }
}
</script>

<style scoped>

    #titleCard {
        position: absolute;
        margin-top: 6rem;
    }

    .background {
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/api/static-assets/tablebg.jpg");
        min-height: 100%;
        height: auto;
        width: 100%;
        padding: 0 !important;
        background-position: center;
        background-repeat:repeat;
        background-size: cover;
    }
    .devBackground {
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("http://localhost:8081/api/static-assets/tablebg.jpg");
        min-height: 100%;
        height: auto;
        width: 100%;
        padding: 0 !important;
        background-position: center;
        background-repeat:repeat;
        background-size: cover;
        /* position: relative; */
    }

/*  */

    #watch-collection {
        /* background: rgba(40,40,40,.2   ); */
        overflow-y: scroll;
    }


    .outline {
        -webkit-text-stroke: 1px black;
    }

    #brandLogo {
        max-height: 75px;
    }

    .form-control:focus {
        border: none;
        outline: none !important;
    }

    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .fade-enter-active,
    .fade-leave-active {
    transition-duration: 0.1s;
    transition-property: opacity;
    transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
    opacity: 0
    }

    @media(max-width: 995px){
        .card {
            border: none;
            border-radius: 0;
        }

        #titleCard {
            margin-top: 5rem;
        }
    }
        

    @media(max-width: 720px){
        .card, .card-img {
            box-shadow: none;
            border: none;
            border-radius: 0;
        }

        #titleCard {
            margin-top: 2.5rem;
        }
    }
</style>

<!-- b-form-1.vue -->

