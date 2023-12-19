<script setup>
import { onBeforeMount, onMounted, ref } from "vue"
import {  useRouter } from 'vue-router'
import { useStore } from "../stores/counter";

const store = useStore();
const router = useRouter();


let language_table = ref(null);
let close_language_button = ref(null);

function toggleVisibility(){
  if (language_table.value.style.display==='none'){
    language_table.value.style.display='flex'
  }else if(language_table.value.style.display='flex'){
    language_table.value.style.display='none'
  }
}

function pushTo(name){
 store.setActivePage(name);
 console.log('active page', store.getActivePage());
  console.log('Routing to:', name);
  console.log('Router:', router); // Check if router is defined
  router.push({ name: name });
  console.log("push activated");
}

onMounted(()=>{
  toggleVisibility();
})

/***********LifeCycle Hooks**********/

</script>
<template>
  <div class="about_container">
    <h1 class="head">What I Do</h1>
  <div class="page_one_container">
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
              "Embark on a journey to craft and code your distinct mobile app right <br>
               from the start, transforming your vision into a vibrant reality. Let's <br>
                shape your ideas into a functional masterpiece            
        </p>
      </div>
    </div>
    
  </div>
  <div class="page_two_container">
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
        <!--Language Table-->
        <div  
    ref="language_table"
    class="language_table_container">
    <div @click="toggleVisibility()"
    ref="close_language_button" 
    class="close_language_button">
        <img src="/button_close_cp.png">
    </div>
    <table>
        <tr class="table_row"> 
            <th class="table_main_header">Languages</th>
            <th class="table_header">Speaking</th>
            <th class="table_header">Reading</th>
            <th class="table_header">Writing</th>
        </tr>
        <tr class="table_row">
            <td class="table_language">Serbian</td>
            <td class="table_entrie">Fluent</td>
            <td class="table_entrie">Fluent</td>
            <td class="table_entrie">Fluent</td>
        </tr> 
        <tr class="table_row">
            <td class="table_language">English</td>
            <td class="table_entrie">Fluent</td>
            <td class="table_entrie">Fluent</td>
            <td class="table_entrie">Fluent</td>
        </tr> 
        <tr class="table_row">
            <td class="table_language">Greek</td>
            <td class="table_entrie">Fluent</td>
            <td class="table_entrie">Advanced</td>
            <td class="table_entrie">Advanced</td>
        </tr>
        <tr class="table_row">
            <td class="table_language">German</td>
            <td class="table_entrie">Basic</td>
            <td class="table_entrie">Advanced</td>
            <td class="table_entrie">Advanced</td>
        </tr>
    </table>
</div>
 </div>
 <div class="frame_container">
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
  
  </div>

</div>
</template>
<style scoped>
/***************START Crucial For Entire Page Layout****************/
.about_container{
position: absolute;
top: 0%;
left: 0%;
right: 0%;

display: flex;
flex-flow: column nowrap;
justify-content: start;
align-items: start;
height: 270vh;
width: 100vw;

background: #89B4BE;

overflow: hidden;
}
.page_one_container{
  height: 80vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: start;
}
.page_two_container{
  height: 100vh;
  width: 100vw;
}
/***************End Crucial For Entire Page Layout****************/

