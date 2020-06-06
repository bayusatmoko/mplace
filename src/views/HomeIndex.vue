<template>
  <HomeDesktop v-if="currentDevice === 'desktop'" />
</template>

<script>
import HomeDesktop from './About.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'HomeIndex',
  components: {
    HomeDesktop
  },
  computed: {
    ...mapGetters(['currentDevice'])
  }
}
</script>
