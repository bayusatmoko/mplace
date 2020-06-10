<template>
  <v-container style="height: 2000px;">
    <v-row>
      <v-col cols="12 text-center" class="title-buy"><h3>Belanja Apa Hari Ini ?</h3></v-col>
    </v-row>
    <v-row>
      <v-col cols="12 text-center">
        <span class="txt font-weight-bold">Gets id </span>
        <span class="txt">
                terhubung dengan banyak toko sembako, tempat makan, jasa pesan dan antar hingga toko buah dan sayur untuk memenuhi kebutuhan kamu.
                </span>
      </v-col>
    </v-row>
    <v-row style="display: flex; flex-direction: row;">
      <v-col cols="6 text-center">
        <v-btn :loading="isLoading" class="shop-btn" color="#388659" elevation="6" @click="goHome">Belanja Yuk
        </v-btn>
      </v-col>
      <v-col cols="6 text-center">
        <a>
          <img class="gplay mt-2" style="width: 100%; height: 65%" alt='Get it on Google Play'
               src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
        <p class="cs-text">Coming Soon</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12 text-center">
        <div class="timer-mobile"
             style="height: 100%; width: 60%; border-radius: 15px; margin: 0 auto;">
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
    <v-row style="background-color: #6AC665; margin-top: -40px;">
      <v-col cols="12 text-center" style="color: white">
        <h3 style="margin-top: 20%; font-size: 24px;">Layanan Kami</h3>
      </v-col>
      <v-col cols="12 text-center" style="margin-top: -5%">
        <p style="font-size: 18px; color: white; padding-bottom: 15%; line-height: 36px;">
          Kami meng hubungkan pelanggan dengan para penjual untuk melakukan
          transaksi kebutuhan sehari - hari melalui empat layanan unggulan
          yaitu Gets Food, Gets Fresh, Gets Daily, dan Gets Service
        </p>
      </v-col>
    </v-row>
    <v-row style="display: flex; flex-direction: row; margin-top: -50px;">
      <v-col cols="6 text-center">
        <div class="card">
          <v-col>
            <img alt="penjual" style="width: 60%" src="img/penjual.png"/>
          </v-col>
          <v-col>
            <div style="text-align: center; margin-top:-10%">
              <h5 style="font-family: Montserrat,monospace; font-weight: bold; color: #5A5B5B;">PENJUAL</h5>
              <p style="font-size: 10px; padding-bottom: 5%; line-height: 19px;">
                Tingkatkan transaksi hingga 2x lipat dengan aplikasi Gets id.
                Terima pesanan secara online dan jangkau lebih banyak pelanggan
              </p>
            </div>
          </v-col>
        </div>
      </v-col>
      <v-col cols="6 text-center">
        <div class="card">
          <v-col>
            <img alt="pembeli" style="width: 60%; margin-bottom: 20%" src="img/pembeli.png"/>
          </v-col>
          <v-col>
            <div style="text-align: center; margin-top:-35%">
              <h5 style="font-family: Montserrat,monospace; font-weight: bold; color: #5A5B5B;">PEMBELI</h5>
              <p style="font-size: 10px; padding-bottom: 5%; line-height: 19px;">
                Nikmati kemudahan untuk belanja dengan satu aplikasi. Gets id
                hadir untuk membantu belanja kebutuhan harian kamu dengan mudah,
                cepat dan aman.
              </p>
            </div>
          </v-col>
        </div>
      </v-col>
    </v-row>
    <v-row style="margin-top: 10%">
      <v-col cols="12 text-center">
        <h4 style="font-family: Montserrat,monospace; font-weight: 600; color: #5A5B5B;">Tentang Kami</h4>
      </v-col>
      <v-col cols="12 text-center">
        <div class="card2 my-7">
          <p style="font-family: Montserrat,monospace; font-size: 18px;">
            Gets id hadir untuk memudahkan pelanggan dalam memenuhi kebutuhan
            sehari - hari dan mendorong aktivitas perekonomian pengusaha
            melalui teknologi belanja online
          </p>
        </div>
      </v-col>
      <v-col cols="12 text-center">
        <div class="card2">
          <p style="font-family: Montserrat,monospace; font-size: 18px;">
            Kami menghubungkan pelanggan dengan berbagai penjual seperti toko
            sembako, tempat makan, jasa pesan dan antar hingga toko buah dan
            sayur dengan mudah, cepat dan aman.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row style="background-color: #6AC665; display: flex; flex-direction: row; margin-top: 20%; padding-top: 15%;">
      <v-col cols="6">
        <h4 style="color: white; font-family: Montserrat,serif; font-weight: bold; font-style: normal; font-size: 21px;">Informasi</h4>
        <li>Layanan Kami</li>
        <li>Karir</li>
        <li>Blog</li>
        <li>Undang Teman</li>
      </v-col>
      <v-col cols="6">
        <h4 style="color: white; font-family: Montserrat,serif; font-weight: bold; font-style: normal; font-size: 21px;">Bantuan</h4>
        <li>FAQ</li>
        <li>Syarat dan Ketentuan</li>
        <li>Kebijakan Privasi</li>
      </v-col>
      <v-col cols="6">
        <h4 style="color: white; font-family: Montserrat,serif; font-weight: bold; font-style: normal; font-size: 21px;">Contact Us</h4>
        <li><a href="https://api.whatsapp.com/send?phone=6285641536548" target="_blank">+62 856-4153-6548</a></li>
        <li>team@gets.id</li>
      </v-col>
      <v-col cols="6">
        <h4 style="color: white; font-family: Montserrat,serif; font-weight: bold; font-style: normal; font-size: 21px">Address</h4>
        <p style="color: white">Semarang, Central Java</p>
      </v-col>
      <v-col cols="12 text-center">
        <h4 style="color: white; font-family: Montserrat,serif; font-weight: bold; font-style: normal; font-size: 21px;">Social</h4>
      </v-col>
      <v-col cols="2"/>
      <v-col cols="2 text-center">
        <img src="../assets/instagram.png" alt="">
      </v-col>
      <v-col cols="2 text-center">
      <img src="../assets/facebook.png" alt="">
      </v-col>
      <v-col cols="2 text-center">
      <img src="../assets/twitter.png" alt="">
      </v-col>
      <v-col cols="2 text-center">
      <img src="../assets/youtube.png" alt="">
        <img style="margin-left: -15px;" src="../assets/youtube-play-button.png" alt="">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Timer from '../components/Timer'

export default {
  components: {
    Timer
  },
  name: 'HomeMobile',
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
  .card {
    width: 100%;
    height: 90%;
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
    padding: 5%;
    background: #ffffff;
    box-shadow: 0px 8px 16px rgba(74, 174, 72, 0.25);
    border-radius: 15px;
  }

  li {
    font-family: Montserrat,serif;
    font-size: 14px;
    list-style-type: none;
    color: white;
  }

  .title-buy {
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;

    color: #5A5B5B;
  }

  .txt {
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 36px;
    /* or 200% */

    text-align: center;

    color: #5A5B5B;
  }

  .cs-text {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    padding-bottom: 10px;
    font-size: 12px;
  }

</style>
