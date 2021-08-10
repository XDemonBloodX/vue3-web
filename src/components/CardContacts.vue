<template>
  <div class="card">
    <div class="info">
      <div class="name"> {{ fullName }}</div>
      <div class="infoPhone">
         {{ contact.phone }}
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  props: { contact: Object },
  setup (props) {
    const fullName = computed(() => `${props.contact.firstName} ${props.contact.lastName}`)

    return { fullName }
  } 
}
</script>

<style scoped>
.name{
    font-size: 20px;
}
.infoPhone{
    margin: auto;
}
.card{
    border: solid rgb(63, 63, 63) 3px;
    width: 100%;
    height: 9;
}
.infoPhone{
    padding: 0;
    margin: 0;
}
.contact-card {
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    width: 100%;
    background-color: white;
    margin-bottom: 3rem;
  }

</style>
