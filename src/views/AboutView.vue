<script setup>
import { useRouter } from "vue-router";
import { useStore } from "../stores/counter";

const router=useRouter();
const store = useStore();

function pushTo(name){
  store.setActivePage(name)
  console.log('Routing to:', name);
  console.log('Router:', router); // Check if router is defined
  router.push({ name: name });
  console.log("push activated");
}

</script>
<template>
  <div class="main_container">
    <h1 class="page_header">About Me</h1>
    <div class="what_i_do_container">
      <h2 class="wid_header">What I Do</h2>
      <div class="service_container">
          <div class="service">
            <div class="service_image_container">
              <img src="/icon_web_dev.png">
            </div>
            <h3 class="service_name">
                Web Development
            </h3>
            <p class="service_description">
              "Bring your vision to life with a stunning website, meticulously crafted <br>
               and brought to fruition from inception to completion. Immerse your ideas <br>
               in a digital masterpiece."            </p>
          </div>
          <div class="service">
            <div class="service_image_container">
              <img src="/icon_mobile_dev.png">
            </div>
            <h3 class="service_name">
                Mobile Development
            </h3>
            <p class="service_description">
              "Embark on a journey to craft and code your distinct mobile app right <br>
               from the start, transforming your vision into a vibrant reality. Let's <br>
                shape your ideas into a functional masterpiece            </p>
          </div>
      </div>
    </div>
    <div class="first_page_container">
     
      <div class="table_container">
        <div class="table_row">
            <div class="table_title">
              Languages
            </div>
            <div class="table_subtitle">
              Speaking
            </div>
            <div class="table_subtitle">
              Reading
            </div>
            <div class="table_subtitle">
              Writing
            </div>
        </div>
        <div class="table_row">
            <div class="table_row_language">
              Serbian
            </div>
            <div class="table_row_entry">
              Fluent
            </div>
            <div class="table_row_entry">
              Fluent
            </div>
            <div class="table_row_entry">
              Fluent
            </div>
         </div>
        <div class="table_row">
          <div class="table_row_language">
              English
            </div>
            <div class="table_row_entry">
              Fluent
            </div>
            <div class="table_row_entry">
              Fluent
            </div>
            <div class="table_row_entry">
              Fluent
            </div>
        </div>
        <div class="table_row">
          <div class="table_row_language">
              Greek
            </div>
            <div class="table_row_entry">
              Fluent
            </div>
            <div class="table_row_entry">
              Advanced
            </div>
            <div class="table_row_entry">
              Advanced
            </div>
        </div>
        <div class="table_row">
          <div class="table_row_language">
              German
            </div>
            <div class="table_row_entry">
              Basic
            </div>
            <div class="table_row_entry">
              Advanced
            </div>
            <div class="table_row_entry">
              Advanced
            </div>
        </div>
      </div>
      <div class="education_container">
        <div class="education_field">
          <div class="school_name">
              ITAcademy
          </div>
          <div class="school_department">
              Mobile Development Department
          </div>
          <div class="school_title">
              Native Android Development
          </div>
          <div class="school_period">
              2022-2023
          </div>
        </div>
        <div class="icon_container">
          <img src="/icon_education.png">
        </div>
        <div class="education_field">
          <div class="school_name">
              University Of Belgrade
          </div>
          <div class="school_department">
              Faculty Of Political Sciences
          </div>
          <div class="school_title">
              Social Work And Social Politics
          </div>
          <div class="school_period">
              2018-2022
          </div>
        </div>
      </div>
    </div>
    <div class="second_page_container">
      <div class="content_container">
      <h1>
        Welcome! I'm a 24-year-old Software Developer specializing in top-tier mobile and web applications. 
      </h1>
      <h1>
        Curious To Explore Further? 
      </h1>
      <h1>
        Explore my skills or projects below and see for yourself.
      </h1>
      <div class="button_container">
        <div @click="pushTo('skills')" class="menu_item">Skills</div>
        <div @click="pushTo('projects')" class="menu_item">Projects</div>
      </div>

    </div>
    <div class="image_container">
      <img class="comp_image" src="/back_computer.png">
    </div>
    

    
     </div>
  </div>
 
</template>

