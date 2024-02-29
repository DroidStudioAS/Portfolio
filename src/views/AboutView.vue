<script setup>
import { onMounted, ref } from "vue";
import {  useRouter } from 'vue-router'
import { useStore } from "../stores/counter";

const store = useStore();
const router = useRouter();


let active_page = ref(1);

let language_table = ref(null);
let close_language_button = ref(null);
let table = ref(null);


let imageSource = ref(null);

let first_button = ref(null);
let second_button = ref(null);

let clicked = false;



function changePage(index){
clicked=false;
if(index===1){
  active_page.value=1;
}else if(index===2){
  active_page.value=2;
}
window.scrollTo({
  top:0,
  behavior:"smooth"
});
changeLocalNavAlpha();

}
function changeLocalNavAlpha(){
  if(active_page.value===1){
    first_button.value.style.opacity='1';
    second_button.value.style.opacity='0.5';
  }else if(active_page.value===2){
    first_button.value.style.opacity='0.5';
    second_button.value.style.opacity='1';
}}


function toggleVisibility(){
  if(clicked===false){
    language_table.value.style.display='none';
    clicked=true;
  }
  if (language_table.value.style.display==='none'){
    language_table.value.style.display='flex'
  }else if(language_table.value.style.display==='flex'){
    language_table.value.classList.add('reverse');
    
    setTimeout(()=>{
      language_table.value.style.display='none'
      language_table.value.classList.remove('reverse');
    },1000);
    
    
   }
}
function pushTo(name){
 store.setActivePage(name);
 console.log('active page', store.getActivePage());
  console.log('Routing to:', name);
  console.log('Router:', router); // Check if router is defined
  router.push({ name: name });
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
  console.log("push activated");
}

function setFrame(){
  let width = window.innerWidth;
  if(width>800){
    imageSource.value='/back_computer.png';
  }else{
    imageSource.value='/back_mobile_frame.png'
  }
}

/************Lifecycle  Hooks************/
onMounted(()=>{
  setFrame();
  window.addEventListener('resize',setFrame);
  changeLocalNavAlpha();
})
</script>

<template>
  <div v-if="active_page===1" class="first_container">
    <h1 class="wid_header">What I Do</h1>
    <div class="service_container">
      <div class="service_card">
        <img src="/icon_web_dev.png"/>
        <h2 class="service_title">Web Development</h2>
        <p class="service_description">
              "Bring your vision to life with a stunning website, meticulously crafted <br>
               and brought to fruition from inception to completion. Immerse your ideas <br>
               in a digital masterpiece."            
        </p>
      </div>
      <div class="service_card">
        <img src="/icon_mobile_dev.png"/>
        <h2 class="service_title">Mobile Development</h2>
        <p class="service_description">
              "Craft and code your mobile app<br>
               from scratch, transforming your vision into a vibrant reality. Let's <br>
              shape your ideas into a functional masterpiece"           
        </p>
      </div>
    </div>

  </div>
  <div v-if="active_page===2" class="second_container">
    <h1 class="title">About Me</h1>
    <div  
    ref="language_table"
    class="language_table_container">
    <div @click="toggleVisibility()"
    ref="close_language_button" 
    class="close_language_button">
        <img src="/button_close_cp.png">
    </div>
    <table class="table" ref="table">
        <tr ref="tbl_row" class="table_row"> 
            <th class="table_main_header">Languages</th>
            <th class="table_header">Speaking</th>
            <th class="table_header">Reading</th>
            <th class="table_header">Writing</th>
        </tr>
        <tr ref="tbl_row" class="table_row">
            <td class="table_language">Serbian</td>
            <td class="table_entrie">Fluent</td>
            <td class="table_entrie">Fluent</td>
            <td class="table_entrie">Fluent</td>
        </tr> 
        <tr ref="tbl_row1" class="table_row">
            <td class="table_language">English</td>
            <td class="table_entrie">Fluent</td>
            <td class="table_entrie">Fluent</td>
            <td class="table_entrie">Fluent</td>
        </tr> 
        <tr ref="tbl_row" class="table_row">
            <td class="table_language">Greek</td>
            <td class="table_entrie">Fluent</td>
            <td class="table_entrie">Advanced</td>
            <td class="table_entrie">Advanced</td>
        </tr>
        <tr ref="tbl_row" class="table_row">
            <td class="table_language">German</td>
            <td class="table_entrie">Basic</td>
            <td class="table_entrie">Advanced</td>
            <td class="table_entrie">Advanced</td>
        </tr>
    </table>
