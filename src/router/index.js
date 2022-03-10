import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "ViewFront",
    component: () => import("../views/ViewFront.vue"),

    children: [
      {
        // #Note: default path is null
        path: "",
        name: "Home",
        component: () => import("../views/PageHome.vue"),
      },
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/AboutPage.vue"),
      },
    ],
  },
  /* end of ViewFront */
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/ViewConsole.vue"),

    children: [
      {
        // #NOTE: children path has no '/'
        path: "products",
        name: "Products",
        component: () => import("../views/AdminProducts.vue"),
      },
    ],
  },
  /* end of ViewConsole */
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 'Bootstrap-class'
  linkActiveClass: "active",
});

export default router;
