<script setup>
import { onBeforeMount, onMounted, ref } from "vue"


let language_table = ref(null);
let close_language_button = ref(null);

function toggleVisibility(){
  if (language_table.value.style.display==='none'){
    language_table.value.style.display='flex'
  }else if(language_table.value.style.display='flex'){
    language_table.value.style.display='none'
  }
}

onMounted(()=>{
  toggleVisibility();
})

/***********LifeCycle Hooks**********/

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
    <div class="image_frame_container">
      <img class="comp_image" src="/back_computer_frame.png"/>
      <img class="mobile_image" src="/back_mobile_frame.png"/>
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
  gap: 5vh;

  width: 80vw;
  height: 70vh;
  background: #89B4BE;

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

  font-size: 3vw;
}
.table_header{

  display: flex;
  justify-content: center;
  align-items: center;

  width: 20vw;

  font-size: 3vw;
}
.table_language{
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20vw;
  font-size: 3vw;

}
.table_entrie{
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20vw;
  font-size: 3vw;  
}
/********End Of Language Table**********/
/********Start Of Frames********/
.image_frame_container{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;

}
.comp_image{
  visibility: visible;
}
.mobile_image{
  position: absolute;
  visibility:hidden;
}
/********end Of Frames Of Frames********/

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

  background: #89B4BE;
  border-radius: 15px;

  z-index: 2;

  margin-top: 2vw;
}
.language_table_container{
  padding-left: 5vw;
  width: 100vw;
  height: 80vh;

  align-items: right;
}



.comp_image{
  visibility: hidden;
}
.mobile_image{
  visibility: visible;
}
}
/***************End Of Media Queries ****************/





</style>