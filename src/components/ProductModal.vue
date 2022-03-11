<template>
  <div class="products-modal">
    <!-- <h4>Products-Modal</h4> -->

    <transition>
      <div class="lightbox">
        <div
          class="modal-mask"
          :style="modalStyle"
        >
          <div
            class="modal-container"
            @click.self="toggleModal"
          >
            <div class="modal-body">
              <header>
                <slot name="header">
                  Default Header
                </slot>

                <button
                  type="button"
                  class="btn-close"
                  aria-label="Close"
                  @click.self="toggleModal"
                />
              </header>
              <hr>

              <main>
                <slot name="body">
                  <!-- Default Body -->
                </slot>

                <!-- <h4>propsItem--</h4>
                {{ propsItem }}
                <hr> -->

                <div class="row g-2">
                  <section class="col-md">
                    <div class="form-floating">
                      <input
                        id="title"
                        v-model="copyItem.title"
                        type="text"
                        class="form-control"
                        placeholder="標題文字"
                      >
                      <label for="title">產品標題</label>
                    </div>
                  </section>
                  <!-- end of col -->

                  <section class="col-md">
                    <div class="form-floating">
                      <input
                        id="category"
                        v-model="copyItem.category"
                        type="text"
                        class="form-control"
                        placeholder="分類文字"
                      >
                      <label for="title">產品分類</label>
                    </div>
                  </section>
                  <!-- end of col -->

                  <section class="col-md">
                    <div class="form-floating">
                      <input
                        id="unit"
                        v-model="copyItem.unit"
                        type="text"
                        class="form-control"
                        placeholder="單位文字"
                      >
                      <label for="title">單位量詞</label>
                    </div>
                  </section>
                  <!-- end of col -->

                  <div class="row g-2">
                    <section class="col-md">
                      <input
                        id="num"
                        v-model="copyItem.num"
                        type="range"
                        class="form-range"
                        min="0"
                        max="50"
                      >
                      <label
                        for="num"
                        class="form-label"
                      >【數量：{{ copyItem.num }}】</label>
                    </section>
                    <!-- end of col -->
                  </div>
                  <!-- <div class="row g-2"></div> -->

                  <section class="col-md">
                    <div class="form-floating">
                      <input
                        id="origin_price"
                        v-model.number="copyItem.origin_price"
                        type="text"
                        class="form-control"
                        placeholder="原價"
                      >
                      <label for="title">原價</label>
                    </div>
                  </section>
                  <!-- end of col -->

                  <section class="col-md">
                    <div class="form-floating">
                      <input
                        id="price"
                        v-model.number="copyItem.price"
                        type="text"
                        class="form-control"
                        placeholder="售價"
                      >
                      <label for="title">售價</label>
                    </div>
                  </section>
                  <!-- end of col -->

                  <section class="col-md">
                    <div class="form-check form-switch">
                      <input
                        id="flexSwitchCheckChecked"
                        v-model="copyItem.is_enabled"
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
                          :class="
                            copyItem.is_enabled
                              ? 'text-success'
                              : 'text-secondary'
                          "
                        >
                          {{ copyItem.is_enabled ? "開放中" : "停用" }}
                        </span>
                      </label>
                    </div>
                  </section>
                  <!-- end of col -->

                  <div class="row g-2">
                    <div class="form-floating">
                      <textarea
                        id="floatingTextarea"
                        v-model="copyItem.description"
                        class="form-control"
                        placeholder="產品描述"
                      />
                      <label for="floatingTextarea">產品描述</label>
                    </div>
                  </div>
                  <!-- end of row -->

                  <div class="row g-2">
                    <div class="form-floating">
                      <input
                        id="content"
                        v-model="copyItem.content"
                        type="text"
                        class="form-control"
                        placeholder="簡要"
                      >
                      <label for="title">簡要</label>
                    </div>
                  </div>
                  <!-- end of row -->
                </div>
                <!-- end of row -->

                <!-- 
                    <h4>propsItem.body</h4>
                    {{ propsItem.title }}
                    {{ propsItem.description }}
                    {{ propsItem.category }}
                    {{ propsItem.content }}
                    {{ propsItem.price }}
                    {{ propsItem.origin_price }}
                    {{ propsItem.unit }} 
                  -->
              </main>
              <hr>

              <footer>
                <slot name="footer">
                  <!-- Default Footer -->
                </slot>

                <div class="row g-2">
                  <!-- <section class="col-md">
                  </section> -->
                  <!-- end of col -->
                  <button
                    type="button"
                    class="btn btn-info"
                    @click="toggleModal"
                  >
                    Save
                  </button>

                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    @click.self="toggleModal"
                  >
                    Close
                  </button>
                </div>
              </footer>
            </div>
          </div>
        </div>

        <button
          type="button"
          class="btn btn-outline-primary"
          @click="isShow = true"
        >
          Edit
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
// /* global bootstrap */
// import { bootstrap } from "bootstrap";
// import Modal from 'bootstrap/js/dist/modal';
// const { Modal } = bootstrap;

export default {
  name: "ProductModal",

  props: {
    propsItem: {
      type: Object,
      default() {
        return {
          category: "sample蛋糕",
          content: "尺寸：6寸",
          description: "法式煎薄餅加上濃郁可可醬，呈現經典的美味及口感。",
          id: "-McJ-VyqaFlLzUMmpPpm",
          is_enabled: 1,
          origin_price: 700,
          price: 600,
          title: "暗黑千層",
          unit: "個",
          num: 15,
          imageUrl:
            "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
          imagesUrl: [
            "https://images.unsplash.com/flagged/photo-1557234985-425e10c9d7f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA5fHxjYWtlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
            "https://images.unsplash.com/photo-1540337706094-da10342c93d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
          ],
        };
      },
    },
    /* end of props: */
  },

  data() {
    return {
      isShow: false,
      copyItem: {},
      // productModal: {},
    };
    /* end of data() */
  },

  computed: {
    modalStyle() {
      return { display: this.isShow ? "" : "none" };
    },
    /* end of computed: */
  },

  mounted() {
    // #NOTE: do NOT edit outer value
    // this.copyItem = this.propsItem;
    // #NOTE: MUST copy the object
    this.copyItem = { ...this.propsItem };
    /* end of mounted() */
  },

  methods: {
    toggleModal() {
      console.log("click");
      this.isShow = !this.isShow;
    },
    /* end of methods: */
  },
};
/* end of export */
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.modal-mask {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.modal-container {
  display: table-cell;
  vertical-align: middle;
  cursor: pointer;
}
/* end of mask */

.modal-body {
  position: relative;
  display: block;

  width: 50%;
  min-width: 360px;
  margin: 0 auto;
  padding: 2rem;

  border-radius: 0.24rem;
  background-color: #fff;
  cursor: auto;
}

.btn-close {
  position: absolute;
  display: inline-block;

  right: 2rem;
  top: 2rem;
}
</style>
