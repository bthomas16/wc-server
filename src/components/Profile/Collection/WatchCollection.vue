<template>
    <b-container fluid>
        <draggable  v-model="Collection" @start="startDrag" @end="endDrag" class="py-2" :options="addWatchDragOptions">
            <transition-group name="swap-list">
                <b-col :cols="smSizeCard" :md="mdSizeCard" class="dropdzone left p-half" v-for="watch in Collection" :key="watch.id" :id="watch.id">
                    <b-row align-v="start" align-h="around" class="watch mb-1" :class="drag && (draggingId  != watch.id) ? 'bg-light-green' : ''" no-gutters>
                        <watch-flags 
                            :watch="watch" 
                            :isShowFlags="isShowFlags" 
                            :isShowEditFlags="isShowEditFlags" 
                            :isManagingCollection="isManagingCollection"
                            v-on:editWatch="editWatch"
                            v-on:removeWatchModal="removeWatchModal"
                            v-on:removedWatchModal="removedWatchModal">
                        </watch-flags>

                        <!-- // WATCH // -->
                        <b-col cols="12" class="watch-wrapper order-1 box-shadow p-0"> 
                            <b-row class="center" align-v="center" align-h="center" no-gutters>
                                <!-- <b-col cols="12" xl="12" class="mx-auto p-xl-1 watchImgWrapper" >
                                    
                                </b-col>  -->
                                <b-col cols="12" class="center" :class="(currentCardSize == 'sm') ? 'watchImgWrapper_Sm' : (currentCardSize == 'md') ? 'watchImgWrapper_Md' : (currentCardSize == 'lg') ? 'watchImgWrapper_Lg' : 'watchImgWrapper_Sm'">
                                        <b-img v-if="!isViewingPreviousWatches" :src="isFavoriteWatch(watch.id) ? fullHeart : emptyHeart" 
                                        class="pointer right absolute t-0 r0 right-align r-0 m-0" :class="currentCardSize == 'sm' ? 'smallHeartIcon' : 'heartIcon'"
                                        @click="favoriteToggle(watch.id)">
                                        </b-img>
                                        <b-img  
                                        v-if="watch.src.images[0]"
                                        @click="isViewingPreviousWatches ?  removedWatchModal(watch) : selectWatch(watch)"
                                        :src="watch.src.images[0].src"
                                        class="watchImg pointer p-xl-1 mx-auto center">
                                    </b-img>
                                </b-col>
                            </b-row>
                        </b-col>

                    </b-row>
                </b-col>
            </transition-group>                
        </draggable>  

        <b-modal 
            id="remove-watch-modal"
            ref="removeWatchModal"
            size="lg">
            <b-row slot="modal-title" no-gutters v-if="watchToRemove">Removing &nbsp; <strong>{{ titleCase(watchToRemove.name)}}</strong></b-row>
            <div slot="modal-header-close" class="w-100 m-h2 mt-2 mt-md-1" @click="resetReasonsWatchMoved">X</div>
            <remove-watch-modal :watchToRemove="watchToRemove" :reasonsWatchMoved="reasonsWatchMoved"></remove-watch-modal>
            <b-row slot="modal-footer" class="p-2" no-gutters>
                <button class="btn btn-warning white mx-2" variant="warning" :disabled="reasonsWatchMoved.typeMoved == null" @click="submitRemoveWatchForm">Remove Watch from Collection</button>
            </b-row>
        </b-modal>

        <b-modal 
            id="removed-watch-modal"
            ref="removedWatchModal"
            size="lg" lazy>
            <b-row slot="modal-title" no-gutters v-if="removedWatchToSee"><span class="gray">Removed</span>   <strong> &nbsp;{{ titleCase(removedWatchToSee.name)}}</strong></b-row>
            <div slot="modal-header-close" class="w-100 m-h2 mt-2 mt-md-1">X</div>
             <removed-watch-modal :removedWatchToSee="removedWatchToSee"></removed-watch-modal>
        </b-modal>
    </b-container>
</template>

<script>
import axios from 'axios';
import draggable from 'vuedraggable';
import RemoveWatchModal from './Modals/RemoveWatchModal.vue';
import SeeRemovedWatchModal from './Modals/SeeRemovedWatchModal.vue';
import WatchFlags from './WatchFlags.vue';

