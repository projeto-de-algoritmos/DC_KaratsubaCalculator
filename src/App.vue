<script setup lang="ts">
  import Header from './components/header.vue'
  import Body from './components/body.vue'
</script>

<style>

#app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 !important;
}

body{
  min-height: 0 !important;
  background: #012e37 !important;
}
#app {
    grid-template-columns: 1fr !important;
    min-width: 100% !important;
    background-color: #012e37;
}
.vue-select{
  margin: 10px !important;
}
.vue-dropdown, .vue-input input{
  color: #000000 !important;
}
  .vue-select-header{
      height: 40px !important;
      background: #ffffff !important;
      display: flex;
      align-items: center;
      
    }
</style>
<template>
    <Header msg="KaratsubaCalculator" />
    <Body />
</template>