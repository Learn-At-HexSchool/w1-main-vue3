<template>
  <!-- 
      #NOTE: 
      https://bootstrap5.hexschool.com/docs/5.0/content/tables/#anatomy
    -->
  <div class="row products-list py-3 container">
    <h3>產品列表 _Products-List</h3>

    <section class="col table-responsive">
      <table class="table table-hover align-middle mt-6">
        <!-- <caption>List of products</caption> -->
        <thead>
          <tr>
            <th>產品名稱</th>
            <th>原價</th>
            <th>售價</th>
            <th>是否啟用</th>
            <th>查看細節</th>
          </tr>
        </thead>
        <tbody>
          <!-- 
              #NOTE:【計數器放外層的標籤】
              https://book.vue.tw/CH1/1-6-conditions-and-flow-control.html
          -->
          <tr
            v-for="item in products"
            :key="item.id"
          >
            <td width="150">
              {{ item.title }}
            </td>
            <td width="120">
              {{ item.origin_price }}
            </td>
            <td width="120">
              {{ item.price }}
            </td>

            <td width="150">
              <!-- #TODO:_Toggle-Switch -->
              <div class="form-check form-switch">
                <input
                  id="flexSwitchCheckChecked"
                  v-model="item.is_enabled"                  
                  :true-value="1"
                  :false-value="0"
                  class="form-check-input"
                  type="checkbox"
                >
                <label
                  class="form-check-label"
                  for="flexSwitchCheckChecked"
                >
                  <span
                    :class="item.is_enabled ? 'text-success' : 'text-secondary'"
                  >
                    {{ item.is_enabled ? "開放中" : "停用" }}
                  </span>
                </label>
                <!-- {{ item.is_enabled }} -->
              </div>

              <!-- <span
                v-if="item.is_enabled"
                class="text-success"
              >啟用</span>
              <span v-else>未啟用</span> -->
            </td>

            <td width="120">
              <ProductModal
                :props-item="item"
                v-bind="item"
              >
                <template #header>
                  {{ item.title }}
                </template>

                <!-- <template #body>
              <h3>itemInfo</h3>
              {{ itemInfo }}
              <hr>
            </template> -->
              </ProductModal>

              <!-- <button
                type="button"
                class="btn btn-primary"
                @click="showInfo(item)"
              >
                查看細節
              </button> -->
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2">
              目前共有【<span>{{ products.length }}</span>】項產品
            </td>
          </tr>
        </tfoot>
      </table>
    </section>
    <!-- end of col-list -->
  </div>
</template>

<script>
import data from "@/data.json";
import ProductModal from "@/components/ProductModal.vue";

export default {
  name: "ProductsList",

  components: { ProductModal },

  data() {
    return {
      // products: [],
      products: data.products,
      itemInfo: {},
    };
  },

  method: {
    showInfo(item) {
      this.itemInfo = item;
    },
    /** end of showInfo() */

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

<style>
.products-list {
  min-width: 360px;
}
</style>
