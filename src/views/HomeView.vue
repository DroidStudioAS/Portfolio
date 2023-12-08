
<script setup>
import { ref } from 'vue';
import {  useRouter } from 'vue-router'
import {gsap} from"gsap";
import { onMounted } from 'vue';

const router = useRouter();

let menu = ref("menu")
let first_name=ref("Aleksandar ")
let last_name=ref('Smiljanic');
let title = ref("Software")
let titleend=ref("Developer")
let showMenu = ref(false);
let menuWidth = ref('10vw');
let width = window.innerWidth;
let menu_but = ref(null)

function toggleMenu(){
  showMenu.value=!showMenu.value;
  if(width>991){
  menuWidth.value = showMenu.value ? '20vw' : '10vw';
  }else if(width<991 && width>767){
    menuWidth.value = showMenu.value ? '20vw' : '15vw';
  }else if(width<767){
    menuWidth.value = showMenu.value ? '40vw' : '20vw';
  }
  changeColor();
 
}
function changeColor(){
  menu_but.value.classList.toggle('black');
}

let timeline = gsap.timeline();
function animateButton(){
  timeline.to(menu_but,{
    duration:1,
    x:0
  })
}

function pushTo(name){
  console.log('Routing to:', name);
  console.log('Router:', router); // Check if router is defined
  router.push({ name: name });
  console.log("push activated");
}
onMounted(()=>{
  if(width>767 && width<991 ){
    menuWidth.value='15vw'
  }
  if(width > 425 && width<767){
    menuWidth.value='20vw'
  }
  if (width<425){
    menuWidth.value='20vw'
  }
  

})


</script>
<template>
<div class="main_container">
  <div class="header_container">
      <h1 class="title">{{ title }}</h1>
      <h1 class="title_end">{{ titleend }}</h1>
      <div class="name_container">
        <h2 class="name">{{ first_name }}</h2>
        <h2 class="name">{{ last_name }}</h2>
      </div>
  </div>
  <div class="image_container">
    <img class="home_image" src="/icon_landing_no_text.png">
  </div>
</div>
<transition name="menu-slide">
<div class="navigation_container" :style="{width:menuWidth}">
  <div :class="{ 'menu_but_container': true, 'expanded': showMenu }" @click="toggleMenu()">
  <div ref="menu_but" 
  class="menu_but"
  :style="{backgroundColor: showMenu ? '#000' : '#FAEFE6'}">{{ menu }}</div>
  </div>
  <transition name="slide">
    <div class="item_container" v-if="showMenu">
      <div class="menu_item">Home</div>
    <div @click="pushTo('about')" class="menu_item">About Me</div>
    <div class="menu_item">Skills</div>
    <div class="menu_item">Projects</div>
    <div class="menu_item">Contact</div>
    </div>
  </transition>
</div>
</transition>



</template>


<style scoped>
*{
  overflow-y: hidden;
  overflow-x: hidden;
}
/***********Image Styling Start************/
.image_container{
  position: absolute;
  bottom: -1vh;
  right: 0vw;
  height: 80vh;
  width: 50vw;
}
.home_image{
  height: 80vh;
  width: 50vw;
}
/***********Image Styling End************/

/*********Header Styling Start*********/
.header_container{
  
  display: flex;
  flex-flow: column nowrap;
  gap: 5vh;
  align-content: center;
  justify-content: center;
  text-align: center;

  position: absolute;
  top: 10vh;
  left: 5vw;
}
.name_container{
width: 50vw;
display: flex;
flex-flow: row nowrap;
justify-content: center;
gap: 5%;
}
.title{
  font-size: 90px;
  color: #000;
  font-weight: 900;

}
.title_end{
  font-size: 90px;
  color: #000;
  font-weight: 900;
  margin-top: -13%;

}