/***************Start Of Page 1 Items****************/
.head{
 width: 100vw;

 font-size: 7vw;
 color: black;
 text-align: center;
}
/*********Service*******/
.service_container{
  display: flex; 
  flex-flow:row nowrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 10vh;

  margin-top: 10vh;
  height: 70vh;
  width: 100vw;
}
.service_card{
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 40vw;
  height: 63vh;

  color:white;
  background: #4E7896;
  border-radius: 15px;
}
.service_title{
  font-size: 3vw;
}
.service_description{
  font-size: 1.3;
}
/***************End Of Page 1 Items****************/
/***************Start Of Page 2 Items****************/
.education_container{
  display: flex;
  flex-flow:  row wrap;
  justify-content: center;
  align-items: center;

  width: 90vw;
  margin-left: 5vw;

}
.education{
  height: 40vh;
  width: 30vw;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  color: black;

  text-align: center;
}
/*******Start Of Education Typography Items******/
.education_header{
  font-size: 3vw;
  font-style: bold;
}
.education_department{
  font-size: 2vw;
  font-style: bold;
}
.education_deegre{
  font-size: 1.5vw;
  font-weight: 600;
}
.education_years{
  font-size: 1.5vw;
  font-weight: 600;
}
/*******End Of Education Typography Items******/
.education_img{
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
/******End Of Education**** */
.language_button{
  width: 12vw;
  height: 10h;
  padding: 2vh;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  color: white;
  font-size: 2vw;

  background: #4E7896;
  border-radius: 15px;

  z-index: 2;

  margin-top: 2vw;
}
/********Language Table**********/
.language_table_container{
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 5vh;

  width: 80vw;
  height: 70vh;
  background: #4E7896;

  border-radius: 15px;

  position: absolute;

  z-index: 3;
}
.close_language_button{
  position: absolute;
  top: 1vh;
  right: 1vw;
}

.table_row{
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 70vw;


  
}
.table_main_header{
  display: flex;
  justify-content: start;
  align-items: center;

  width: 20vw;

  font-size: 4vw;
  color: white;
}
.table_header{

  display: flex;
  justify-content: center;
  align-items: center;

  width: 20vw;

  font-size: 3.5vw;
  font-weight: 600;
  color: white;
}
.table_language{
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20vw;

  font-size: 3.5vw;
  font-weight: 600;
  color: white;

}
.table_entrie{
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20vw;

  font-size: 3vw; 
  font-style: italic; 
  color: white;

}
/********End Of Language Table**********/
/********Start Of Frames********/
.frame_container{
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  text-align: center;
}
.frame_container p{
  font-size: 4vw;
  padding: 2.5vh;

  color:#fff
}
.comp_image{
  visibility: visible;
  width: 70vw;
  position: absolute;
  left: 15vw;
}
.mobile_image{
  position: absolute;
  visibility:hidden;

  width: 100vw;
}

.button_container{
display: flex;
flex-flow: row nowrap;
gap: 10vw;
}
.button_container div {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 10vh;
  width: 20vw;

  background: #4E7896;
  border-radius: 15px;
  text-align: center;
  font-size: 3vw;
  color: white;
}

/********end Of Frames Of Frames********/

/***************End Of Page 2 Items****************/
/***************Start Of Media Queries ***************
/***************Phones*************/
@media(max-width:450px){
  .table_entrie{
    font-size: 6vw;
  }

  .head{
    font-size: 20vw;
  }

 
  .service_card{
    height: 30vh;
   background: none;
   color: black;
  }
  .service_title{
    font-size: 10vw;
  }
  .service_description{
    font-size: 4vw;
  }


 
  

}
/* Small Devices (Phones and Small Tablets) */
@media (max-width: 800px) {
  .about_container{
    height: 410vh;
 
    width: 100vw;
  }
.page_one_container{
  height: 160vh;
  }

.service_container{
  height: 150vh;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 0%;

  flex-flow: column nowrap;
  gap: 4vh;
}
.service_card{
  height: 75vh;
  width: 60vw;
}
/*************education************/
.education_container{
flex-flow: column nowrap;
margin-top: 0vh;
gap: 5vh;
}
.education_header{
  font-size:5vw;
}
.education_department{
  font-size: 4vw;
}
.education_deegre{
  font-weight: 600;
  font-size: 3vw;
}
.education_years{
  font-weight: 600;
  font-size: 3vw;
}

.language_button{
  width: 20vw;
  height: 10h;
  padding: 2vh;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  color: white;
  font-size: 3.8vw;

  border-radius: 15px;

  z-index: 2;

  margin-top: 2vw;
}
.language_table_container{
  padding-left: 5vw;

  gap: 50vh;
  width: 90vw;
  height: 40vh;

}
.table_main_header{
  font-size: 4vw;
}
.table_header{
  font-size: 3.5vw;
}
.table_language{
  font-size: 3.5vw;
}
.table_entrie{
  font-size: 3vw;
}

.comp_image{
  visibility: hidden;
}
.mobile_image{
  visibility: visible;
  margin-top: 28vh;
}
.image_frame_container{
  top: 205vh;
}
.content_container{
  width: 30vw;
  font-size: 2.5vw;
  left: 35vw;
  bottom: 20vh;
}
}
/***************End Of Media Queries ****************/





</style>