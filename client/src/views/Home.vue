<template>
  <div class="container">
    <h1>{{ value }}</h1>
    <h1>{{ response }}</h1>
    <button class="btn btn-primary">Litty Again</button>
    <BButton variant="primary">Yes</BButton>
  </div>
</template>

<script>
import PageService from "../services/PageService"
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

  created: async function() {
    console.log("Hey I just got created")
    this.response = await PageService.s_home()
  },
}
</script>
