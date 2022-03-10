<template>
  <div class="products-list">
    <h3>Products-List</h3>

    <!-- <ProductModal>
      <template #body />
    </ProductModal> -->

    <main class="container">
      <h4>main</h4>
      {{ products }}
      <div class="row row-col-4">
        <div class="col">
          產品名稱
        </div>
        <div class="col">
          原價
        </div>
        <div class="col">
          售價
        </div>
        <div class="col">
          是否啟用
        </div>
        <div class="col">
          查看細節
        </div>
      </div>
      <!-- end of row -->
      <div
        v-for="item in products"
        :key="item.id"
        class="row row-col-4"
      >
        <div class="col">
          {{ item.title }}
        </div>
        <div class="col">
          {{ item.origin_price }}
        </div>
        <div class="col">
          {{ item.price }}
        </div>
        <div class="col">
          <!-- #TODO:_Toggle-Switch -->
          <span
            v-if="item.is_enabled"
            class="text-success"
          >啟用</span>
          <span v-else>未啟用</span>
        </div>
        <div class="col">
          <button
            type="button"
            class="btn btn-primary"
            @click="showInfo(item)"
          >
            查看細節
          </button>
        </div>
      </div>
      <!-- end of row -->
      <div class="row">
        <div class="col">
          目前有 <span>{{ products.length }}</span> 項產品
        </div>
      </div>
      <!-- end of row -->
    </main>
  </div>
</template>

<script>
import data from "@/data.json";
// import ProductModal from "@/components/ProductModal.vue";

export default {
  name: "ProductsList",

  // components: { ProductModal, },

  data() {
    return {
      // products: [],
      products: data.products,
      itemInfo: {},
    };
  },

  method: {
    // getProducts() {
    //   // this.products = data.products;
    // },
  },
  /* end of method: */

  mounted() {
    console.log("mounted");
    // this.getProducts();
  },
  /* end of mounted() */
};
</script>
