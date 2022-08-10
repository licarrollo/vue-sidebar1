<template>
  <div class="sidebar">
    <div class="logo">
            <nav class="utensils"> <font-awesome-icon  icon="fa-solid fa-utensils" />  </nav>
            <h2> foodaily </h2>
        </div>
    
    <div class="menu-items" >
        
      <router-link to="/overview" active-class="active" exact tag="button" class="side-btn">
            <div class="link-container"> <font-awesome-icon class="icons" icon="fa-solid fa-chart-pie" />
                    Dashboard
            </div>
        </router-link>  

        
        <router-link to="/orders" active-class="active" exact tag="button" class="side-btn">
            <div class="link-container"> <font-awesome-icon class="icons" icon="fa-solid fa-cart-shopping" />
                    Orders
            </div>
        </router-link>  


        <router-link to="/promotions" active-class="active" exact tag="button" class="side-btn">
            <div class="link-container"> <font-awesome-icon class="icons" icon="fa-solid fa-tag" />
                    Promotions
            </div>
        </router-link>  

      
        <router-link to="/inventory" active-class="active" exact tag="button" class="side-btn">
            <div class="link-container"> <font-awesome-icon class="icons" icon="fa-solid fa-cube" />
                    Inventory
            </div>
        </router-link>  
        
        
      
        <router-link to="/business" active-class="active" exact tag="button" class="side-btn">
            <div class="link-container"> <font-awesome-icon class="icons" icon="fa-solid fa-clock" />
                    Business Hours
            </div>
        </router-link>  
        
      
        <router-link to="/support" active-class="active" exact tag="button" class="side-btn">
            <div class="link-container"> <font-awesome-icon class="icons" icon="fa-solid fa-phone" />
                    Support
            </div>
        </router-link>  
        
        
        <router-link to="/settings" active-class="active" exact tag="button" class="side-btn">
            <div class="link-container"><font-awesome-icon class="icons" icon="fa-solid fa-gear" />
                    Settings
            </div>
        </router-link>  

</div>
        <div class="bottom-content">
            <li>
          <router-link to="/logout" active-class="active" exact tag="button" class="side-btn">
            <div class="link-container"><font-awesome-icon class="icons" icon="fa-solid fa-door-open" />
                    Log out
            </div> 
        </router-link> </li>  
        </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.icons{
    font-size: 20px;
    color: #C8E1D8;
    padding-right: 10px;
}
    .menu-items{
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        
       
    }
    .menu-items > *{
        margin-top: 9px;
        
    }

    .side-btn:focus{
        outline: none;
    }
    .side-btn.active{
        background-color:  rgba(255, 255, 255, 0.2);
        color: teal;
        font-weight: 500;
    }

    .side-btn{
        border: none;
        padding: 10px 0px;
        cursor: pointer;
        font-size: 16px;
        color: white;
        text-decoration: none;
        background-color: transparent;
    }
    .side-btn:hover{
         background: rgba(255, 255, 255, 0.2);
    border-left: 5px solid var(--font-color);
    color: var(--font-color);
     margin-left:0%;
        
    }
    nav.logo{
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin: 15% 15% 0% 15px;
}
nav.utensils{
    font-size: 50px;
    padding-right: 20px;
    color: white    ;
}
.link-container{
     margin-left: 20%;   
   height: 100%;
   display: flex;
   align-items: center;
   text-decoration: none;
   color: #C8E1D8;
}
.bottom-content{
   
    padding: 1px;
    position: relative;
    bottom: -90px;
    display: flex;
    text-align: center;
    justify-content: start;
}
.bottom-content li{
   height: 50px;
   margin-top: 10px;
   list-style: none;
   margin-left: 20px;
   width: 100%;
}
.bottom-content li .link-container{
     margin-left: 10%;   
   height: 100%;
   display: flex;
   align-items: center;
   text-decoration: none;
   color: #C8E1D8;

}
.bottom-content li:hover{
    background: rgba(255, 255, 255, 0.2);
    border-left: 5px solid var(--font-color);
    color: var(--font-color);
     margin-left:0%;
}
</style>