.name{
  font-size: 60px;
  color: #000;
  font-weight: 300;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

/*********Header Styling End*********/

.main_container{
  background-color: #89B4BE;

  position: absolute;
  top: 0%;
  left: 0%;
  bottom: 0%;
  height: 100vh;
  width: 90vw;
}
  .navigation_container{
    background-color: #4E7896;

    position: absolute;
    top: 0%;
    right: 0%;
    bottom: 0%;

    height: 100vh;
    width: 10vw;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
  .menu_but_container{
    width:10vw;
    height:20vh;
  }
  .menu_but{
    display: flex;
    justify-content: center;
    align-items: center;
   
    margin: 10% 5% 10% 0%;

    border-radius: 30px 30px 30px 30px;

    background-color: #FAEFE6;
    transition: background-color 0.3s ease-in-out;

    color:#87A1B0;
    font-size: 200%;    
    height: 7vh;
    width: 9vw;

    padding: 25% 40% 30% 40%;
  }
  .menu_but black{
    background-color: #000;
  }

  .item_container{
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 4vh;
  width: 20vw;
  height: 100vh;
 
}
.menu_item{
  height: 10vh;
  width: 13vw;

  font-size: x-large;
  color: #89B4BE;

  background: #000;
  border-radius:30px 20px 30px 20px;
  box-shadow: 15px 20px 15px 2px #000;
  
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  
}
/**************Menu Transitions Start*****************/
  .slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
.menu_slide-enter-active,
.menu_slide-leave-active {
  transition: width 0.3s ease-in-out;
}
/**************Menu Transitions End*****************/

/**************Media Querys Start*****************/

@media (max-width: 450px){
  .main_container{
  width: 80vw;
}
.navigation_container{
  width: 20vw;
}

   .item_container{
    width: 30vw;
   }
   .menu_item{
    width: 20vw;

   }
  .menu_but{
    width: 20vw;
  }
  
  .menu_but_container{
    width: 20vw;
  }
  .image_container{
    z-index: 0;
    height: 55vh;
    width: 80vw;
    left: 5vw;
    
  }
  .home_image{
    height: 55vh;
    width:  80vw;
  }
  .header_container{
    z-index: 1;
    top: vh;
    left: -1vw;
    width: 80vw;
    z-index: 0;
    gap: 2vh;
    justify-content: center;
    align-items: center;
  }
  .name_container{
    width: 80vw;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    gap: 2%;
    }
  .title_end{
  font-size: 50px;
  color: #000;
  font-weight: 900;
  margin-top: -5%;

}
.title{
  font-size: 50px;
  color: #000;
  font-weight: 900;

}

.name{
  font-size: 40px;
  color: #000;
  font-weight: 300;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
}

/* Small Devices (Phones and Small Tablets) */
@media (min-width:450px) and  (max-width: 767px) {
.main_container{
  width: 80vw;
}
   .item_container{
    width: 30vw;
   }
   .menu_item{
    width: 20vw;

   }
  .menu_but{
    width: 15vw;
  }
  
  .menu_but_container{
    width: 15vw;
  }
  .image_container{
    z-index: 0;
    height: 65vh;
    width: 80vw;
    left: 5vw;
    
  }
  .home_image{
    height: 65vh;
    width:  80vw;
  }
  .header_container{
    z-index: 1;
    top: 0vh;
    left: -1vw;
    width: 80vw;
    gap: 0vh;
    z-index: 0;
    justify-content: center;
    align-items: center;
  }
  .name_container{
    width: 50vw;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    gap: 2%;
    }
  .title_end{
  font-size: 50px;
  color: #000;
  font-weight: 900;
  margin-top: -5%;

}
.title{
  font-size: 50px;
  color: #000;
  font-weight: 900;

}

.name{
  font-size: 40px;
  color: #000;
  font-weight: 300;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
  
}

/* Medium Devices (Tablets) OK */
@media (min-width: 768px) and (max-width: 991px) {
 
  .menu_but{
    width: 15vw;
  }
  .navigation_container{
    width: 15vw;
    z-index: 2;
  }
  .menu_but_container{
    width: 15vw;
  }
  .image_container{
    z-index: 0;
    height: 50vh;
    left: 30vw;
    right: 25vw;
  }
  .home_image{
    height: 50vh;
  }
  .header_container{
    z-index: 1;
    top: 0%;
    gap: 0vh;
  }
  .name_container{
    width: 80vw;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    gap: 2%;
    
    }
  .title_end{
    margin-top: -8%;
  }
}

/* Large Devices (Desktops and Laptops) */
@media (min-width: 992px) and (max-width: 1199px) {
  .name_container{
    width: 50vw;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    gap: 2%;
    }
}

/* Extra Large Devices (Large Desktops and TVs) */
@media (min-width: 1200px) {
  /* CSS for extra large devices */
  .menu_but{
    position: relative;
    left: 5%;
  }
}
/**************Media Querys End*****************/

</style>
