<template>
  <div id="app">
 
  <router-view/>
  
  </div>
 

</template>
<script>  
  export default{
    beforeCreate(){
      alert('Access Dashboard?');
    },
    // created(){
    //   alert('created');
    // },
    // beforeMount(){
    //   alert('beforeMount');
    // }
  }
</script>

<style>

:root{
    /* colors */
    --primary-color:rgb(69, 154, 125);
    --font-color:#fff;
    }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

</style>
