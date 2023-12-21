<template>
  <div :style="{ width: showMenu ? '40vw' : '20vw' }" class="mobile_icon_container">
    <img @click="toggleMenu()" class="nav_icon" :src="showMenu ? '/nav_drawer_1.png' : '/nav_drawer_0.png' " />
  </div>
  <div class="menu_but_container"
  :class="{ 'menu_but_container': true, 
              'expanded': showMenu }" 
        @click="toggleMenu()">
        <div ref="menu_but" class="menu_but" 
        :style="{ backgroundColor: showMenu ? '#000' : '#FAEFE6' }">{{ menu }}</div>
  </div>
  <transition name="menu-slide">
    <div
      class="navigation_container"
      :style="{ width: menuWidth, height: store.getMh(), zIndex: showMenu ? 100 : -100 }"
      :class="{ nav_bg_color: showMenu, 'slide-enter-from': !showMenu }"
    >
     
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



let menu = ref("menu")
let showMenu = ref(false);
let menuWidth = ref('10vw');
let menuHeight = store.getMh();
let width = window.innerWidth;
let menu_but = ref(null)

function pushTo(name){
 store.setActivePage(name);
  menuHeight='100vh'
 console.log('active page', store.getActivePage());
  console.log('Routing to:', name);
  console.log('Router:', router); // Check if router is defined


  console.log('set menu height to: ' + store.value)
  router.push({ name: name });
  console.log("push activated");
  toggleMenu();
};

function changeColor(){
  menu_but.value.classList.toggle('black');
};

function toggleMenu(){
  showMenu.value=!showMenu.value;
  if(width>991){
  menuWidth.value = showMenu.value ? '22vw' : '0vw';
  }else if(width<991 && width>767){
    menuWidth.value = showMenu.value ? '22vw' : '0vw';
  }else if(width>450 && width<767){
    menuWidth.value = showMenu.value ? '22vw' : '0vw';
  }else if(width<=450){
    menuWidth.value = showMenu.value ? '42vw' : '0vw';
  }
  changeColor();
};
function menuResize(){
  width=window.innerWidth;
  if(width>991){
  menuWidth.value = showMenu.value ? '22vw' : '0vw';
  }else if(width<991 && width>767){
    menuWidth.value = showMenu.value ? '22vw' : '0vw';
  }else if(width>450 && width<767){
    menuWidth.value = showMenu.value ? '22vw' : '0vw';
  }else if(width<=450){
    menuWidth.value = showMenu.value ? '42vw' : '0vw';
  }
}

onBeforeMount(()=>{
  menuHeight=store.getMh();
});

onMounted(()=>{
  menuHeight=store.getMh();
  window.addEventListener('resize',menuResize);
});

</script>
<style scoped>
/***************Navigation Styles Start******************/
.navigation_container{
    background-color: #89B4BE;
    position: fixed;

    top: 0%;
    right: 0%;
    bottom: 0%;
    height: 100vh;
    width: 10vw;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    border: none;
    border-style: none;
    padding-top: 20vh;
     }

  .menu_but_container{
    width:20vw;
    height:20vh;

    position: fixed;
    top: 1vh;
    right: 2vh;
    visibility: visible;
    z-index: 102;
    display: flex;
    justify-content: center;
    align-items: center;
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
    width: 15vw;
    z-index: 102;
    padding: 10% 5% 10% 5%;
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

  font-size: 2vw;
  color: #89B4BE;

  background: #000;
  border-radius:30px 20px 30px 20px;
  
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

position: fixed;
top: 2vh;
right: 0vw;
z-index: 101;

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
.slide-enter-from {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(100%);
}

.menu_slide-enter-active,
.menu_slide-leave-active {
  transition: width 0.3s ease-in-out, background-color 0.3s ease-in-out;
}
.menu_slide-enter-from {
  width: 0;
  background-color: transparent;
}
.nav_bg_color {
  background-color: #4e7896;
}
/**************Navigation Transitions End*****************/
/*********************@media start***********************/
@media (min-width:450px) and (max-width:767px){
  .navigation_container{
    padding-top: 15vh;
  
  }
  .mobile_icon_container{
    right: 50vw;
  }
  .menu_but_container{
    width: 20vw;    
    right: 1vw;
  }
  .menu_but{
    width: 18vw;
    visibility: visible;
    padding: 10% 20% 10% 20%;
  }
  .item_container{
    width: 40vw;
  }
  .menu_item{
    width: 20vw;
   font-size: 2.5vw;
  }
}
@media(max-width:450px){
  .navigation_container{
    z-index: 10;
    padding-top: 8vh;
  }
  .menu_item{
    width: 20vw;
    font-size: 3vw;
  }
  .menu_but_container{
    visibility: hidden;
  }
  .mobile_icon_container{
    visibility: visible;
  }
}

/*************Fonts************/
@font-face {
  font-family: header;
  src: url('/Montserrat-ExtraBold.ttf');
}

</style>