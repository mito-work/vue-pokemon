<template>
  <h2>うしろ姿クイズ</h2>
  <!-- <button type="button" @click="makePokeList">私はだれ？</button> -->
  <ul class="p-pokelist">
    <li v-for="(val, index) in pokeImgList" :key="index">
      <img :src="val" alt="" />
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      pokeJson: [],
      pokeList: [],
      pokeImgList: [],
    };
  },
  methods: {
    //jsonファイルから値を取得
    async makePokeList() {
      try {
        for (let i = 1; i <= 150; i++) {
          const data = await this.getPoke(i);
          //画像取得
          const img = await data.sprites.back_default;
          this.pokeImgList.push(img);
        }
        if (this.pokeImgList == "") {
          throw new Error("データが取得できませんでした");
        }
      } catch (error) {
        console.log(error.message);
      }
    },

    async getPoke(id) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      console.log(res);
      if (res.ok) {
        this.pokeJson = await res.json();

        return this.pokeJson;
      }
      if (!res.ok) {
        throw new Error("データがありません");
      }
    },
  },
  created() {
    this.makePokeList();
  },
};
</script>
<style>
h2 {
  margin: 2rem 0;
}
button {
  margin-bottom: 2rem;
}
.p-pokelist {
  display: flex;
  align-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}
</style>
