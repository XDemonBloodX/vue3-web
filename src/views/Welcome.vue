<template>
  <div class="WelcomePage">
    <LogoBar />
    <div id="titleWelcome">Website for cyber test systems contacts</div>
    <div class="row">
      <button @click="$router.push('login')" class="button">SIGN_IN</button>
      <button @click="$router.push('register')" class="button">SIGN_UP</button>
    </div>
  </div>
</template>
<script>
import LogoBar from "../components/LogoBar.vue";
export default {
  name: "Home",
  components: {
    LogoBar,
  },
};
</script>
<style scoped>
#titleWelcome {
  padding: 10px;
  color: black;
  text-align: center;
  margin-top: 3%;
  font-size: 5em;
}

.WelcomePage {
  position: relative;
}
.row {
  margin-top: 3%;
  position: relative;
  display: flex;
  justify-content: space-around;
}

button {
  cursor: pointer;

  position: relative;
  color: black;
  padding: 10%;
  width: 10px;
  height: 30vh;
  border: 3px solid black;
  width: 40%;
  padding: 0;
  line-height: 50px;
  text-align: center;
  font-size: 50px;
  transition: 0.3s;
  font-size: 2em;
  font-weight: bolder;
}
button:hover {
  color: white;
  background-color: black;
}

@media only screen and (max-width: 700px) {
  #titleWelcome {
    font-size: 3em;
  }
  button {
    font-size: 1.5em;
  }
}
</style>
