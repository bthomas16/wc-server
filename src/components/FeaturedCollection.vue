
<template>
    <b-container fluid>
        <b-row no-gutters>
            <p class="bg-lightgray p-1 white h3 m-h1 nowrap w-100"><strong>Featured Collection</strong></p>
            <b-col cols="12">
                <b-row no-gutters>
                    <b-col cols="6" md="4" v-for="watch in FeaturedWatches" :key="watch.id" class="pointer px-1 watchCard"  @click="selectWatch(watch)">
                        <b-row align-v="start" align-h="end" class="mb-3 bg-white" no-gutters>
                            <b-col cols="12" class="border p-1 p-lg-3 bg-white watchImgWrapper center">
                                <b-img
                                @click="selectWatch(watch)"
                                :src="watch.src.images[0].src" 
                                class="watchImg">
                                </b-img>
                            </b-col>
                            <b-col cols="12" class="mx-auto p-1 bg-white-opaque">
                                <p class="my-0 h4 m-h2"><strong>{{watch.brand}}</strong> </p>
                                <p class="watchName my-0">{{watch.name}}</p>
                            </b-col>
                            <b-col cols="12 center bg-white-opaque my-0 pt-1 watchLogoWrapper">
                                <b-img id="brandLogo" :src="ROOT_API + watch.logoSrc_lg" class="watchLogo mx-auto p-1 p-md-2 p-lg-3"></b-img>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>

        <b-modal :title="selectedWatch.name" ref="seeFeaturedWatchModal">
            <app-see-more :selectedWatch="selectedWatch"></app-see-more>
            <div slot="modal-footer" class="w-100">
                <b-btn v-if="selectedWatch.isFeaturedWatch" variant="info" target="_blank" :href="selectedWatch.siteLink">
                    Learn More
                </b-btn>
                <b-btn size="" class="float-right" variant="primary" @click="closeFeaturedWatchModel">
                    OK
                </b-btn>
            </div>
        </b-modal>

    </b-container>
</template>

<script>
    import SeeMore from './Profile/Collection/Modals/SeeMoreModal.vue';
    const ROOT_API = process.env.VUE_APP_ROOT_API;
    export default {

        
        name: 'featuredCollection',
        components: {
            appSeeMore: SeeMore,
        },

        data () {
            return {
                selectedWatch: {},
                ROOT_API: ROOT_API,
                FeaturedWatches: [
                    {
                        id: 1,
                        src: {images: [{src: ROOT_API + '/api/static-assets/oc-featured.jpg', order:1} ] },
                        brand: 'Ocean Crawler',
                        siteLink: 'https://www.oceancrawler.com/',
                        name: 'Champion Diver',
                        // logoSrc: '/api/static-assets/oc-logo.png',
                        logoSrc_lg: '/api/static-assets/oc-logo_lg.png',
                        isFeaturedWatch: true
                    },
                    {
                        id: 2,
                        src: {images: [{src: ROOT_API + '/api/static-assets/aragon-featured.jpg', order:1} ] },
                        brand: 'Aragon',
                        siteLink: 'https://www.aragonwatch.com/',
                        name: 'Aragon Virtuoso',
                        // logoSrc: '/api/static-assets/aragon.jpg',
                        logoSrc_lg: '/api/static-assets/aragon_lg.jpg',
                        isFeaturedWatch: true
                    },
                    {
                        id: 3,
                        src: {images: [{src: ROOT_API + '/api/static-assets/ch-ward-featured.jpg', order:1} ] },
                        brand: 'Christopher Ward',
                        siteLink: 'https://www.christopherward.com/',
                        name: 'C60 Trident Pro',
                        // logoSrc: '/api/static-assets/fortuna_lg.png',
                        logoSrc_lg: '/api/static-assets/ch-ward.png',
                        isFeaturedWatch: true
                    },
                    {
                        id: 4,
                        src: {images: [{src: ROOT_API + '/api/static-assets/zelos-featured.jpg', order:1} ] },
                        brand: 'Zelos',
                        siteLink: 'https://zeloswatches.com/',
                        name: 'Hammerhead',
                        // logoSrc: '/api/static-assets/zelos.png',
                        logoSrc_lg: '/api/static-assets/zelos_lg.png',
                        isFeaturedWatch: true
                    },
                    {
                        id: 5,
                        src: {images: [{src: ROOT_API + '/api/static-assets/tcm-featured.jpg', order:1} ] },
                        brand: 'Terra Cielo Mare',
                        siteLink: 'https://www.terracielomare.com/',
                        name: 'Orienteering BP',
                        // logoSrc: '/api/static-assets/tcm.png',
                        logoSrc_lg: '/api/static-assets/tcm_lg.png',
                        isFeaturedWatch: true
                    },
                    {
                        id: 6,
                        src: {images: [{src: ROOT_API + '/api/static-assets/tcm-white-featured.jpg', order:1} ] },
                        brand: 'Terra Cielo Mare',
                        siteLink: 'https://www.terracielomare.com/',
                        name: 'Orienteering El Alamein',
                        // logoSrc: '/api/static-assets/tcm.png',
                        logoSrc_lg: '/api/static-assets/tcm_lg.png',
                        isFeaturedWatch: true
                    }
                ]
            }
        },

        methods: {
            selectWatch(watch) {
                this.selectedWatch = watch;
                this.$refs.seeFeaturedWatchModal.show();
            },

            closeFeaturedWatchModel() {
                this.$refs.seeFeaturedWatchModal.hide()
            }
        },
    }
</script>

<style scoped>
    .watchName {
        font-size: 1vw;
    }

    .watchCard {
        height: 19rem !important;
    }
    
    .watchImgWrapper {
        width: 100%;
        height: 10.65rem;
        
    }

    .watchImg {
        width: auto;
        max-width: 100%;
        height: 100%;
        background-color: white;
    }

    .watchLogoWrapper {
        width: 100%;
        height: 4.75rem;
        background-color:#708090; 
    }

    .watchLogo {
        width: auto;
        height: 100%;
        
    }

    @media(max-width: 1000px) {

        .watchName {
            font-size: 1.5vw;
        }

        .watchCard {
        height: 19.5rem !important;
    }

        .watchImgWrapper {
        width: 100%;
        height: 11rem;
        
    }

    .watchImg {
        width: auto;
        max-width: 100%;
        height: 100%;
    }
    
    .watchLogoWrapper {
        height: 3.5rem;
        padding: .75rem;
    }

    .watchLogo {
            margin-top: .25rem;
        }
    }

    @media(max-width: 625px) {

        .watchCard {
        height: 18.5rem !important;
        }

        .watchName {
            font-size: 3vw;
        }
    }

    @media(max-width: 525px) {
        .watchCard {
            height: 17.75rem !important;
        }
    }
    
</style>