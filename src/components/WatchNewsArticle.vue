<template>
    <b-container fluid>
        <b-row no-gutters align-h="center">
            <b-col cols="9" md="11" class="mx-auto my-2">
                <b-img class="img center mx-auto" :src="article.articleImg"></b-img>
            </b-col>
            <b-col cols="12 mx-auto px-2">
                <p class="h2 p-1">{{article.title}}</p>
                <p class="bg-lightgray p-2">{{article.text}}</p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    // export default {
    //     name: 'watchNews',
        
    //     data: function() {
    //         return {
    //             article: '',
    //             ROOT_API: process.env.VUE_APP_ROOT_API
    //         }
    //     },

    //     methods: {

    //     },

    //     computed: {

    //     },

    //     created() {
    //         let id = this.$route.params.id;
    //         this.$store.dispatch('getWatchNewsArticleById', id).then(article => {
    //             this.article = article;
    //         })
    //     }
    // }
</script>

<style scoped>
/* .img {
    max-height: 25rem;
} 

@media(max-width: 800px) {
    .img {
    max-height: 15rem;
} 
} */
</style>

