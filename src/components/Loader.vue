<template>
   <b-row>
       <b-col>
           <b-img fluid src="/public/loading-spinner.gif"></b-img>
       </b-col>
   </b-row>
</template>


<script>
export default {
    name: 'loadingSpinner',
    data: function() {
        return {

        }
    },
    
    computed: {
        isLoading() {
            return this.$store.state.isLoading;
        }
    }
}
</script>

<style scoped>

</style>
