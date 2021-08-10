<template>

<div class="navBar">
  <div class="LogoBar">
      <img src="@/assets/logo-cts.png" alt="">
  </div>
  <div class="containerBar">
      <div class="emailText">
        {{valueEmail}}
      </div>
      <div class="buttonDisconnect">
        <button v-on:click="disconnected">DISCONNECT</button>
      </div>
  </div>
</div>

<div class="body">
  <div class="lists">
    <contact-card v-for="(contact, idx) in filteredContacts"
          :key="contact.lastName + idx"
          :contact="contact" />
  </div>
  <div class="qrcode">
    <div id="resPhone" class="qr">
      <div class="size">QRCODE for save or restore contacts</div>
    <QRCODE :username="valueUrl"/>
    </div>
  </div>
</div>
</template>

<script>

import ContactCard from '../components/CardContacts'
import QRCODE from '../components/QRCODE.vue'
import useContacts from '../hook/useContacts'

export default {
  name: 'App',
  components: { useContacts, ContactCard, QRCODE },
  data() {
    return {
      valueUrl: [],
      valueEmail: [],
    }
  },
  setup (props) {
    const { isLoading, filteredContacts } = useContacts()
    return {
      filteredContacts,
      isLoading
    }
  },
  mounted() {
    this.testToken()
    this.fetchQRCODE()
    this.fetchProfile()
  },
  methods: {
      disconnected: function () {
        localStorage.removeItem('token');
        this.$router.push("/"); 
      },
      async fetchQRCODE() {
          const axios = require('axios');
          let useToken = localStorage.getItem('token');
          let token = JSON.parse(useToken);
          token = token.token;

          const response = await axios.get('http://127.0.0.1:3000/api/urlSAVE', {
              headers: {
                  Authorization: 'Bearer ' + token
              }
          })
          this.valueUrl=response.data.url+"&"+token
        },
        async fetchProfile() {
            const axios = require('axios');
          let useToken = localStorage.getItem('token');
          let token = JSON.parse(useToken);
          token = token.token;
          const response = await axios.get('http://127.0.0.1:3000/api/profile', {
          headers: {
              Authorization: 'Bearer ' + token
          }
        })
      this.valueEmail=response.data.email
    },
    async testToken() {
            const axios = require('axios');
          let useToken = localStorage.getItem('token');
          let token = JSON.parse(useToken);
          token = token.token;

     const response = await axios.get('http://127.0.0.1:3000/api/jwt', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
    console.log(response.data.tokenValid);
    if(response.data.tokenValid==true){
      this.$router.push('/') 
    }
  },
  }
}
</script>

<style scoped>
.size{
  font-size: 2em;
}
.body{
  display: flex;
    flex-wrap: nowrap;
}
.qrcode{
display: flex;
justify-content: space-around;
width: 100%;

}
.qrcode>.qr{
  margin: auto;
}

.lists{
  width: 40%;
  height: 80vh;
  border: solid 5px black;
  border-top: 0px;
  overflow-y: scroll;
  scrollbar-color: rebeccapurple green;
  scrollbar-width: thin;
}
.lists::-webkit-scrollbar {
  width: 14px;
}
.lists::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
.lists::-webkit-scrollbar-thumb {
  background: rgb(168 169 173); 
}

.lists::-webkit-scrollbar-thumb:hover {
  background: rgb(157 157 157); 
}
img{
  width: 30%;
  height: 50%;
}
.navBar{
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 140px;
}
.containerBar{
  width: 60%;
  display: flex;
  border: solid 5px black;
  border-left: 0px;
}
.emailText{
  width: 60%;
  margin: auto;
  font-size: 1.4em;
  font-weight: bolder;
}
.buttonDisconnect{
  margin: auto;
  width: 40%;
}
button {
  cursor: pointer;
  background-color: black;
  position: relative;
  color: white;
  padding: 6%;
  text-align: center;
  transition: 0.3s;
  font-weight: bolder;
  border: solid 3px black;

}
button:hover {
  color: black;
  background-color: white;
}

.LogoBar{
    position: relative;
    border: solid 5px black;
    width: 40%;
}
.LogoBar > img{
    height: 90%;
    width: 90%;
}

@media only screen and (max-width: 600px) {
    .LogoBar{
    height: 50%;
    width: 30%;
    }
}
</style>