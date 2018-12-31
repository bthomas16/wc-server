<template>
  <b-container fluid id="app" class="w-100 p-0">
      <app-header id="header"></app-header>
      <div class="wrapper w-100 p-0">
        <transition name="slide-fade">
          <router-view id="body" :key="$route.fullPath"></router-view>
        </transition>
      </div>
      <app-footer id="footer" class="w-100 m-0 p-0"></app-footer>
  </b-container> 
</template>

<script>
    
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

  export default {

    components: {
      appHeader: Header,
      appFooter: Footer
    },

    computed: {
      isLoading() {
        return this.$store.state.isLoading;
      }
    },

    mounted() {
      console.log(process.env)
    }
}
</script>

<style scoped>

.wrapper {
  min-height: 100%;
}
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
