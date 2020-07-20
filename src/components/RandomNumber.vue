<template>
  <div>
    <button @click="addRandomNumber">
     Add random number
    </button>
  </div>
</template>

<script>
export default {
  name: "RandomNumber",
  data() {
    return {
      minNumber: 0,
      maxNumber: 9
    };
  },
  methods: {

    addRandomNumber() {
      this.$store.dispatch("addRandomNumber", Number(this.RandomNumber()));
    },

    RandomNumber() {
        return Math.floor (Math.random() * ( Number(this.maxNumber) - Number(this.minNumber) + 1 ) + Number(this.minNumber) );
    }

  }
};
</script>
