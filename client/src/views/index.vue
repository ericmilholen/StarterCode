<template>
  <BContainer>
    <BCarousel :slideObjs="slideObjs" />
    <BButton
      variant="primary"
      @click="getPageData()"
    >Update Data</BButton>
    
    <h1 v-if="reqData">Data Receieved: {{ reqData }}</h1>
  </BContainer>
</template>

<script>
import BCarousel from '@/components/BCarousel'
import PageService from '@/services/PageService'

export default {
  name: 'Home',

  data() {
    return {
      slideObjs: [
        {
          caption: 'Welcome',
          text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
          imgSrc: require('../assets/images/salon.jpeg')
        }, 
        {
          caption: 'First slide',
          text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
          imgSrc: 'https://picsum.photos/1024/480/?image=52'
        },
      ],
      reqData: '',
    }
  },

  components: {
    BCarousel,

  },

  created: async function() {
    console.log("Hey I just got created")
    this.getPageData()
  },

  methods: {
    async getPageData() {
    this.reqData = await PageService.s_()
    }
  },
}
</script>
