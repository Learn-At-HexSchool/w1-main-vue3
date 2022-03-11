import { createApp } from "vue";
import 'bootstrap';
// import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import VueAxios from "vue-axios";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);
app.use(VueAxios, axios);
// app.use(bootstrap);
// app.use(router).use(bootstrap);

app.mount("#app");
