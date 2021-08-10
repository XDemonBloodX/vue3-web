<template>
  <qrcode-vue :value="JSON.stringify(username)" :size="size" level="H" />
  <h4>Token valid for 12 Hours</h4>
</template>
<script>
  import QrcodeVue from 'qrcode.vue'

  export default {
    props: ['username'],
    data() {
      return {
        value: this.username,
        size: 400,
      }
    },
    components: {
      QrcodeVue,
    },

  }
</script>