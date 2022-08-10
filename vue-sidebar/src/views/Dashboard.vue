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
 width:100vw ;
 font-family: 'Albert Sans', sans-serif;
    font-weight: 500;
}

.content{
  background: white;
  border-radius: 40px 0px 0px 0px;
  margin: 0px;
}
.wrapper{
  margin: 10px;

background: yellow;
  height: 95vh;
  border-radius: 20px;
    display: grid;
grid-auto-rows: minmax(100px, auto);
   grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap:1em;
    grid-template-areas: 
  " Header Header Header Header"
  " Sales Sales Sales Sales" 
  " Stats Stats Stats Popular"
  " Stats Stats  Stats Popular"
  " Stats Stats Stats Popular"
  " Stats Stats Stats Popular";
}
.Sales{
  grid-area: Sales;
  position: relative;

  top: 12%; 
  display: flex;  
  flex-direction: row;
  justify-content: space-between;
  height: 79.9%;
}
.Sales div{
    padding: 1em;
    border-radius: 20px;
}

.Header {
  padding: 0;
  height: 100%;
  grid-area: Header;
    top: 0px;
    left: 0px;
    display: flex;
    flex-direction: row;
    width: 100%;
  
}

.Stats {
  grid-area: Stats;
  background: gray;
  border-radius: 10px;
}
</style>