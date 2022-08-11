<template>
<!-- header -->

     <div class="Header">
        <div class="SandP">
            <div class="input-box">     
                <input type="text" placeholder="Search...">
                    <span class="search">
                        <a class="iconsearch"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></a>
                        <a class="mic"><font-awesome-icon icon="fa-solid fa-microphone" /></a>
                    </span>          
                 </div>
            <div class="profile">
                <div class="pic">
                    <span> <a class="user"><font-awesome-icon icon="fa-solid fa-user" /></a></span>             
                    <h5 class="name">Restaurant</h5>
                    <h4 class="name1">Tonduro</h4>
                    
                </div>    
                <a class="bell"><font-awesome-icon icon="fa-solid fa-bell" /></a>
            </div>
        </div>
    </div>
<!-- endheader -->


<!-- Sales -->
    <div class="Sales">
        <div class="mid">
            
            <h2 class="over">Overview</h2>   
            
            <div class="boxss">
                <select>
                  <option>Today</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                  <option>Option 5</option>
                </select>
            </div>
        </div>

        <div class="box box1">
            <div class="one">
                <div class="first">
                    <a class="file"><font-awesome-icon icon="fa-solid fa-file-lines" /></a>
                    <span>Orders</span>
                </div>
                <div class="second">
                    <span>$35,485<small>+2.8</small> </span>
               </div>
               <div class="last">
                    <small>Compared to ($25,450 last year)</small>
               </div>
            </div>   
        </div>
        <div class="box box2">
            <div class="two">
                <div class="first">
                    <a class="chart"><font-awesome-icon icon="fa-solid fa-chart-line" /></a>
                    <span>Avg. Order Amount</span>
                </div>
                <div class="second">
                    <span>$8,562<small>+2.8</small> </span>
                </div>
                <div class="last">
                    <small>Compared to ($56,232 last year)</small>
                    </div>
            </div>                    
        </div>
        <div class="box box3">
                <div class="three">
                      <div class="first">
                    <a class="users"><font-awesome-icon icon="fa-solid fa-user-group" /></a>
                    <span>Unique Customers</span>
                   </div>
                   <div class="second">
                    <span>$15,235<small>+2.8</small> </span>
                   </div>
                   <div class="last">
                    <small>Compared to ($25,450 last year</small>
                    </div>
                </div>
            </div>
            <div class="box box4">
                <div class="four">
                    <div class="first">
                    <a class="simplechart"><font-awesome-icon icon="fa-solid fa-chart-simple" /></a>
                    <span>Net Sales</span>
                   </div>
                   <div class="second">
                    <span>$9,584<small>+3.8</small> </span>
                   </div>
                   <div class="last">
                    <small>Compared to ($25,450 last year</small>
                    </div>
                </div>
            </div>
    </div>
<!-- end sales -->

<!-- Stats -->
    <div class="Stats">
        <div class="sel">
            <span>Sales Analytics</span>
          <canvas id="myChart" ></canvas>

        </div>   
        <!-- <div id="my_dataviz"></div> -->
    </div>
<!-- End Stats -->

<!-- Popular -->
    <div class="Popular">
        <h3 id="most">Most Popular Items</h3>
        <div class="MPItems">
            <ul>
                <li>
                    <a class="iconsearch"><font-awesome-icon icon="fa-solid fa-image" /></a>       
                    <span>Special Chicken</span>                    
                </li>
                <br>
                <li>
                    <a class="iconsearch"><font-awesome-icon icon="fa-solid fa-image" /></a>
                    <span>Chew mein</span>
                </li>
                <br>
                <li>
                    <a class="iconsearch"><font-awesome-icon icon="fa-solid fa-image" /></a>
                    <span>BBQ Park</span>
                </li>
                <br>
                <li>
                    <a class="iconsearch"><font-awesome-icon icon="fa-solid fa-image" /></a>
                    <span>BBQ Park</span>
                </li>
                <br>
                <li>
                    <a class="iconsearch"><font-awesome-icon icon="fa-solid fa-image" /></a>
                    <span>BBQ Park</span>
                </li>    
            </ul>
        </div>
    </div>
<!-- End Popular -->

<!-- Modal -->
    <button class="btn" @click="showModal = true"> Modal</button>
    <transition name="fade" appear>
        <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
    </transition>
    <transition name="slide" appear>
        <div class="modal" v-if="showModal">
            <h1>Lorem Ipsum</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, veritatis.</p>
            <button class="button" @click="showModal = false"> Close</button>
        </div>
    </transition>
<!-- END MODAL -->

</template>
<!-- END TEMPLATE -->

<!-- Script -->
<script>
import Chart from 'chart.js/auto';

    export default {
        name: 'App',
        data() {
        return {
        showModal: false
        }
        },
        mounted( ){
            console.log('component mounted')

            const ctx = document.getElementById('myChart');


const labels = ['January','Febrary','March','April','May','June','July'];
const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.5
  }]
};

            const myChart = new Chart (ctx, {
    type: 'line',
    data: data,

});

myChart;
        }
    };
