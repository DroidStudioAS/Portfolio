
<template>
<div class="main_container">
  <div class="header_container">
      <h1 class="title">{{ title }}</h1>
      <h1 class="title_end">{{ titleend }}</h1>
      <h2 class="name">{{ name }}</h2>
  </div>
  <div class="image_container">
    <img class="home_image" src="/icon_landing_no_text.png">
  </div>
</div>
<div class="navigation_container">
  <div class="menu_but">{{ menu }}</div>
</div>

</template>
<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import {gsap} from"gsap";
import { onMounted } from 'vue';

let menu = ref("menu")
let name=ref("Aleksandar Smiljanic")
let title = ref("Software")
let titleend=ref("Developer")


  











</script>
<style scoped>
*{
  overflow-y: hidden;
  overflow-x: hidden;
}
.home_image{
  height: 80vh;
}
.image_container{
  position: absolute;
  bottom: -1vh;
  right: 10vw;
  height: 80vh;
  
}

.title{
  font-size: 62px;
  color: #000;
  font-weight: 900;

}
.title_end{
  font-size: 62px;
  color: #000;
  font-weight: 900;
  margin-top: -20%;

}
.name{
  font-size: 40px;
  color: #000;
  font-weight: 300;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.header_container{
  
  display: flex;
  flex-flow: column nowrap;
  gap: 5vh;
  align-content: center;
  justify-content: center;
  text-align: center;

  position: absolute;
  top: 10vh;
  left: 20vw;
}
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
  .menu_but{
    display: flex;
    justify-content: center;
    align-items: center;
   
    margin: 5%;

    border-radius: 30%;

    background-color: #FAEFE6;
    color:#87A1B0;
    font-size: 300%;    
    height: 7vh;
    width: 9vw;

    padding: 20% 10% 25% 10%
  }
</style>
