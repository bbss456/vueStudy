<template>
  <div>
    <h2>{{message}}</h2>
    <button @click="showTitle">Click</button>
    <span>{{ title }}</span>
  </div>
</template>

<script>

  export default {
    
    name: 'global-component',

    props: {
      message: {
        type : String,
        required: true
      }
    },

    data () {
      return {
        title: void 0
      }
    },
    methods: {
      showTitle () {
        this.title = 'Global Component!!'
      }
    }
  }
</script>

<style scoped>
  div {
    padding: 20px
  }

  div span {
    margin: 20px
  }
</style>