<style>
/****************Styles important for core page layout***************/
*{
  color: black;
}
template{
  overflow-y: auto;
}
.main_container{
  height: 300vh;
  width: 90vw;
  background: #89B4BE;

  position: absolute;
  left: 0vw;
  top: 0vh;
}
.what_i_do_container{
  display: flex;
  justify-content: center;
  align-content: center;

  position: absolute;
  top:20vh;
  height:80vh;
  width: 90vw;

}
.wid_header{
  width: 90vw;
  height: 10vh;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 5cap;
  font-weight: 400;

 
}
.service{
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  

}
.service_container{
display: flex;
flex-flow: row nowrap;
justify-content: center;
align-items: center;
text-align: center;
width: 90vw;
height: 70vh;
position: absolute;
top: 10vh;

gap: 3vw;
}
.service_image_container{
  height: 50vh;
}
.service_image_container img {
  height: 50vh;
}
.service_name{
  font-size: 4cap;
  font-weight: 600;
}
.service_description{
  font-size: 1.5cap;
  font-style: italic;
 font-weight: 500; 
}

.first_page_container{
  position: absolute;
 
  bottom: 100vh;

  height: 100vh;
  width: 90vw;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
 
}
.second_page_container{
  position: absolute;
  top: 200vh;
  bottom: 0vh;
 background: #89B4BE;
  height: 100vh;
  width: 90vw;
  padding-top: 5%;
 padding-bottom: -10%;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;


}
.page_header{
  position: absolute;
  top: 3vh;
  width: 90vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  

  font-size: 9cap ;
  font-weight: 700;
}
.education_container{
  position: absolute;
  top: 74vh ;
  width: 90vw;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}
/****************End Of Styles important for core page layout***************/
/****************Language Table Styles**************/
.table_container{
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  gap: 1vh;

  position: absolute;
  top: 10vh;
  height: 60vh;

}
.table_row{
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 5vw;
}
/********Entries**********/

.table_title{
width: 12vw;
font-size: 3.5cap;

font-weight: 600;
text-decoration: underline;
text-decoration-color: #3E93A6; ;
}
.table_subtitle{
width: 10vw;
font-size: 2.5cap;
font-weight: bolder;
background: #3E93A6;
border-radius:30px 20px 30px 20px;
box-shadow: 10px 10px 15px 2px #000;

font-style: italic;

display: flex;
justify-content: center;
align-items: center;
}
.table_row_entry{
  width:10vw;
  font-size: 2cap;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  font-weight: bold;

  background: #000;
  border-radius:30px 20px 30px 20px;
  box-shadow: 6px 6px 10px 2px #000;

  
  color: #3E93A6;


}
.table_row_language{
  font-size: 3cap;
  margin: 2% 0% 2% 0%;
  font-weight:bold;
  width: 12vw;
  
  background: #3E93A6;
  border-radius:30px 20px 30px 20px;
  box-shadow: 15px 20px 15px 2px #000;


  display: flex;
  justify-content: center;
  align-items: center;

}
/****************End Of Language Table Styles**************/