export default {
    name: 'watchCollection',
    components: {
        draggable,
        removedWatchModal: SeeRemovedWatchModal,
        removeWatchModal: RemoveWatchModal,
        watchFlags: WatchFlags
    },

    data () {
        return {
            addWatchDragOptions: {
                dropzoneSelector: '.dropzone',
                draggableSelector: '.watch',
                showDropzoneAreas: true,
            },
            drag: false,
            emptyHeart: process.env.VUE_APP_ROOT_API + "/api/static-assets/empty-heart.png",
            fullHeart: process.env.VUE_APP_ROOT_API + "/api/static-assets/full-heart.png",
            showFlags: true,
            removedWatchToSeeReasons: null,
            removedWatchToSee: null,
            // DRAGABLE PROPERTIES

            watchToRemove: null,
            reasonsWatchMoved: {
                receivedBy: null,
                typeMoved: null,
                value: null,
                trades: []
            },

            draggingId: '',
            isAnimate: true,
            TestArray: [
                'option1',
                'option2',
                'option3',
                'option4',
            ]
        }
    },
    methods: {
        smSizeCardUse() {
            this.smSizeCard = 2
            this.mdSizeCard = 3
        },

        mdSizeCardUse() {
            this.smSizeCard = 6
            this.mdSizeCard = 6
        },

        lgSizeCardUse() {
            this.smSizeCard = 12
            this.mdSizeCard = 12
        },

        startDrag(e) {
            this.drag = true;
            console.log(e.item.id, 'okayy', e.item)
            this.draggingId = e.item.id;
            console.log(this.draggingId, 'its done')
        },

        endDrag(e) {
            this.drag = false;
            this.isAnimate = false;
            setTimeout(() => {
                this.isAnimate = true;
            }, 400)
        },

        orderChanged() {
            this.$emit('orderChanged')
        },

        resetReasonsWatchMoved() {
            this.reasonsWatchMoved = {
                receivedBy: null,
                typeMoved: null,
                value: null,
                trades: [] 
            }
        },

        selectWatch(watch) {
            this.$emit('selectWatch', watch)
        },

        editWatch(watch) {
            console.log('fuc')
            this.$emit('editWatchModal', watch);
        },

        // Remove a watch From Collection
        removeWatchModal(watch) {
            this.watchToRemove = watch;
            this.$refs.removeWatchModal.show();
        },

        openModal(){
            this.$refs.removedWatchModal.show();
        },

        // View a watch that has been removed from collection
        removedWatchModal(watch){
            this.removedWatchToSee = watch;
            this.$refs.removedWatchModal.show();
        },

        submitRemoveWatchForm() {
            let watchDetails = { watchToRemove: this.watchToRemove, reasonsWatchMoved: this.reasonsWatchMoved }
            this.$store.dispatch('createRemoveWatch', watchDetails);
            this.$store.dispatch('removeExistingWatch', this.watchToRemove.id).then(() => {
                // TODO: NOT THIS
                setTimeout(() => {
                    this.$store.dispatch('getNumberFSOT');
                    this.$store.dispatch('loadUserCollection');
                    this.resetReasonsWatchMoved();
                    this.$refs.removeWatchModal.hide();
                }, 1)       
            })   
        },

        favoriteToggle(watchId) {
            this.$store.dispatch('toggleWatchFavorite', watchId);
        },

        isFavoriteWatch(watchId) {
            if(this.Favorites) {
             let found = this.Favorites.find((w) => {
                    return w.watch_id == watchId
                })
                if(found) return true
                else return false
            }
        },   

        // truncatedWatchName(name, lengthToTruncate) {
        //     if(name.length > lengthToTruncate) {
        //         return name.substring(0, lengthToTruncate) + '...';
        //     }
        //     else 
        //         return name;
        // },

         titleCase(str) {
            var splitStr = str.toLowerCase().split(' ');
            for (var i = 0; i < splitStr.length; i++) {
                splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
            }
            return splitStr.join(' '); 
        }
    },

    computed: {
        Favorites() {
            return this.$store.state.Favorites;
        },

        isFilteringCollection() {
            return this.$store.state.isFilteringCollection;
        },

        Collection: {
            set(newCollectionOrder) {
                if (!this.isManagingCollection) {
                    return this.$store.dispatch('updateCollectionOrder', newCollectionOrder)
                }
            },
            get() {
                let isMan = this.isManagingCollection;
                console.log(this.isManagingCollection)
                if(isMan) {
                    return this.$store.state.FilteredCollection;
                }
                else return this.$store.state.Collection;
                }
        },

        

        isFilteringCollection() {
            return this.$store.state.FilteredCollection;
        },

        isManagingCollection() {
            return this.$store.state.isManagingCollection;
        },

        isViewingPreviousWatches() {
            return this.$store.state.isViewingPreviousWatches
        },

        isShowFlags() {
            return this.$store.state.isShowFlags;
        },

        isShowEditFlags() {
            return this.$store.state.isShowEditFlags;
        },

        currentCardSize(){
            return this.$store.state.CurrentCardSize;
        },

        smSizeCard() {
            return this.$store.state.MobileCardSizeToUse;
        },

        mdSizeCard() {
            return this.$store.state.DesktopCardSizeToUse;
        }
    }
}
</script>

