<script setup>
import { ref } from "vue"


let language_table = ref(null);
let close_language_button = ref(null);

function toggleVisibility(){
  if (language_table.value.style.display==='none'){
    language_table.value.style.display='flex'
  }else if(language_table.value.style.display='flex'){
    language_table.value.style.display='none'
  }
}
</script>
<template>
  <div class="about_container">
    <h1>What I Do</h1>
  <div class="page_one_container">
    <div class="service_container">
      <div class="service_card">
        <img src="/icon_web_dev_exp.png"/>
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
            ITAcademy
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
          <div class="table_row"> 
            <div class="table_header"></div>
            <div class="table_header"></div>
            <div class="table_header"></div>
            <div class="table_header"></div>
          </div>
          <div class="table_row">
            <div class="table_language"></div>
            <div class="table_entrie"></div>
            <div class="table_entrie"></div>
            <div class="table_entrie"></div>
          </div> 
          <div class="table_row">
            <div class="table_entrie"></div>
            <div class="table_entrie"></div>
            <div class="table_entrie"></div>
            <div class="table_entrie"></div>
          </div> 
          <div class="table_row">
            <div class="table_entrie"></div>
            <div class="table_entrie"></div>
            <div class="table_entrie"></div>
            <div class="table_entrie"></div>
          </div>
          <div class="table_row">
            <div class="table_entrie"></div>
            <div class="table_entrie"></div>
            <div class="table_entrie"></div>
            <div class="table_entrie"></div>
          </div>
        </div>

    </div>
    <div class="image_frame_container">
      <img src="/back_computer.png"/>
    </div>
  </div>
  <!--div class="page_three_container"></div-->

</div>
</template>
<style scoped>
/***************START Crucial For Entire Page Layout****************/
.about_container{
position: absolute;
left: 0%;
top: 0%;

display: flex;
flex-flow: column nowrap;
justify-content: start;
align-items: start;
width: 100vw;
overflow-x: hidden;

background: #89B4BE;
}
.page_one_container{
  height: 80vh;
  width: 100vw;
  background: orange;

  display: flex;
  justify-content: center;
  align-items: start;
}
.page_two_container{
  height: 100vh;
  width: 100vw;
  background: pink;
}
/*.page_three_container{
  height: 100vh;
  width: 100vw;
  background: purple;
}*/
/***************End Crucial For Entire Page Layout****************/

/***************Start Of Page 1 Items****************/
.service_container{
  display: flex; 
  flex-flow:row nowrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 10vh;

  margin-top: 10vh;
  height: 70vh;
  width: 100vw;

  background: green;


}
.service_card{
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: yellow;

  width: 40vw;
  height: 60vh;

  color:black
  
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

  background: orange;
  color: black;

  text-align: center;
}
.education_img{
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
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

  background: #89B4BE;
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

  width: 60vw;
  height: 70vh;
  background: maroon;

  position: absolute;

  z-index: 3;
}
.close_language_button{
  position: absolute;
  top: 1vh;
  right: 1vw;
}
/********End Of Language Table**********/

.image_frame_container{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;

}
/***************End Of Page 2 Items****************/

/***************Start Of Page 3 Items****************/

/***************End Of Page 3 Items****************/

/***************Start Of Media Queries ***************
/* Small Devices (Phones and Small Tablets) */
@media (max-width: 800px) {
.page_one_container{
  height: 160vh;
  }
.education{
  width: 50vw;
}
.service_container{
  height: 150vh;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 0%;

  flex-flow: column nowrap;
}
.service_card{
  height: 75vh;
  width: 100vw;
}
.education_container{
flex-flow: column nowrap;
}

}
/***************End Of Media Queries ****************/





</style>