</div>
    <div class="education_container">
        <div class="education">
          <div class="education_header">
            ITAcademy Belgrade
          </div>
          <div class="education_department">
            Mobile Development Department
          </div>
          <div class="education_deegre">
            Native Android Development
          </div>
          <div class="education_years">
            2022-2023
          </div>
        </div>
        <div class="education_img">
          <img src="/icon_education.png"/>
          <div @click="toggleVisibility()"
          class="language_button">
            Languages
          </div>
        </div>
        <div class="education">
          <div class="education_header">
            University Of Belgrade
          </div>
          <div class="education_department">
            Faculty Of Political Sciences
          </div>
          <div class="education_deegre">
            Social Work And Social Politics
          </div>
          <div class="education_years">
            2018-2022
          </div>
        </div>
      </div>
      <div class="frame_container">
    <div class="content_container">
      <p>
Welcome! <br> 
I'm a 24-year-old Software Developer specializing in top-tier mobile and web applications.<br> <br>
Curious To Explore Further?<br> <br>
Explore my skills or projects below and see for yourself.<br> 
</p>
      <div class="button_container">
        <div @click="pushTo('projects')" class="button">Projects</div>
        <div @click="pushTo('skills')" class="button">Skills</div>
     </div>

    </div>
    <img :src="imageSource"/>


 </div>
   

</div>
<div class="dot_container">
      <div ref="first_button"
        @click="changePage(1)"
       class="dot_1">1</div>
      <div ref="second_button"
      @click="changePage(2)"
      class="dot_2">2</div>
  </div>

</template>

<style scoped>

/***********Start Of Page Containers*********/
template{
  overflow: hidden;
}
.first_container{
position: absolute;
top: 0%;
left: 0%;

width: 100vw;

display:flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;

background: #89B4BE;

overflow: hidden;
}
.second_container{
position: absolute;
top: 0%;
left: 0%;
padding-top: 10vh;

width: 100vw;

display:flex;
flex-flow: column nowrap;
justify-content: start;
align-items: center;

background: #89B4BE;
gap: 10vh;

}
/***********End Of Page Containers*********/

/************Start Of Page 1 items**********/
.wid_header{
 

  width: 100vw;
  height: 15vh;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: header;
  font-size: 6vw;
  font-weight: 600;
  color: black;
}
/*******Start Of Service Styles********/
.service_container{
  display: flex;
  flex-flow: row wrap;
  height: 100vh;
  padding-bottom: 20vh;

  gap: 10vw;

  justify-content: center;
  align-items: center;
  text-align: center;

  animation: fadeIn;
  animation-duration: 4s;
}
.service_card{
  display: flex;
  flex-flow:  column nowrap;
  justify-content: center;
  align-items: center;

  height: 70vh;
  width: 40vw;

  background: #4e7896;
  border-radius: 15px;
}

.service_title{
  font-family: content_;
  font-size: xx-large;
  font-weight: 700;
  color: white;
}
.service_description{
  font-family: content_italic;
  font-size: 1.5vw;

  color:white;
  translate: (50% 50%);
}
/*******End Of Service Styles********/

/************End Of Page 1 items**********/

/*************Start Of Page 2 Items********/

