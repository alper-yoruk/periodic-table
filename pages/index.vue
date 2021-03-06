<template>
  <div class="container">
    <h1>Periodic Table</h1>
    <div class="element-container">
      <div
        v-for="item in response"
        :key="item.atomicNumber"
        class="element-outer"
        :style="{ backgroundColor: '#' + item.cpkHexColor.toLowerCase() }"
        :class="item.groupBlock"
      >
        <div class="element">
          <span class="text-big">{{ item.atomicNumber }}</span>
          <span class="text-big">{{ item.symbol }}</span>
          <span class="text-small">{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const response = await $axios.$get('https://periodictable.p.rapidapi.com/')
    return { response }
  },
}
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}
.element-container {
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  grid-template-rows: repeat(7, 1fr) [row6x] 1fr [row7x] 1fr;
  grid-gap: 2px;
}
.element-container::before {
  content: '';
  grid-row: row6x / div 2;
  grid-column: 1 / 3;
}
.element-outer:nth-child(2) {
  grid-column-start: -2;
}
.element-outer:nth-child(5),
.element-outer:nth-child(13) {
  grid-column-start: 13;
}
.element-outer:nth-child(72),
.element-outer:nth-child(104) {
  grid-column-start: 4;
}
.lanthanoid {
  grid-row: row6x;
  position: relative;
  top: 1em;
}
.actinoid,
.element-outer:nth-child(103) {
  grid-row: row7x;
  position: relative;
  top: 1em;
}

.element-outer {
  display: flex;
  align-items: center;
  justify-content: center;
}
.element {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px 0;
  cursor: pointer;
}
.text-big {
  font-size: 14px;
}
.text-small {
  font-size: 12px;
}
</style>
