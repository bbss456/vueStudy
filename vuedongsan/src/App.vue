<template>

  <!-- <header-vue> </header-vue> -->

  <div class="black-bg" v-if="modarBoolean==true">
    <div class="white-bg">
        <h4>상세페이지</h4>
        <p>상세페이지 내용</p>
    </div>
  </div>'

  <div class="menu">
    <a v-for="topNavigator in topNavigator" :key="topNavigator"> {{topNavigator}} </a>
  </div>
    

  <div v-for="(oneroomlist) in oneroomlist" :key="oneroomlist">
      <img :src="oneroomlist.image" class="room-img">
      <h4>이름:{{oneroomlist.title}}</h4>
      <p>가격:{{oneroomlist.content}}</p>
      <p>가격:{{oneroomlist.price}}</p>
  </div>

</template>

<script>

import data from './data.js'; 


export default {
  name: 'App',
  data() {
    return {
      oneroomlist : data,
      modarBoolean : false,
      declarationCount : [0,0,0],
      topNavigator : ['Home', 'Shop', 'About'],
      products: ['역삼동원룸', '천호동원룸', '마포구원룸']
    }
  },
  methods : {
    increase(){
      this.declarationCount ++
    }
  },

  components: {

  }
}
</script>

<style>

div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height: 100%;
  background: rgba(0, 0, 0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}

 .menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
 }
 .menu a {
  color: white;
  padding: 10px;
 }
</style>