</script>

<!-- style -->
<style>

/*header*/

.Header {
   
    grid-area: Header;
    height: 10vh;
    width: 100%;
   
    border-radius: 10px;
    position: relative;
}
.SandP{
    position: relative;
    width: 100%;
    height: 10vh;
    border-radius: 10px;

}
.input-box{
    position: absolute;
    height: 55px;
    top:0px;
    width: 79%;
    margin-right: 30px;
    border-radius: 15px;
   
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1)
}

.input-box input {
    position: relative;
    height: 95%;
    width: 90%;
    top: 0;
    left: 1%;
    outline: none;
    border: none;
    border-radius: 15px;
    font-size: 16px;
    font-weight: 400;
    color: #333;


}

.input-box .iconsearch{
    position: absolute;
    left: 1%;
    top: 20%;
     font-size: 30px;
  color: black;
   cursor: pointer;
}


.input-box .mic{
    position: absolute;
  right: 0.5%;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    color: grey;
    padding: 5px;
}

.profile{
   position: absolute;
   top:0 ;
   right: 0;
   width:20%;
   height: 55px;
   background: var(--font-color);
   border-radius: 15px;
   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1)
   
   
}

.profile .pic{
    position: relative;
    height: 55px;
    top:-20px;
    color: red;
}

.profile .bell{
    position: absolute;
    right: 17px;
    top: 15px;
    font-size: 20px;
    color: red;
}

.profile .pic .user{
    font-size: 30px;
    position: absolute;
    top: 12px;
    left: 10px;

}
.profile .pic .name{
    position: relative;
    top: 10px;
    left: 0px;
    color: gray;
}
.profile .pic .name1{
  position: relative;
  top:-10px;
  left:0px;
  color: black;
}
/*end-header*/


/* SALES */
.Sales{
   
  grid-area: Sales;
  position: relative;
  top:23%; 
  display: flex;  
  flex-direction: row;
  justify-content: space-between;
  height: 20vh;
}
.Sales div{
    padding: 1em;
    border-radius: 20px;
}
/* mid */
.mid{
    position: absolute;
    top:-45%;
    color: #000;
    left: 0;
    width: 79vw;
    display: flex;
   height:10vh ;
}
.mid .boxss{
    position: absolute;
    right: 0;
    top:20%;
 
}
.mid .boxss select{
        border-radius: 10px;
    padding: 1px;
    width:80%;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1)
 
}
/* end mid */
.box1{
    grid-column: 1;
    grid-row: 1 / span 2 ;
    width: 21%;
    height: 60%;
    background: var(--primary-color) !important;
    /* display: flex;
    flex-direction: column; */
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1)
}
.box1 .one{
    padding: 0%;
    padding-top: 0%;
}
.box1 .first{
    color: rgb(243, 246, 248, 1);
    padding-right: 100px;
    font-size: 1rem;
    padding-top: 0%;
    padding-bottom: 0%;
}
.box1 .first .file{
    font-size:150%;
    right: 10px;
    padding-right: 15px;
}
.box1 .second{
    color:  var(--font-color);;
    font-size: 1.2rem;
    padding-bottom: 0%;
    padding-top: 7%;
    top: 10px;
    padding-right: 85px;

}
.box1 .second small{ 
    color: rgb(243, 246, 248, 1);
    padding-left: 7px;
}
.box1 .last{
    color: rgb(243, 246, 248, 1);
    top: 60px;
    padding-right: 4px;
}