/****************Begining of Education Styles -> education_container is in the core styles****************/
.education_field{
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.school_name{
  font-size: 2.5cap;
  font-weight: bolder;
}
.school_department{
  font-size: 2cap;
  font-weight: bolder;
}
.school_title{
  font-size: 2cap;
  font-style: oblique;
  font-weight: 400;
}
.school_period{
  font-size: 2cap;
  font-weight: bold;
  text-decoration: underline;
}
/****************End of Education Styles****************/
/****************Begining Of Second Page Item Styles***************/
.image_container{
  width: 60vw;
  height: 100vh;
  left: 18vw ;
  position: absolute;
  margin-top: -5%;
  display: flex;
  justify-content: center;
  align-items: center;


}
.comp_image{
  width: 60vw;
  height: 100vh;
}
.content_container{
  width: 50vw;
  position: absolute;
  
  bottom: 50vh;
  left: 23vw;
  z-index: 2;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;
  justify-content: end;
}
.button_container{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: end;
  position: absolute;
  bottom: -20vh;
  width: 40vw;
}
.menu_item{
  height: 10vh;
  width: 13vw;

  font-size: x-large;
  color: #89B4BE;

  background: #000;
  border-radius:30px 20px 30px 20px;
  
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
}
/****************End Of Second Page Item Styles***************/

/**************Media Querys Start*****************/

@media (max-width: 453px){
  .main_container{
    width: 80vw;
    height: 350vh;
  }
  .what_i_do_container{
   height: 160vh;
  }
  .first_page_container{
    
    top: 200vh;
  }
  .second_page_container{
    top: 330vh;
    width: 80vw;
  }
  .service_container{
    flex-flow: row wrap;
  }
  .table_container{
    top: 9vh;
    left: 4vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .education_container{
    flex-flow: column nowrap;
    gap: 2vh;
  }
  .school_name{
    font-size: 2cap;
  }
  .school_title{
    font-size: 1.5cap;
  }
  .school_department{
    font-size: 1.2cap;
  }
  .content_container{
    font-size: 0.9cap;
    bottom: 40vh;
  }
  .education_container{
    text-align: center;
    top: 60vh;
  }

  .page_header{
    font-size: 4cap;
  }
  .wid_header{
    font-size: 3cap;
  }
.service_image_container{
  width: 60vw;
  display: flex;
  justify-content: center;
}
.service_container img{
  width: 60vw;
}
.service_name{
  width: 60vw;
  font-size: 3cap;
}
.service_description{
  width: 60vw;
}


  /**********Table***********/
.table_title{
width: 15vw;
font-size: 1.5cap;

display: flex;
justify-content: center;
align-items: center;

}
.table_subtitle{
width: 15vw;
font-size: 1cap;
}
.table_row_entry{
font-size: 1cap;
width: 15vw;
}
.table_row_language{
  width: 15vw;
 font-size: 1cap;

 display: flex;
}
.button_container{
  width: 60vw;
  bottom: -10vh;
  justify-content: space-around;
}
.menu_item{
  width: 20vw;
}
}

/* Small Devices (Phones and Small Tablets) */
@media (min-width:454px) and  (max-width: 767px) {
  .main_container{
    width: 80vw;
    height: 350vh;
  }
  .what_i_do_container{
   height: 160vh;
  }
  .first_page_container{
    
    top: 200vh;
  }
  .second_page_container{
    top: 335vh;
    width: 80vw;
  }
  .service_container{
    flex-flow: row wrap;
  }
  .table_container{
    top: 5vh;
    left: 4vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .education_container{
    flex-flow: column nowrap;
    gap: 2vh;
  }
  .school_department{
    font-size: 1.5cap;
  }
  .content_container{
    font-size: 1cap;
  }
  .education_container{
    text-align: center;
    top: 60vh;
  }

  .page_header{
    font-size: 5cap;
  }
.service_image_container{
  width: 60vw;
  display: flex;
  justify-content: center;
}
.service_container img{
  width: 60vw;
}
.service_name{
  width: 60vw;
}
.service_description{
  width: 60vw;
}


  /**********Table***********/
.table_title{
width: 15vw;
font-size: 2cap;

display: flex;
justify-content: center;
align-items: center;

}
.table_subtitle{
width: 15vw;
font-size: 1.5cap;
}
.table_row_entry{
font-size: 1cap;
width: 15vw;
}
.table_row_language{
  width: 15vw;
 font-size: 1.5cap;

 display: flex;



}
}

/* Medium Devices (Tablets) OK */
@media (min-width: 768px) and (max-width: 992px) {
  .main_container{
    height: 315vh;
  }
  .what_i_do_container{
   height: 160vh;
  }
  .first_page_container{
    top: 170vh;
  }
  .second_page_container{
    top: 312vh;
  }
  .service_container{
    flex-flow: row wrap;
  }
  .content_container{
    font-size: 1.2cap;
  }
  .education_container{
    text-align: center;
    flex-flow: column nowrap;
  }
 
  /**********Table***********/
.table_title{
width: 20vw;
font-size: 4cap;

display: flex;
justify-content: center;
align-items: center;

}
.table_subtitle{
width: 15vw;
font-size: 2cap;
}
.table_row_entry{
font-size: 1.5cap;
width: 15vw;
}
.table_row_language{
  width: 20vw;
 font-size: 2cap;
}
}

/* Large Devices (Desktops and Laptops) */
@media (min-width: 992px) and (max-width: 1166px) {
  .what_i_do_container{
   height: 160vh;
  }
  .service_container{
    flex-flow: row wrap;
  }
  .first_page_container{
    top: 170vh;
  }
  .second_page_container{
    top: 270vh;
  }
   /**********Table***********/

.table_title{
width: 20vw;
font-size: 5cap;

display: flex;
justify-content: center;
align-items: center;

}
.table_subtitle{
width: 15vw;
font-size: 2cap;
}
.table_row_entry{
font-size: 1.5cap;
width: 15vw;
}
.table_row_language{
  width: 20vw;
 font-size: 2cap;
}
}

/* Extra Large Devices (Large Desktops and TVs) */
@media (min-width: 1200px) {
  /* CSS for extra large devices */
  

}
/**************Media Querys End*****************/





</style>
