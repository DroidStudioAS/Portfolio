<script setup>
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
  <div class="page_two_container"></div>
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

/***************End Of Page 2 Items****************/

/***************Start Of Page 3 Items****************/

/***************End Of Page 3 Items****************/

/***************Start Of Media Queries ***************


/* Small Devices (Phones and Small Tablets) */
@media (max-width: 767px) {
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
}
.service_card{
  height: 75vh;
  width: 100vw;
}
}
/***************End Of Media Queries ****************/





</style>