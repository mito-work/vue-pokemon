<template>
  <h2>色で調べる</h2>
  <section>
    <label>
      <select v-model="selected">
        <option value="" disabled>選択してください</option>
        <option :value="selectedItem" v-for="selectedItem in selectedItems" :key="selectedItem">
          {{ selectedItem }}
        </option>
      </select>
      <ul class="p-pokelist">
        <li v-for="(val, index) in results" :key="index"><img :src="val.img" alt="" /></li>
      </ul>
    </label>
  </section>
</template>
<script>
export default {
  data() {
    return {
      selected: "",
      selectedItems: ["black", "blue", "brown", "gray", "green", "pink", "purple", "red", "white", "yellow"],
      allPokeList: [],
      showPokeList: [],
    };
  },
  methods: {
    async showPoke() {
      for (let i = 1; i < 151; i++) {
        const images = await this.getPoke(i);
        const color = await images.color.name;
        const img = await images.sprites.front_default;
        this.allPokeList.push({ img: img, color: color });
        this.showPokeList = this.allPokeList;
      }
      if (this.allPokeList.length == 0) {
        throw new Error("データを加工できませんでした");
      }
    },

    async getPoke(i) {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        const res2 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}`);
        if (res.ok && res2.ok) {
          const data = await res.json();
          const data2 = await res2.json();
          const data3 = await Object.assign(data2, data);

          return data3;
        } else {
          throw new Error("データーが取得できませんでした");
        }
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  computed: {
    results() {
      return this.showPokeList.filter((val) => {
        return this.selected != "" ? val.color == this.selected : true;
      });
    },
  },
  created() {
    this.showPoke();
  },
};
</script>
<style scoped>
select {
  border: none;
  padding: 1rem 8rem;
  border-radius: 1.5rem;
  font-size: 1.4rem;
  text-align: center;
}
option {
  text-align: center;
  font-size: 1.4rem;
  padding: 0.5rem 0;
  color: #6a6770;
}
</style>
