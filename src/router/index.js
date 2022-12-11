import { createRouter, createWebHistory } from "vue-router";

//ページのコンポーネントの読み込み
import Home from "../components/Home.vue";
import Color from "../components/Color.vue";
import Type from "../components/Type.vue";
import Siruetto from "../components/Siruetto.vue";
import Search from "../components/Search.vue";

//ルート情報
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/color",
    name: "Color",
    component: Color,
  },
  {
    path: "/type",
    name: "Type",
    component: Type,
  },
  {
    path: "/siruetto",
    name: "Siruetto",
    component: Siruetto,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
];
//設定した値を渡す
const router = createRouter({
  //createWebHistoryを使うことでhtmlの相対パス形式でかける
  history: createWebHistory(),
  routes,
});
export default router;