<style scoped>
    .no-pointer {
        pointer-events: none;
    }

    #watchName {
        font-size: .80em;
    }

    #seeMore {
        font-size: .70em;
    }

    #searchRef {
        font-size: .60em;
    }

    .btn {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }

    .right {
        float: right;
    }

    .left {
        float: left;
    }

        
    .flag {
        padding: .35em 0 !important;
        font-size: .75em;
    }

    .p-half {
        padding: .5rem;
    }

    .border-xl {
        border: 1px solid lightgray;
    }

    .watchImgWrapper_Sm {
        width: 100%;
        height: 8rem;
    }

    .watchImgWrapper_Md {
        width: 100%;
        height:11.5rem;
    }

    .watchImgWrapper_Lg {
        width: 100%;
        height: 17.5rem;
    }

    @media(max-width: 850px) {
        .watchImgWrapper_Sm {
            width: 100%;
            height: 3rem;
        }

        .watchImgWrapper_Md {
            width: 100%;
            height:4rem;
        }

        .watchImgWrapper_Lg {
            width: 100%;
            height: 6rem;
        }
    }

    

    .watchImg {
        width: auto;
        max-width: 100%;
        min-height: 75%;
        height: auto;
        margin:auto;    
        max-height: 100%;
    }

    .tallWatchImg {
        width: auto;
        /* max-height: 25rem; */
    }

    .smallHeartIcon {
        width: 25px;
        z-index: 999;
    }

    .heartIcon {
        width: 42.5px;
        z-index: 999;
    }

    .swap-list-move {
        transition: transform .75s;
    }


    @media(max-width: 1000px) {
        .border-xl{
            border: none;
        }

        /* .watchImg {
            width: 100%;
            min-height: 6rem;
            object-fit: cover;

        } */
    }

    @media(min-width: 768px) and (max-width: 1000px) {
        #searchRef, #seeMore {
            font-size: .6em;
        }

        #watchName {
            font-size: .65em;
        } 

        .heartIcon {
            width: 20px;
        }
    }

    @media(max-width: 600px) {
        #editIcon {
        background-size: 1.25em;              
        }

        .flag {
            font-size: .85rem;
            padding: .1em !important;
            
        }

        .heartIcon {
            width: 28px;
        }

        .smallHeartIcon {
        width: 15px;
        z-index: 999;
    }
    }

    @media(max-width: 415px) {
        #searchRef, #seeMore {
            font-size: .65rem;
        }

        .flag {
            font-size: 10.5px;
            padding: .2em !important;
        }

        .heartIcon {
            width: 22.5px;
        }
    }



/* ANIMATIONS */

/* .bounce {
  animation: pulse .5s;
}

@keyframes pulse {
  100% {
    transform: scale(1.2);
  }
} */



    .dropZone[aria-dropeffect="move"]  {
        border-color:#68b;
        background-color: red;
    }
      .dropZone[aria-dropeffect="move"] .watch-wrapper {
        background-color: #C0D8E0;
    }
     .dropZone[aria-dropeffect="move"]:focus,
    .dropZone[aria-dropeffect="move"].dragover
    {
    outline:none;
    box-shadow:0 0 0 1px #fff, 0 0 0 3px #68b;
    }
     .watch[aria-grabbed="true"] .watch-wrapper
    {
    background:lightgreen;
    color:#fff;
    }


</style>

