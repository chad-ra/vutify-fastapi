import Vue from "vue";
import VueRouter from "vue-router";
import LandingPageLayout from "../views/Layout/LandingPageLayout";
import TokenMenagementLayout from "../views/Layout/TokenManagementLayout";


Vue.use(VueRouter);


let landingPage = {
  path: "/",
  redirect: "/home",
  component: LandingPageLayout,
  name: "LandingPage Layout",
  children: [
    {
      path: "/home",
      name: "Home",
      component: () => import("@/views/public_pages/LandingPage.vue"),

    },
  ],
};

let TokenManagementPage = {
  path: "/",
  redirect: "/token_management",
  component: TokenMenagementLayout,
  name: "TokenMenagementLayout",
  children: [
    {
      path: "/token_management",
      name: "token_management",
      component: () => import("@/views/private_pages/admin/TokenManagement.vue"),
    },
  ],
};




const routes = [
  landingPage,
  TokenManagementPage,
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
