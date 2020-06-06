<template>
  <v-app>
    <v-app-bar
      v-if="this.currentDevice === 'mobile'"
      app
      color="white"
      style="margin: 0"
    >
      <div class="">
        <v-img
          alt="Gets ID Logo"
          contain
          src="./assets/Logo.jpg"
          transition="scale-transition"
          height="50"
          width="100"
        />
      </div>

      <v-spacer/>
      <v-app-bar-nav-icon color="black"/>
    </v-app-bar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'App',
  data: () => ({}),
  methods: {
    ...mapMutations(['setDevice']),
    onResize () {
      if (window.innerWidth <= 1080) {
        this.setDevice('mobile')
      }
      if (window.innerWidth > 1080) {
        this.setDevice('desktop')
      }
    }
  },
  computed: {
    ...mapGetters(['currentDevice'])
  },
  mounted () {
    this.setDevice('desktop')
    if (window.innerWidth <= 1000) {
      this.setDevice('mobile')
    }
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>

<style scoped>
</style>
