<template>
  
  <transition name="menu-slide">
<div class="navigation_container" :style="{width:menuWidth ,height:store.getMh()}">
  <div :class="{ 'menu_but_container': true, 'expanded': showMenu }" @click="toggleMenu()">
  <div ref="menu_but" 
  class="menu_but"
  :style="{backgroundColor: showMenu ? '#000' : '#FAEFE6'}">{{ menu }}</div>
  </div>
  <div :style="{width: showMenu ? '40vw' : '20vw'}"
   class="mobile_icon_container">
    <img  @click="toggleMenu()"
     class="nav_icon" 
     :src="showMenu ? '/nav_drawer_1.png' : '/nav_drawer_0.png' " />
  </div>
  <transition name="slide">
    <div class="item_container" v-if="showMenu">
    <div @click="pushTo('home')" class="menu_item">Home</div>
    <div @click="pushTo('about')" class="menu_item">About Me</div>
    <div @click="pushTo('skills')" class="menu_item">Skills</div>
    <div @click="pushTo('projects')" class="menu_item">Projects</div>
    <div @click="pushTo('contact')" class="menu_item">Contact</div>
    </div>
  </transition>
</div>
</transition>
  <RouterView/>
</template>
<script setup>
import { onBeforeMount, ref } from 'vue';
import {  useRouter } from 'vue-router'
import {gsap} from"gsap";
import { onMounted } from 'vue';
import {useStore} from './stores/counter.js'

const router = useRouter();
const store = useStore();


let first_name=ref("Aleksandar ")
let last_name=ref('Smiljanic');
let title = ref("Software")
let titleend=ref("Developer")
let menu = ref("menu")
let showMenu = ref(false);
let menuWidth = ref('10vw');
let menuHeight = store.getMh();
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



function pushTo(name){
 store.setActivePage(name);
  menuHeight=store.getMh();
 console.log('active page', store.getActivePage());
  console.log('Routing to:', name);
  console.log('Router:', router); // Check if router is defined


  console.log('set menu height to: ' + store.value)
  router.push({ name: name });
  console.log("push activated");
  toggleMenu();
}
onBeforeMount(()=>{
  menuHeight=store.getMh();
})
onMounted(()=>{
  menuHeight=store.getMh();
  if(width>767 && width<991){
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
<style scoped>
/***************Navigation Styles Start******************/
.navigation_container{
  z-index: 100;
    background-color: #4E7896;

    position: fixed;
    top: 0%;
    right: 0%;
    

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
   
    margin: 10% 5% 10% 5%;

    border-radius: 30px 30px 30px 30px;

    background-color: #FAEFE6;
    transition: background-color 0.3s ease-in-out;

    color:#87A1B0;
    font-size: 200%;    
    height: 7vh;
    width: 9vw;
    z-index: 3;
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

.mobile_icon_container{
width: 20vw;
display: flex;
align-items: center;
justify-content: center;

position: absolute;
top: 1vh;
right: 0vw;
z-index: -1;

visibility: hidden;

}
.nav_icon{
  width: 10vw;
  height: 10vw;


}

/***************Navigation Styles End******************/
/**************Navigation Transitions Start*****************/
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
/**************Navigation Transitions End*****************/
/*********************@media start***********************/
@media (min-width:450px) and (max-width:767px){
  .menu_but_container{
    width: 20vw;    
  }
  .menu_but{
    width: 18vw;
  }
  .item_container{
    width: 40vw;
  }
  .menu_item{
    width: 30vw;
  }
}
@media(max-width:450px){
  .menu_item{
    width: 30vw;
  }
  .menu_but_container{
    visibility: hidden;
  }
  .mobile_icon_container{
    visibility: visible;
  }
}
</style>