.box2{
    grid-column: 2;
    grid-row: 1 / span 2 ;
    width: 21%;
     height: 60%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1)


}
.box2 .two{
    padding: 0%;
    padding-top: 0%;
}
.box2 .two .second small{
    color: orange;
}
.box2 .first{
    color: #000;
    padding: 0%;
    padding-right: 10px;
}
.box2 .first .chart{
    font-size:150%;
    padding-right: 10px;
}
.box2 .second{
    color: #000;
    font-size: 1.2rem;
    padding-bottom: 0%;
    padding-top: 5%;
    padding-right: 170px;
}
.box2 .second small{ 
    color: #000;
    padding-left: 7px;
}
.box2 .last{
    color: #000;
}
.box3{
    grid-column: 3;
    grid-row: 1 / span 2 ;
    width: 21%;
     height: 60%;
    display: flex;
    flex-direction: column;
    padding: 10%;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1)


}
.box3 .three{
    padding: 0%;
    padding-top: 0%;
    
}
.box3 .first{
    color: #000;
    padding: 0%;
    padding-right: 10px;
}
.box3 .three .second small{
    color: green;
}
.box3 .first .users{
    font-size:150%;
    padding-right: 10px;
}
.box3 .second{
    color: #000;
    font-size: 1.2rem;
    padding-bottom: 0%;
    padding-top: 7%;
    padding-right: 170px;
}
.box3 .second small{ 
    color: #000;
    padding-left: 7px;
}
.box3 .last{
    color:#000;
}

.box4{
  grid-column: 4;
  grid-row: 1 / span 2 ;
  width: 21%;
   height: 60%;
  display: flex;
  flex-direction: column;
  padding: 10%;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1)


}
.box4 .four{
    padding: 0%;
    padding-top: 0%;
    
}
.box4 .four .second small{
    color: green;
}
.box4 .first{
    color: #000;
    padding: 0%;
    padding-right: 50px;
}
.box4 .first .simplechart{
    font-size:180%;
    padding-right: 10px;
}
.box4 .second{
    color: #000;
    font-size: 1.2rem;
    padding-top: 7%;
    padding-bottom: 0%;
    padding-right: 170px;
}
.box4 .second small{ 
    color: #000;
    padding-left: 7px;
}
.box4 .last{
    color:#000;
}

/* end of salas */

/* stats */
.Stats {
  grid-area: Stats;

  border-radius: 15px;
  height:50%;
  position: relative;
  top:0%

}

/* end stats */
.Popular {
  grid-area: Popular;
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  color: black;
  height:50%;
  position: relative;
  top:0%;

}
#most{
  margin: 0;
  padding: 20px;
}

.MPItems ul{
  height: 20vh;
     padding:  0 10px 0 10px;
    margin: 2px 0 2px 0;
}

.MPItems ul li{
  text-align: left;
  padding: 14px;
   border-radius: 10px;
  list-style: none;
    border: none;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1)
}
.MPItems ul li .iconsearch{
   
    padding-right: 10px;
  }
.MPItems ul li:hover{
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2) 
}
/* end popular */

/* modal */
.modal{
    position: fixed;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index:99;
    width: 100%;
    max-width: 400px;
    background: #fff;
    border-radius:16px ;
    padding: 25px;
}
.btn{
    width: 5%;
    height: 1.2rem;
    border: 1px solid black;
    cursor: pointer;
    border-radius: 25px;
    position: absolute;
    right: 10%;
    top:14%;
    cursor: pointer;
    background: #fff;
   
}
.modal-overlay{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index:98;
    height: 100vh;
     background: rgba(0 , 0  , 0, 0.5);
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5;
}
.fade-enter,
.fade-leave-to{
    opacity: 0;
}
</style>