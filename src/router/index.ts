import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import { redirectIfAuthenticatedGuard } from "../guards/redirectIfAuthenticated.guard";

const routes: RouteRecordRaw[] = [
  {
    path: "",
    component: LoginView,
  },
  {
    path: "/dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/DashboardView.vue"),
    beforeEnter: redirectIfAuthenticatedGuard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  //Scroll behavior ot handle new route positions
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
