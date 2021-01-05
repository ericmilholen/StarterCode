<template>
  <BContainer>
    <BButton
      variant="primary"
      @click="getPageData()"
    >Update Data</BButton>
    
    <h1 v-if="response">Data Receieved: {{ response }}</h1>
  </BContainer>
</template>

<script>
import PageService from "../services/PageService"
// @ is an alias to /src
export default {
  name: 'Home',

  data() {
    return {
      response: "",
    }
  },

  components: {},

  created: async function() {
    console.log("Hey I just got created")
    this.getPageData()
  },

  methods: {
    async getPageData() {
    this.response = await PageService.s_home()
    }
  },
}
</script>