/************Start Of Education Styling************/
.title{
  position: absolute;
  top: 0%;

  height: 15vh;
  width: 100vw;
  

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 6vw;
  font-weight: 600;

  color: black;
}
.education_container{
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  align-items: start;
  width: 100vw;

  margin-top: 5%;

  color: black;
  
}
.education{
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.education_img{
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.education_header{
  font-family: content_;
  font-size: xx-large;
  font-weight: 600;
}
.education_department{
  font-family: content_;
  font-size: large;
  font-style: italic;
}
.education_deegre{
  font-family: content_;
  font-size: large;
  font-weight: 600;
}
.education_years{
  font-family: content_;
  font-size: large;
  font-weight: 600;
}
.language_button{
  
  padding: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  font-family: content_;
  color: white;
  font-size: large;

  background: #4E7896;
  border-radius: 15px;

  z-index: 2;

  margin-top: 2vw;
}
/************End Of Education Styling************/

/************Start Of Frame Styling************/
  .content_container {
  position: absolute;
  top: 37%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* existing styles */
  font-family: content_;
  font-size: 2.3vw;
  color:#000;
  text-align: center;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 1vw;
}

.frame_container {
  position: relative; /* Ensure the container is positioned relative */
  width: 80vw; /* Adjust the width as needed */
  height: auto; /* Adjust the height as needed */
  margin-bottom:20vh ;
}

.frame_container img {
  width: 100%;
  height: auto;
  display: block;
  /* Ensure the image takes up the full width of its container */
}

.button_container{
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  margin-top: 2%;
  gap: 5vw;
}
.button{
  font-size: 2vw;
  color: #89B4BE;

  background: #000;
  padding: 10px;
  border-radius:30px 20px 30px 20px;
  
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/************End Of Frame Styling************/
/********Language Table**********/
.language_table_container{
  position: fixed;
  top: 20vh;

  display: none;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 5vh;

  width: 80vw;
  height: 70vh;
  background: #4E7896;

  border-radius: 15px;

  font-family: content_;
  z-index: 3;

  animation: languageTableAnimation;
  animation-duration: 1s;
}
.table{
  color: white;
}
.close_language_button{
  position: absolute;
  top: 1vh;
  right: 1vw;
}
.close_language_button img {
  height: 50px;
  width: 50px;
}

.table_row{
  width: 70vw;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
 
  animation: fadeIn;
  animation-duration: 2.5s;
  
  animation-timing-function: ease-in;


  
}
.table_main_header{
  display: flex;
  justify-content: start;
  align-items: center;

  width: 20vw;

  font-size: 3vw;
  
}
.table_header{

  display: flex;
  justify-content: center;
  align-items: center;

  width: 20vw;

  font-size: 3.5vw;
  font-weight: 600;
}
.table_language{
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20vw;

  font-size: 3.5vw;
  font-weight: 600;

}
.table_entrie{
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20vw;

  font-size: 3vw; 
  font-style: italic; 

}
/********End Of Language Table**********/

/*************End Of Page 2 Items********/


/***********Start Of Page Slider**************/
.dot_container{
  position: fixed;
  bottom: 1vh;
  left: 0vw;
  height: 82px;
  width: 100vw;


  gap: 1vw;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

}
.dot_1{
  width: 50px;
  height: 50px;
  background: #4E7896;
  border-color: #fff;
  border-width: 3px;
  border-style: solid;
  border-radius: 50%;

  color: white;
  font-weight: 700;
  font-size: large;

  display: flex;
  justify-content: center;
  align-items: center;
}
.dot_2{
  width: 50px;
  height: 50px;

  background: #4E7896;
  border-color: #fff;
  border-width: 3px;
  border-style: solid;
  border-radius: 50%;

  color: white;
  font-weight: 700;
  font-size: large;

  display: flex;
  justify-content: center;
  align-items: center;
  
}
/***********End Of Page Slider**************/

/*********Start Of Media Queries**********/
@media(max-width:450px){

  .title{
    font-size: 13vw;
  }
  .education_container{
    margin-top: 10vh;
  }
  .service_container img{
    width: 77vw;
  }
  .service_title{
    color: #000;
  }
  .service_description{
    color: black;
  }
}
@media(max-width:800px){
 
  .first_container{
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .wid_header{
    font-size: 10vw;
  }

  /***********Start Service***********/
  .service_container{
    flex-flow: column nowrap;
    height: auto;
    gap: 3vw;
  }
  .service_card{
    margin: 0;
    background: none;
    height: auto;
    width: 60vw;
  }
  .service_title{
    color: #000;
    font-size: 6vw;
  }
  .service_description{
    font-size: 3vw;
    color: black;
  }
    /***********End Service***********/

  .language_table_container{
    height: 35vh;
    animation: languageTableAnimationMobile;
    animation-duration: 1s;
  }
    .close_language_button img {
  height: 40px;
  width: 40px;
}

  .dot_container{
    gap: 5vw;
  }
  .education_container{
    flex-flow: column nowrap;
    width: 100vw;
    justify-content: center;
    align-items: center;
    gap: 5vh;
  }

  .content_container {
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* existing styles */
  font-size: 5vw;
  color:#000;
  text-align: center;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 1vw;
}
.button{
  font-size: 3vw;
  padding: 10% ;
}
}
/*********End Of Media Queries**********/

/********Keyframes*********/
@keyframes fadeIn{
  from{opacity: 0;}
  to{opacity: 1;}
}

@keyframes languageTableAnimation{
  from{
    width: 0;
    height: 0vh;
  }
  to{
    width: 80vw;
    height: 70vh;
  }
}
@keyframes languageTableAnimationMobile{
  from{
    width: 0;
    height: 0vh;
  }
  to{
    width: 80vw;
    height: 35vh;
  }
}
@keyframes languageTableAnimationClose{
  from{
    height: auto;
    width: 80vw;

   
  }
  to{
    height: 0vh;
    width: 0vh;
    font-size: 0vh;
  }
}
@keyframes toHeight0{
  from{opacity: 1;}
  to{opacity: 0;}
}
/*********AnimationClasses*********/
.reverse{
  animation: toHeight0;
  animation-duration: 1s;
}


</style>