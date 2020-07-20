<template>
  <div id="app">
    <NumberDisplay/>
    <NumberSubmit/>
    <RandomNumber/>
  </div>
</template>

<script>
import NumberDisplay from "./components/NumberDisplay";
import NumberSubmit from "./components/NumberSubmit";
import RandomNumber from "./components/RandomNumber";

export default {
  name: "App",
  components: {
    NumberDisplay,
    NumberSubmit,
    RandomNumber
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
