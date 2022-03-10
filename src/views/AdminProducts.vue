<template>
  <div class="products">
    <h2>Products</h2>
    <ProductsList />
  </div>
</template>

<script>
import ProductsList from "@/components/ProductsList.vue";

export default {
  name: "AdminProducts",
  components: {
    ProductsList,
  },
};
</script>

