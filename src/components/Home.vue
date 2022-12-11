<template>
  <div class="p-header">
    <nav class="p-header__nav">
      <ul class="p-globalnav">
        <li><RouterLink :to="{ name: 'Color' }">色で調べる</RouterLink></li>
        <li><RouterLink :to="{ name: 'Type' }">タイプで調べる</RouterLink></li>
        <li><RouterLink :to="{ name: 'Siruetto' }">シルエットクイズ</RouterLink></li>
        <li><RouterLink :to="{ name: 'Search' }">なまえで調べる</RouterLink></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.p-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 16px #006400;
  padding: 1rem 2.5rem;
  border-radius: 2.5rem;
  margin: 0 auto;
  width: 500px;
}
.p-globalnav {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
.p-globalnav li a {
  font-size: 1.5rem;
}
</style>
