<template>
  <header class="l-header">
    <h1 class="p-header__title">
      <RouterLink :to="{ name: 'Home' }">{{ title }}</RouterLink>
    </h1>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: "オリジナルポケモン図鑑",
    };
  },
};
</script>
<style scoped>
.p-header__title a {
  font-size: 3rem;
}
</style>
