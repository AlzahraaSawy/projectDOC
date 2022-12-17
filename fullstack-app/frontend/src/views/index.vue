<template>
    <div>
      
      <productList/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import productList from '@/components/productList.vue'
  
  export default {
    name: 'index',
    components: {
      productList
    }
  }
  </script>
  