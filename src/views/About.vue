<template>
  <div>
    <div class="about">
      <v-container
        fluid
        class="top-landing"
        v-on:resize="onResize($event)"
        style="user-select:none;"
      >
        <v-row style="margin-top: 20px; height: 210px;" :justify="'space-between'">
          <v-col cols="1" />
          <v-col cols="5">
            <img src="../assets/Logo.jpg" alt="Gets id" />
          </v-col>
          <v-col cols="6">
            <div
              style="display: flex; flex-direction: column; height: 215px; justify-content: space-between;"
            >
              <div class="link-group" v-show="notResize">
                <router-link class="link" to="/">Layanan</router-link>
                <router-link class="link" to="/about">Tentang Kami</router-link>
                <router-link class="link" to="/">Blog</router-link>
                <router-link class="link" to="/about">Hubungi Kami</router-link>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row :justify="'start'" style="height: 200px;">
          <v-col cols="1" />
          <v-col cols="4">
            <span class="question">Belanja Apa Hari Ini?</span>
            <div class="pt-8">
              <span class="txt font-weight-bold">Gets id</span>
              <span
                class="txt"
              >terhubung dengan banyak toko sembako, tempat makan, jasa pesan dan antar hingga toko buah dan sayur untuk memenuhi kebutuhan kamu.</span>
            </div>
            <p />
            <v-btn
              :loading="isLoading"
              class="shop-btn"
              color="#388659"
              elevation="6"
              @click="goHome"
            >Belanja Yuk</v-btn>
            <div>
              <a>
                <img
                  class="gplay"
                  alt="Get it on Google Play"
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                />
              </a>
              <p class="cs-text">Coming Soon</p>
            </div>
          </v-col>
          <v-col cols="2" />
          <v-col cols="5">
            <p
              class="cs-text-right text-center"
              style="margin-top: -35px;"
              v-show="notResize"
            >Coming Soon</p>
            <div
              class="timer"
              style="height: 120px; width: 380px; margin-left:90px; border-radius: 15px; display:flex; justify-content: center; align-items: center;"
              v-show="notResize"
            >
              <Timer
                starttime="Jul 5, 2020 00:37:25"
                endtime="Jul 8, 2020 00:37:25"
                trans="{
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
           }}"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="second">
      <div class="display-1">Layanan Kami</div>
      <v-row justify="center">
        <v-col cols="4">
          <p>
            Kami meng hubungkan pelanggan dengan para penjual untuk melakukan
            transaksi kebutuhan sehari - hari melalui empat layanan unggulan
            yaitu Gets Food, Gets Fresh, Gets Daily, dan Gets Service
          </p>
        </v-col>
      </v-row>
    </div>
    <div class="third">
      <v-row justify="center" class="mt-10">
        <div class="card mx-5">
          <v-col align="center">
            <img src="img/penjual.png" />
          </v-col>
          <div style="text-align: center; margin-top:-35px">
            <h2>PENJUAL</h2>
            <p>
              Tingkatkan transaksi hingga 2x lipat dengan aplikasi Gets id.
              Terima pesanan secara online dan jangkau lebih banyak pelanggan
            </p>
          </div>
        </div>
        <div class="card">
          <v-col align="center">
            <img src="img/pembeli.png" />
          </v-col>
          <div style="text-align: center; margin-top:-35px">
            <h2>PEMBELI</h2>
            <p>
              Nikmati kemudahan untuk belanja dengan satu aplikasi. Gets id
              hadir untuk membantu belanja kebutuhan harian kamu dengan mudah,
              cepat dan aman.
            </p>
          </div>
        </div>
      </v-row>
    </div>
    <div class="fourth">
      <div style="text-align: center" class="display-1">Tentang Kami</div>
      <v-row align="center">
        <v-col xs6>
          <img style="width:80%" src="img/storefront.png" />
        </v-col>
        <v-col xs6>
          <div class="card2 my-7">
            <p>
              Gets id hadir untuk memudahkan pelanggan dalam memenuhi kebutuhan
              sehari - hari dan mendorong aktivitas perekonomian pengusaha
              melalui teknologi belanja online
            </p>
          </div>
          <div class="card2">
            <p>
              Kami menghubungkan pelanggan dengan berbagai penjual seperti toko
              sembako, tempat makan, jasa pesan dan antar hingga toko buah dan
              sayur dengan mudah, cepat dan aman.
            </p>
          </div>
        </v-col>
      </v-row>
    </div>
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
      setTimeout(
        function () {
          this.isLoading = false
        }.bind(this),
        2000
      )
    },
    onResize () {
      console.log(window.innerWidth)
      if (window.innerWidth < 1000) {
        this.notResize = false
      }
      if (window.innerWidth > 1000) {
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
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 45px;
  line-height: 55px;
  color: #5a5b5b;
}
.txt {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-size: 24px;
  line-height: 36px;
  color: #5a5b5b;
}
.top-landing {
  min-height: 1080px;
  min-width: 1024px;
  width: 100%;
  height: auto;
  background: url("../assets/landing-bg.jpg") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.gplay {
  margin-left: -12px;
  margin-top: 88px;
  width: 180px;
  height: 70px;
}

.link {
  text-decoration: none;
  margin-left: 45px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #1d1d1d;
}

.link:hover {
  color: white;
}

.link-group {
  padding-top: 20px;
  margin-left: 23px;
}

.cs-text {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  margin-left: 35px;
  margin-top: -10px;
}

.cs-text-right {
  margin-bottom: 10px;
  /* margin-left: 95px!important; */
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  color: #5a5b5b;
}
.second {
  height: 400px;
  padding: 100px 0px;
  text-align: center;
  color: white;
  overflow: visible;
  background-color: #6ac665;
  border-bottom-left-radius: 50% 100px;
  border-bottom-right-radius: 50% 100px;
}
.card {
  width: 350px;
  height: 408px;
  padding: 10px 20px;
  background: linear-gradient(
      360deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 196.71%
    ),
    #4aae48;
  box-shadow: 0px 8px 16px rgba(74, 174, 72, 0.25);
  border-radius: 15px;
}
.card2 {
  width: 635px;
  padding: 60px;
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(74, 174, 72, 0.25);
  border-radius: 15px;
}
.card3 {
  width: 375px;
  height: 121px;

  background: #388659;
  box-shadow: 0px 8px 16px rgba(74, 174, 72, 0.25);
  border-radius: 15px;
}
.third {
  margin-top: -150px;
}
.fourth {
  margin-top: 200px;
}
