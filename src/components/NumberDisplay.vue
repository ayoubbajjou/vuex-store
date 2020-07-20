<template>
  <div>
    <h2>
        [
        <template v-for="(number, index) in getNumbers">
            <p class="numbers" @click="removeNumber(index)" :key="index">{{ number }}</p>,
        </template>
        ]
    </h2>
  </div>
</template>

<script>
export default {
  name: "NumberDisplay",
  computed: {
    getNumbers() {
      return this.$store.getters.getNumbers;
    }
  }, 
  methods: {
      removeNumber(index) {
          return this.$store.dispatch('removeNumber', index)
      }
  }
};
</script>

<style>
.numbers {
    display:inline-block
}
</style>