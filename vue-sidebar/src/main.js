import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* add fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// /* add some free styles */
// import { faUserAlien } from '@fortawesome/free-brands-svg-icons'
import {  faBell, faMagnifyingGlass, faMicrophone, faUser,faFileLines,faChartLine,faUserGroup,faChartSimple,faUtensils,faChartPie,faCartShopping,faTag, faCube, faClock, faPhone, faDoorOpen, faGear, faImage,} from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faMicrophone, faMagnifyingGlass,faUser,faBell,faFileLines,faChartLine,faUserGroup,faChartSimple,faUtensils,faChartPie, faCartShopping,faTag,faCube,faClock, faPhone,faGear,faDoorOpen, faImage)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
