<script setup>
import { ref } from 'vue';
import {  useRouter } from 'vue-router'
import { onMounted } from 'vue';

const router = useRouter();


let first_name=ref("Aleksandar ")
let last_name=ref('Smiljanic');
let title = ref("Software")
let titleend=ref("Developer")
let menu = ref("menu")
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

  animation: homeImageAnimation;
  animation-duration: 2s;
  animation-timing-function: ease-out;
}
.home_image{
  height: 80vh;
  width: 50vw;
;
}
/***********Image Styling End************/

/*********Header Styling Start*********/
.header_container{
  position: absolute;
  top: 10vh;
  left: 5vw;

  display: flex;
  flex-flow: column nowrap;
  gap: 5vh;
  align-content: center;
  justify-content: center;

  text-align: center;

  animation: headerAnimation;
  animation-duration: 2s;
  animation-timing-function: ease-in;


}
.name_container{
width: 50vw;
display: flex;
flex-flow: row nowrap;
justify-content: center;
gap: 5%;
}
.title{
  font-family: header;
  font-size: 90px;
  color: #000;
  font-weight: 900;

}
.title_end{
  font-family: header;
  font-size: 90px;
  color: #000;
  font-weight: 900;
  margin-top: -13%;

}

.name{
  font-size: 60px;
  color: #000;
  font-weight: 300;
  font-family: content_;
}

/*********Header Styling End*********/

.main_container{
  background-color: #89B4BE;

  position: absolute;
  top: 0%;
  left: 0%;
 
  height: 100vh;
  width: 100vw;
}


/**************Media Querys Start*****************/

@media (max-width: 450px){
  .main_container{
  width: 100vw;
}
.image_container{
    z-index: 0;
    height: 65vh;
    width: 80vw;
    left: 15vw;
    
  }
  .home_image{
    height: 65vh;
    width:  80vw;
    visibility: visible;
  }
  .header_container{
    top: 0vh;
    left: 10vw;
    width: 80vw;

    gap: 0vh;
    justify-content: center;
    align-items: center;

    animation: headerMobileAnimation;
    animation-duration: 2s;
    animation-timing-function: ease-in;

  }
  .name_container{
    width: 80vw;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
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
  width: 100vw;

}
 
  .image_container{
    z-index: 0;
    height: 65vh;
    width: 80vw;
    left: 15vw;
    
  }
  .home_image{
    height: 65vh;
    width:  80vw;
    visibility: visible;
  }
  .header_container{
    top: 0vh;
    left: 10vw;

    width: 80vw;

    justify-content: center;
    align-items: center;
    gap: 0vh;

    z-index: 0;

    animation: headerMobileAnimation;
    animation-duration: 2s;
    animation-timing-function: ease-in;


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
    top: 0%;
    left: 10vw;
    
    gap: 0vh;

    z-index: 1;
   
    animation: headerMobileAnimation;
    animation-duration: 2s;
    animation-timing-function: ease-in;

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
    .home_image{
    height: 80vh;
    width:  60vw;
    position: absolute;
    right: 0vw;
  }
  .image_container{
    height: 80vh;
    width: 80vw;
  }
}

/* Extra Large Devices (Large Desktops and TVs) */
@media (min-width: 1200px) {
  
  /* CSS for extra large devices */
 
  .home_image{
    height: 80vh;
    width:  60vw;
    position: absolute;
    right: 0vw;
  }
  .image_container{
    height: 80vh;
    width: 80vw;
  }
}
/**************Media Querys End*****************/

/******Start Of Keyframes*******/
@keyframes homeImageAnimation {
  from{bottom: -100vh;}
  to{bottom: 0vh;}
}
@keyframes headerAnimation {
  from{left: -50vw;}
  to {left: 5vw;}
}
@keyframes headerMobileAnimation{
  from{left: -100vw;}
  to {left: 10vw;}
}
</style>
