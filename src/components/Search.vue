<template>
  <h2>なまえで調べる</h2>
  <section>
    <input type="search" v-model="search" />
    <!-- <button type="button" @click="results">調べる</button> -->
  </section>

  <ul class="list">
    <li v-for="(val, index) in results" :key="index">
      <img :src="val.img" alt="" />
      <p>{{ val.lang }}</p>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      allPokeList: [],
      pokeList: [],
      showImg: "",
      lang: "",
    };
  },
  methods: {
    async getPoke(i) {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        const res2 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}/`);
        if (res.ok && res2.ok) {
          const data = await res.json();
          const data2 = await res2.json();
          this.allPokeList = await Object.assign(data, data2);

          return this.allPokeList;
        } else {
          throw new Error("データを取得できませんでした");
        }
      } catch (error) {
        console.log(error.message);
      }
    },
    async getAllPoke() {
      try {
        for (let i = 1; i <= 151; i++) {
          const data = await this.getPoke(i);
          const img = await data.sprites.front_default;
          const lang = await data.names[0].name;
          this.pokeList.push({ img: img, lang: lang });
        }
        if (this.pokeList.length != 0) {
        } else {
          throw new Error("データを成形できませんでした");
        }
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  computed: {
    results() {
      console.log(this.pokeList);
      if (this.search !== "") {
        return this.pokeList.filter((val) => {
          return val.lang.includes(this.search);
        });
      } else {
        return this.pokeList;
      }
    },
  },
  created() {
    this.getAllPoke();
  },
};
</script>
<style scoped>
input {
  border: none;
  padding: 1rem;
  width: 300px;
  height: 50px;
  border-radius: 1.5rem;
  font-size: 1.4rem;
}
.list {
  display: flex;
  flex-wrap: wrap;
}
</style>
