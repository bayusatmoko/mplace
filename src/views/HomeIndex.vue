<template>
  <div>
    <HomeDesktop v-if="currentDevice === 'desktop'" />
    <HomeMobile v-if="currentDevice === 'mobile'" />
  </div>
</template>

<script>
import HomeDesktop from './HomeDesktop.vue'
import HomeMobile from './HomeMobile.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'HomeIndex',
  components: {
    HomeDesktop,
    HomeMobile
  },
  computed: {
    ...mapGetters(['currentDevice'])
  }
}
</script>
