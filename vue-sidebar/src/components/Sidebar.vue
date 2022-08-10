<template>
  <div class="sidebar">
    <div class="logo">
            <nav class="utensils"> <font-awesome-icon  icon="fa-solid fa-utensils" />  </nav>
            <h2> foodaily </h2>
        </div>
    
    <div class="menu-items" >
    <li>   <router-link to="/overview" active-class="active" exact tag="button" class="side-btn">
            <div class="link-container"> <font-awesome-icon class="icons" icon="fa-solid fa-chart-pie" />
                    Dashboard
            </div>
        </router-link>  </li> 

        <li> 
        <router-link to="/orders" active-class="active" exact tag="button" class="side-btn">
            <div class="link-container"> <font-awesome-icon class="icons" icon="fa-solid fa-cart-shopping" />
                    Orders
            </div>
        </router-link>  </li> 

        <li>
        <router-link to="/promotions" active-class="active" exact tag="button" class="side-btn">
            <div class="link-container"> <font-awesome-icon class="icons" icon="fa-solid fa-tag" />
                    Promotions
            </div>
        </router-link>  </li> 

        <li>
        <router-link to="/inventory" active-class="active" exact tag="button" class="side-btn">
            <div class="link-container"> <font-awesome-icon class="icons" icon="fa-solid fa-cube" />
                    Inventory
            </div>
        </router-link>  
        </li> 
        
        <li>
        <router-link to="/business" active-class="active" exact tag="button" class="side-btn">
            <div class="link-container"> <font-awesome-icon class="icons" icon="fa-solid fa-clock" />
                    Business Hours
            </div>
        </router-link>  
        </li> 
        <li>
        <router-link to="/support" active-class="active" exact tag="button" class="side-btn">
            <div class="link-container"> <font-awesome-icon class="icons" icon="fa-solid fa-phone" />
                    Support
            </div>
        </router-link>  
        </li> 
        <li>
        <router-link to="/settings" active-class="active" exact tag="button" class="side-btn">
            <div class="link-container"><font-awesome-icon class="icons" icon="fa-solid fa-gear" />
                    Settings
            </div>
        </router-link>  
        </li> 

        <li>
          <router-link to="/logout" active-class="active" exact tag="button" class="side-btn">
            <div class="link-container"><font-awesome-icon class="icons" icon="fa-solid fa-door-open" />
                    Log out
            </div>
        </router-link>  
        </li> 
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
        margin-top: 20px;
        
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
        margin-left: -20%; color: white;
        border-left: 5px solid
        
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

</style>
