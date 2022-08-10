<template>
  <div class="dashboard">
    <Sidebar/>
    <div class="content"> 
      <div class="wrapper">
<router-view/>
</div>
      
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
export default {
    name: "Home",
    components: { Sidebar }
}
</script>

<style scoped>
.dashboard{

 display: grid;
 grid-template-columns: 1fr 5fr;
 background:rgb(69, 154, 125);
 height: 100vh;

 font-family: 'Albert Sans', sans-serif;
    font-weight: 500;
  
}

.content{
  background: white;
  border-radius: 40px 0px 0px 40px;
  margin: 0px;
  width: 83.5vw;
  height:100vh;

 
}
.wrapper{
  margin: 10px;

  height: 97vh;
  border-radius: 20px;
    display: grid;
grid-auto-rows: minmax(100px, auto);
   grid-template-columns: 1fr 1fr 1fr 1fr;
   grid-template-rows: 1fr 1fr 1fr 5fr 5fr 5fr;
  grid-gap:1em;
    grid-template-areas: 
  " Header Header Header Header"
  "mid mid mid mid "
  "Sales Sales Sales Sales "
  " Stats Stats Stats Popular"
  " Stats Stats  Stats Popular"
  " Stats Stats Stats Popular"
}

</style>