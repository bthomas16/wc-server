<template>
    <b-container fluid>
        <b-row align-h="center" no-gutters>
            <b-col cols="auto">
                <b-carousel 
                    style="text-shadow: 1px 1px 2px #333;"
                    img-width="1024"
                    img-height="480"
                    background="lightgray"
                    :controls="removedWatchToSee.src.images.length > 1 ? true : false"
                    :indicators="removedWatchToSee.src.images.length > 1 ? true : false">
                    <b-carousel-slide v-for="image in removedWatchToSee.src.images" :key="image.order" >
                        <b-img slot="img" 
                        :src="image.src" alt="image slot" v-if="image" fluid>
                        </b-img>
                    </b-carousel-slide>
                </b-carousel>
            </b-col>
            <b-col cols="11" class="mt-2 mx-auto">
                <ul class="p-0 mx-auto">
                    <li v-if="removedWatchToSee.typeMoved">Watch removed reason:  <strong>{{removedWatchToSee.typeMoved}}</strong></li>
                    <li v-if="removedWatchToSee.value">Watch Value: <strong>${{removedWatchToSee.value}}</strong></li>
                    <li v-if="removedWatchToSee.receivedBy">New watch recipient: <strong>{{removedWatchToSee.receivedBy}}</strong></li>
                    <li v-if="removedWatchToSee.receivedInReturn">Received in return: <strong>{{removedWatchToSee.receivedInReturn}}</strong></li>
                </ul>   
            </b-col>

        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'removedWatchModal',
    props: ['removedWatchToSee']
}
</script>

<style scoped>

</style>

