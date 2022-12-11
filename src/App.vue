<script>
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
export default {
  components: {
    LayoutHeader,
    LayoutFooter,
  },
};
</script>

<template>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet" />
  </head>
  <LayoutHeader />
  <main class="l-main">
    <router-view></router-view>
  </main>

  <LayoutFooter />
</template>

<style scoped>
.l-main {
  margin: 3rem 0;
}
</style>
