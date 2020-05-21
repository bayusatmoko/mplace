<template>
  <div class="about">
    <v-container fluid class="top-landing" v-on:resize="onResize($event)">
      <v-row
        style="margin-top: 20px; height: 210px;"
        :justify="'space-between'"
      >
        <v-col cols="6" />
        <v-col cols="6">
          <div style="display: flex; flex-direction: column; height: 215px; justify-content: space-between;">
            <div class="link-group" v-show="notResize">
              <router-link class="link" to="/">Layanan</router-link>
              <router-link class="link" to="/about">Tentang Kami</router-link>
              <router-link class="link" to="/">Blog</router-link>
              <router-link class="link" to="/about">Hubungi Kami</router-link>
            </div>
              <p class="cs-text-right text-center">Coming Soon</p>
          </div>
        </v-col>
      </v-row>
          <v-row
            :justify="'start'"
             style="height: 200px; margin-left: 141px;"
          >
            <v-col cols="5">
              <span class="question ">Belanja Apa Hari Ini?</span>
              <div class="pt-8">
                <span class="txt font-weight-bold">Gets id </span>
                <span class="txt">
                terhubung dengan banyak toko sembako, tempat makan, jasa pesan dan antar hingga toko buah dan sayur untuk memenuhi kebutuhan kamu.
                </span>
              </div>
              <p/>
              <v-btn :loading="isLoading" class="shop-btn" color="#388659" elevation="6" @click="goHome">Belanja Yuk</v-btn>
              <div>
              <a>
                <img class="gplay" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
                  <p class="cs-text">Coming Soon</p>
              </div>
            </v-col>
            <v-col cols="2" />
            <v-col cols="4">
              <div class="timer" style="margin-left:10px; height: 120px; width: 380px; border-radius: 15px; display:flex; justify-content: center; align-items: center;">
              <Timer
                starttime="Jul 5, 2020 00:37:25"
                endtime="Jul 8, 2020 00:37:25"
                trans='{
         "day":"Hari",
         "hours":"Jam",
         "minutes":"Menit",
         "seconds":"Detik",
         "expired":"Event has been expired.",
         "running":"Till the end of event.",
         "upcoming":"Till start of event.",
         "status": {
            "expired":"Expired",
            "running":"Running",
            "upcoming":"Future"
           }}'
              />
              </div>
            </v-col>
          </v-row>
    </v-container>
  </div>
</template>

<script>
import Timer from '../components/Timer'

export default {
  components: {
    Timer
  },
  name: 'About',
  data () {
    return {
      isLoading: false,
      notResize: true
    }
  },
  methods: {
    goHome () {
      this.isLoading = true
      setTimeout(function () {
        this.isLoading = false
      }.bind(this), 2000)
    },
    onResize () {
      console.log()
      if (window.innerWidth < 700) {
        this.notResize = false
      }
      if (window.innerWidth > 700) {
        this.notResize = true
      }
    }
  },
  mounted () {
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>

<style scoped>
  .question {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 45px;
    line-height: 55px;
    color: #5A5B5B;
  }
  .txt {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-size: 24px;
    line-height: 36px;
    color: #5A5B5B;
  }
  .top-landing {
    height: 860px;
    background: url("../assets/landing-bg.jpg") no-repeat;
    background-size: 1440px 860px;
  }
  .shop-btn {
    width: 157px!important;
    height: 50px!important;
    letter-spacing: normal;
    margin-top: 20px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    text-transform: none;
    color: white;
  }

  .gplay {
    margin-left: -12px;
    margin-top: 88px;
    width: 180px;
    height: 70px;
  }

  .link {
    text-decoration: none;
    margin-left: 33px;
    font-family: 'Montserrat-bold', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #1D1D1D;
  }

  .link:hover {
    color: white;
  }

  .link-group  {
    padding-top: 20px;
    margin-left: 13px;
  }

  .cs-text {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    margin-left: 35px;
    margin-top: -10px;
  }

  .cs-text-right {
    margin-bottom: 10px;
    margin-left: 68px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    color: #5A5B5B;
  }
</style>
