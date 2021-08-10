<template>
  <div class="RegisterPage">
      <LogoBar/>
      <div id="titleRegister">CONNECTION</div>
  </div>

  <div class="form-group-registration">
    <label for="text-input">Adress email</label>
    <input v-model="email" class="input" id="text-input" type="text" />

    <label for="text-input">Password</label>
    <input v-model="password" class="input" id="text-input" type="password" />

    <div class="checkForm">
      <label  for="text-checkBox">Register your email</label>
      <input v-model="registerCheck" class="checkbox" id="text-checkBox" type="checkbox" />
    </div>

    <button @click="login()" id="btnRegistration">LOGIN</button>
    <div class="linkSign_In">
      <a @click="$router.push('register')">You don't have account? To page sign up</a>
    </div>
  </div>
</template>

<script>
import LogoBar from '../components/LogoBar.vue'
import { mapState } from 'vuex'

export default {
  name: 'logoBar',
  data: function () {
    return {
      mode: 'login',
      email: '',
    }
  },
  components: {
    LogoBar
  },
methods: {
  login: function () {
      const self = this;
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
      }).then(function () {
        self.$router.push('/home');
      }, function (error) {
        console.log(error);
      })
    },
  }

}
</script>

<style scoped>

#titleRegister{
  padding: 10px;
  color: black;
  text-align: center;
  font-size: 4em;
  font-weight: bolder;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
@media only screen and (max-width: 700px) {
#titleWelcome{
    font-size: 3em;
}   
#titleRegister{
  font-size: 2.4em;
}
}
#btnRegistration{
        border: 3px solid black;

      margin: auto;
    text-decoration: none;
    background: black;
    color: white;
    text-align: center;  
    font-size: 1.8em;
    font-weight: bolder;
    padding: 1%;
    width: 60%;
    cursor: pointer;
}
a{
  text-decoration: underline;
  cursor: pointer;

}
.linkSign_In{
          margin: auto;
    font-size: 1em;
   text-align: left;
   width:60%;
   }
/*input*/
.input {
  font-size: 32px;
  font-size: max(32px, 1em);
  font-family: inherit;
  padding: 0.25em 0.5em;
  background-color: #fff;
  border: 2px solid black;
  border-radius: 4px;
  transition: 180ms box-shadow ease-in-out;
  width: 80vw;
  letter-spacing:normal;
}

.input:focus {
  outline: 3px solid transparent;
}

.input:not(textarea) {
  line-height: 1;
  height: 2.25rem;
}


label {
    color: darkgray;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1;
}

.input + label {
  margin-top: 1rem;
}
.form-group-registration {
  display: grid;
  place-content: center;
  grid-gap: 0.5rem;
  font-family: "Baloo 2", sans-serif;
  padding: 1rem;
  text-align: left;
}
button:hover{
        color:white;
background-color: black;
}

#text-checkBox{

    background-color: white;
    border-radius: 50%;
    vertical-align: middle;
    border: 3px solid black;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer; 
     height: 20px;
  width: 20px;
}

#text-checkBox:checked {
    background-color: rgb(14, 14, 14);
}
.checkForm label{
  color:black
}
</style>