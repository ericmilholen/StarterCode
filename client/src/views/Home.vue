<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{ value }}</h1>
    <h1>{{ response }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',

  data() {
    return {
      response: "",
      value: 0
    }
  },

  components: {
  },

  created: function() {
    console.log("Hey I just got created")
    this.value = 10
  
  },
}
</script>
