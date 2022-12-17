<template>
    <div>
      <AddProduct />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import AddProduct from "@/components/AddProduct.vue";
  
  export default {
    name: "create",
    components: {
      AddProduct,
    },
  };
  </script>
  