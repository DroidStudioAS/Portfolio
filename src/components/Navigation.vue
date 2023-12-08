<template>
    <div class="navigation_container" :style="{ width: menuWidth }">
      <transition name="menu-slide">
        <div>
          <div :class="{ 'menu_but_container': true, 'expanded': showMenu }" @click="toggleMenu()">
            <div ref="menu_but" class="menu_but" :style="{ backgroundColor: showMenu ? '#000' : '#FAEFE6' }">{{ menu }}</div>
          </div>
          <transition name="slide">
            <div class="item_container" v-if="showMenu">
              <div class="menu_item">About Me</div>
              <div class="menu_item">Skills</div>
              <div class="menu_item">Projects</div>
              <div class="menu_item">Contact</div>
            </div>
          </transition>
        </div>
      </transition>
    </div>
  </template>
  <script setup props="{
    showMenuProp: Boolean,
    menuWidthProp: String,
    menuProp: String,
    toggleMenu: Function
  }">
  import { ref, watch } from 'vue';
  
  const showMenu = ref(showMenuProp);
  const menuWidth = ref(menuWidthProp);
  const menu = ref(menuProp);
  
  watch(() => showMenuProp, (newValue) => {
    showMenu.value = newValue;
  });
  
  watch(() => menuWidthProp, (newValue) => {
    menuWidth.value = newValue;
  });
  
  watch(() => menuProp, (newValue) => {
    menu.value = newValue;
  });
  
  function toggleMenu() {
    showMenu.value = !showMenu.value;
    menuWidth.value = showMenu.value ? '20vw' : '10vw';
    // Additional logic if needed
  }
  </script>
  
  <style scoped>
  .navigation_container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* Other styles as per your need... */
  }
  
  .menu-slide-enter-active,
  .menu-slide-leave-active {
    transition: transform 0.3s ease-in-out;
  }
  
  .menu-slide-enter-from,
  .menu-slide-leave-to {
    transform: translateX(100%);
  }
  
  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.3s ease-in-out;
  }
  
  .slide-enter-from,
  .slide-leave-to {
    transform: translateX(100%);
  }
  
  .menu_but_container {
    width: 10vw;
    height: 20vh;
    /* Other styles as per your need... */
  }
  
  .menu_but {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10% 5%;
    border-radius: 30px;
    transition: background-color 0.3s ease-in-out;
    color: #87A1B0;
    font-size: 200%;
    height: 7vh;
    width: 9vw;
    padding: 25% 40% 30% 40%;
    /* Other styles as per your need... */
  }
  
  .menu_but.expanded {
    background-color: #000;
  }
  
  .item_container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 10vh;
    width: 20vw;
    height: 100vh;
    /* Other styles as per your need... */
  }
  
  .menu_item {
    height: 10vh;
    width: 13vw;
    font-size: x-large;
    color: #89B4BE;
    background: #000;
    border-radius: 30px 20px 30px 20px;
    box-shadow: 15px 20px 15px 2px #000;
    display: flex;
    justify-content: center;
    align-items: center;
    /* Other styles as per your need... */
  }
  </style>
  <script>
  export { showMenuProp, menuWidthProp, menuProp, toggleMenu };
  </script>