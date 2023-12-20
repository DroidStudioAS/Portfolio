<script setup>
import { ref } from "vue";


let active_page = ref(1);

function changePage(index){
if(index===1){
  active_page.value=1;
}else if(index===2){
  active_page.value=2;
}
}
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
              "Embark on a journey to craft and code your distinct mobile app right <br>
               from the start, transforming your vision into a vibrant reality. Let's <br>
                shape your ideas into a functional masterpiece            
        </p>
      </div>
    </div>
    <div class="dot_container">
      <div
        @click="changePage(1)"
       class="dot_1"></div>
      <div 
      @click="changePage(2)"
      class="dot_2"></div>
  </div>
  </div>
  <div v-if="active_page===2" class="second_container">
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
    <div class="dot_container">
      <div
        @click="changePage(1)"
       class="dot_1"></div>
      <div 
      @click="changePage(2)"
      class="dot_2"></div>
  </div> 

</div>

</template>

<style scoped>

/***********Start Of Page Containers*********/
.first_container{
position: absolute;
top: 0%;
left: 0%;

height: 100vh;
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

height: 150vh;
width: 100vw;

display:flex;
flex-flow: column nowrap;
justify-content: space-evenly;
align-items: center;
background: #89B4BE;

}
/***********End Of Page Containers*********/

/************Start Of Page 1 items**********/
.wid_header{
 

  width: 100vw;
  height: 15vh;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 6vw;
  font-weight: 600;
  color: black;
}
/*******Start Of Service Styles********/
.service_container{
  display: flex;
  flex-flow: row wrap;
  height: 100vh;

  gap: 10vw ;

  justify-content: center;
  align-items: center;
  text-align: center;
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
  font-size: xx-large;
  font-weight: 700;
  color: white;
}
.service_description{
  font-size: large;
  font-style: italic;
  color:white;
}
/*******End Of Service Styles********/

/************End Of Page 1 items**********/

/*************Start Of Page 2 Items********/
.education_container{
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  align-items: start;
  width: 100vw;

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
  font-size: xx-large;
}
.education_department{
  font-size: large;
}
.education_deegre{
  font-size: large;
}
.education_years{
  font-size: large;
}
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

  background: orange;
  border-radius: 50%
}
.dot_2{
  width: 50px;
  height: 50px;

  background: orange;
  border-radius: 50%
}
/***********End Of Page Slider**************/

/*********Start Of Media Queries**********/
@media(max-width:450px){
  .service_title{
    color: #000;
  }
  .service_description{
    color: black;
  }
}
@media(max-width:800px){
  .wid_header{
    position: absolute;
    top: 0%;

    font-size: 12vw;
  }
  .first_container{
    height: 190vh;
  }
  /***********Start Service***********/
  .service_container{
    position: absolute;
    flex-flow: column nowrap;
  }
  .service_card{
    margin: 0;
    background: none;
    height: 80vh;
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
}
/*********End Of Media Queries**********/


</style>