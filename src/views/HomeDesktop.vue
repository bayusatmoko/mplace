<template>
  <div>
    <div class="about">
      <v-container fluid class="top-landing" v-on:resize="onResize($event)" style="user-select:none;">
        <v-row
          style="margin-top: 20px; height: 210px;"
          :justify="'space-between'"
        >
          <v-col cols="1"/>
          <v-col cols="5">
            <img src="../assets/Logo.jpg" alt="Gets id">
          </v-col>
          <v-col cols="6">
            <div style="display: flex; flex-direction: column; height: 215px; justify-content: space-between;">
              <div class="link-group" v-show="notResize">
                <router-link class="link" to="/">Layanan</router-link>
                <router-link class="link" to="/about">Tentang Kami</router-link>
                <router-link class="link" to="/">Blog</router-link>
                <router-link class="link" to="/about">Hubungi Kami</router-link>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row
          :justify="'start'"
          style="height: 200px;"
        >
          <v-col cols="1"/>
          <v-col cols="4">
            <span class="question">Belanja Apa Hari Ini?</span>
            <div class="pt-8">
              <span class="txt font-weight-bold">Gets id </span>
              <span class="txt">
                terhubung dengan banyak toko sembako, tempat makan, jasa pesan dan antar hingga toko buah dan sayur untuk memenuhi kebutuhan kamu.
                </span>
            </div>
            <p/>
            <v-btn :loading="isLoading" class="shop-btn" color="#388659" elevation="6" @click="goHome">Belanja Yuk
            </v-btn>
            <div>
              <a>
                <img class="gplay" alt='Get it on Google Play'
                     src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
              <p class="cs-text">Coming Soon</p>
            </div>
          </v-col>
          <v-col cols="3"/>
          <v-col cols="3 text-center">
            <p class="cs-text-right" style="margin-top: -35px; margin-left: 10%;" v-show="notResize">Coming Soon</p>
            <div class="timer"
                 style="height: 120px; width: 380px; margin: 0 auto; border-radius: 15px; display:flex; justify-content: center; align-items: center;"
                 v-show="notResize">
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
    <div class="second">
      <div class="display-1">
        Layanan Kami
      </div>
      <v-row justify="center">
        <v-col cols="8">
          <p style="font-size: 25px;">
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
            <img src="img/penjual.png"/>
          </v-col>
          <div style="text-align: center; margin-top:-35px">
            <h2 style="font-family: Montserrat,monospace; font-weight: bold; color: #5A5B5B;">PENJUAL</h2>
            <p style="padding-bottom: 20%">
              Tingkatkan transaksi hingga 2x lipat dengan aplikasi Gets id.
              Terima pesanan secara online dan jangkau lebih banyak pelanggan
            </p>
          </div>
        </div>
        <div class="card">
          <v-col align="center">
            <img style="margin-bottom: 13%" src="img/pembeli.png"/>
          </v-col>
          <div style="text-align: center; margin-top:-35px">
            <h2 style="font-family: Montserrat,monospace; font-weight: bold; color: #5A5B5B;">PEMBELI</h2>
            <p style="padding-bottom: 20%">
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
          <img style="width:100%; background-position: 50% 50%;" src="img/storefront.png"/>
        </v-col>
        <v-col xs6>
          <div class="card2 my-7" style="margin-left: -50px;">
            <p style="font-size: 25px;">
              Gets id hadir untuk memudahkan pelanggan dalam memenuhi kebutuhan
              sehari - hari dan mendorong aktivitas perekonomian pengusaha
              melalui teknologi belanja online
            </p>
          </div>
          <div class="card2" style="margin-left: -50px;">
            <p style="font-size: 25px;">
              Kami menghubungkan pelanggan dengan berbagai penjual seperti toko
              sembako, tempat makan, jasa pesan dan antar hingga toko buah dan
              sayur dengan mudah, cepat dan aman.
            </p>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="rectangle" style="padding-top:150px;">
    <v-row style="margin-left: -100px;">
      <v-col cols="2"></v-col>
        <v-col cols="2">
          <p style="color: white; padding-bottom: 10px; font-size: 20px; font-weight: bold;"> Informasi </p>
          <p style="color: white; font-size: 15px;">Layanan Kami</p>
          <p style="color: white; font-size: 15px;">Karir</p>
          <p style="color: white; font-size: 15px;">Blog</p>
          <p style="color: white; font-size: 15px;">Undang Teman</p>
        </v-col>
        <v-col cols="2">
          <p style="color: white; padding-bottom: 10px; font-size: 20px; font-weight: bold;"> Bantuan </p>
          <p style="color: white; font-size: 15px;">FAQ</p>
          <p style="color: white; font-size: 15px;">Syarat dan Ketentuan</p>
          <p style="color: white; font-size: 15px;">Kebijakan Privasi</p>
        </v-col>
        <v-col cols="2">
          <p style="color: white; padding-bottom: 10px; font-size: 20px; font-weight: bold;"> Contact Us </p>
          <p style="color: white; font-size: 15px;">+62 857-4733-8591</p>
          <p style="color: white; font-size: 15px;">getsid.app@gmail.com</p>
        </v-col>
        <v-col cols="2">
          <p style="color: white; padding-bottom: 10px; font-size: 20px; font-weight: bold;"> Address </p>
          <p style="color: white; font-size: 15px;">Semarang, Central Java</p>
        </v-col>
        <v-col cols="2">
          <p style="color: white; padding-bottom: 10px; font-size: 20px; font-weight: bold;"> Social </p>
          <p><img src="../assets/instagram.png" alt=""></p>
          <p><img src="../assets/facebook.png" alt=""></p>
          <p><img src="../assets/twitter.png" alt=""></p>
          <p><img src="../assets/youtube.png" alt=""></p>
          <p><img style="margin-left: 10px; margin-top: -80px;" src="../assets/youtube-play-button.png" alt=""></p>
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
      setTimeout(function () {
        this.isLoading = false
      }.bind(this), 2000)
    },
    onResize () {
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
    min-height: 900px;
    min-width: 1366px;
    background: url("../assets/landing-bg.jpg") no-repeat 70% 30%;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .rectangle {
    width: 100%;
    background: url("../assets/Rectangle.png");
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
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #1D1D1D;
  }

  .link:hover {
    color: white;
  }

  .link-group {
    padding-top: 20px;
    margin-left: 23px;
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
    /* margin-left: 95px!important; */
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    color: #5A5B5B;
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
    height: 450px;
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
    margin-top: -100px;
  }

  .fourth {
    margin-top: 200px;
  }

</style>
