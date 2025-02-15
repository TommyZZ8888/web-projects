import {createRouter,createWebHistory,RouteComponent} from 'vue-router'

const routes: Array<RouteComponent> = [
  {
    path: "/A",
    component: () => import("../components/RouterA.vue"),
  },
  {
    path: "/B",
    component: () => import("../components/RouterB.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;