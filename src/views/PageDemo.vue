<template>
  <div class="demo">
    <h2 class="text-warning">
      Demo
    </h2>
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
