<template>
  <div class="LogoBar" @click="$router.push('/')">
      <img src="@/assets/logo-cts.png" alt="">
  </div>
</template>

<style scoped>
.LogoBar{
    position: relative;
    border: solid 5px black;
    border-radius: 0 0 30px 0 ;
    height: 140px;
    width: 559px;
}
img{
    height: 90%;
    width: 90%;
}

@media only screen and (max-width: 600px) {
    .LogoBar{
    height: 50%;
    width: 90%;
    }
}
</style>
