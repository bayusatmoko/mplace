<template>
  <div class="about">
    <v-container fluid class="top-landing">
      <v-row
        :justify="'end'"
        style="height: 230px;"
      >
<!--          <router-link to="/">Layanan</router-link>-->
<!--          <router-link to="/about">Tentang Kami</router-link>-->
<!--          <router-link to="/">Blog</router-link>-->
<!--          <router-link to="/about">Hubungi Kami</router-link>-->
      </v-row>
          <v-row
            :justify="'start'"
             style="height: 200px; margin-left: 145px;"
          >
            <v-col cols="5">
              <h1 class="question ">Belanja Apa Hari Ini?</h1>
              <div class="pt-8">
                <span class="txt font-weight-bold">Gets id </span>
                <span class="txt">
                terhubung dengan banyak toko sembako, tempat makan, jasa pesan dan antar hingga toko buah dan sayur untuk memenuhi kebutuhan kamu.
                </span>
              </div>
              <p/>
              <v-btn large :loading="isLoading" class="shop-btn" color="#388659" elevation="6" @click="goHome">Belanja Yuk</v-btn>
              <div>
              <a href='https://play.google.com/store/apps/details?id=com.andi.alquran.id&hl=in&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                <img class="gplay" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
              </div>
            </v-col>
          </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    goHome () {
      this.isLoading = true
      setTimeout(function () {
        this.isLoading = false
      }.bind(this), 2000)
    }
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
    margin-top: 20px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    text-transform: none;
    color: white;
  }

  .gplay {
    margin-left: -12px;
    margin-top: 88px;
    width: 180px;
    height: 70px;
  }
</style>
