<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
<div class="main_container">
      <div class="nav_container">
          <div class="nav_item">About Me</div>
          <div class="nav_item">Skills</div>
          <div class="nav_item">Projects</div>
          <div class="nav_item">Contact</div>
          <div class="menu_icon">Menu</div>
      </div>

      <div class="content_container">
        <div class="header_container">
        
            <h2 class="name">Aleksandar Smiljanic</h2>
            <h1 class="title">Software Developer</h1>
        </div>
        <div class="icon_container">
            <img class="icon_landing" src="/icon_landing.png">
        </div>
      </div>
    </div>

</template>

<style scoped>
.main_container{
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(90deg, #cdffd8, #94b9ff);
  position: absolute;
  top: 0%;
  left: 0%;
  right: 0%;
}
.menu_icon{
  margin-right: 4%;
}

.icon_container{
 position: absolute;
 right: 0vw;
 height: 80vh;
 width: 40vw;

}
.icon_landing{
  height: 80vh;
 width: 40vw;
 border-radius: 5%;
}
.content_container{
  display: flex;
  flex-flow: row nowrap;
  position: absolute;
  top:20vh ;
  left: 0vw;
  height: 80vh;
  width: 100vw;
  color: black;

}
.header_container{
  display: flex;
  flex-flow: column nowrap;
  width: 60vw;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  justify-content: center;
  align-items: start;
  margin-bottom: 20%;
  margin-left: 2%;
}
.name{
  font-size: 7cap;
  font-weight: 100;
}
.title{
  font-size: 8cap;
  font-weight: bold;
}
.nav_container{
  display: flex;
  flex-flow: row nowrap;
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 20vh;
  justify-content: start;
  margin-left: 3%;
  gap: 15%;
  align-items: center;
  color: black;
}
.nav_item{
  background-image: url("/background_nav_item.png");
  width: 100px;
  height: 60px;
  display: flex;
  justify-content: center ;
  align-items: center;
  font-size: large;
  font-weight: bold;
}
.menu_icon{
  position: absolute;
  right: 2%;
  justify-self: right;
}
</style>
