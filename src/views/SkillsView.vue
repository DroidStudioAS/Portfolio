<template>
    <div class="skills_main_container">
        <h1 class="skills_header">Skills</h1>
        <div class="skills_container">
            <div class="skills_buttons">
            <div @click="refreshList(1)" class="skills_button">FrontEnd Web Development</div>
            <div @click="refreshList(2)" class="skills_button">BackEnd Web Development</div>
            <div @click="refreshList(3)" class="skills_button">Mobile App Development</div>
        </div>
        <div class="skills_list_container">
            <div v-for="(skill, index) in skills" :key="index"
            class="skill">
            <img src="/icon_bullet.png">
            {{ skill }}
            </div>
        </div>
        </div>
    <div class="icon_container">
        <img v-for="(icon, index) in icons" :key="index" class="icon" :src="icon">
    </div>
</div>
</template>
<script setup>
import { ref } from "vue";
import { useStore } from "../stores/counter";

const store = useStore();
let skills = ref([]);
let icons = ref(
    ['./icon_js.png',
    './icon_html.png',
    './icon_java.png',
    './icon_php.png',
    './icon_css.png',
    './icon_skill_android.png',
    './icon_skill_gsap.png',
    './icon_skill_mtsql.png',
    './icon_skill_njs.png',
    './icon_skill_postman.png',
    './icon_skill_sb.png',
    './icon_skill_sqlite.png',
    './icon_skill_wp.png',
    './icon_skill_vue.png'
    ]
    )
function updateSkills() {
  skills.value = store.getSkillsInFocus();
}

function refreshList(int){
        switch(int){
          case 1:
            store.setSkillsInFocus(1)
            updateSkills()
           break;
          case 2:
             store.setSkillsInFocus(2)
             updateSkills()
            break;
          case 3:
             store.setSkillsInFocus(3)
             updateSkills()
           break
        }
    
}

</script>
<style scoped>
/**************** Begining of Styles Crucial For Layout*****************/
*{
    color: black;
}


.skills_main_container{
    position: absolute;
    top: 0%;
    left: 0%;

    height: auto;
    width: auto;

    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    color: black;

    background: #89B4BE;


    
}
.skills_header{
    font-family: header;
    font-size: 15vh;
    height: auto;
    width: 100vw;

    margin-bottom: 5vh;
  

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
}
.skills_container{
    display: flex;
    flex-flow: row nowrap;

    gap: 10vw;
    padding-bottom: 10vh;
}
.skills_list_container{
    display: flex;
    flex-flow: column wrap;
    justify-content: start;
    align-items: start;

   }
.icon_container{
    height: auto;
    width: auto;
    
    

    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    gap: 3vw;
    

  
}

/**************** End of Styles Crucial For Layout*****************/
/*************Begining OF Skills container item styles*************/
.skills_buttons{
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 5vh;
    font-size: 2.3vw;
}

.skills_button{
    width: 35vw;
    height: 10vh;
    padding: 50px 0px 50px 0px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #777BB3;
    border-radius:30px 20px 30px 20px;

    font-family: content_;

}
.skills_list_container img{
    width: 20px;
    height: 20px;
}
/*************End OF Skills container item styles*************/
/*************End OF Skills List Container item styles*************/
.skill{
    width: 25vw;
    height: 10vh;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: start;

    font-family: content_italic;
    font-size:1.5vw;
}
.icon{
    height: fit-content;
    width: fit-content;
}

/*********Media Queries Start*******/
/**************Media Queries Start*****************/
/*
15 vw(width>767 && width<991)
20 vw (width<767)
else 10vw */
@media (max-width: 450px){

 .icon_container{
    width: 100vw;
 }
 .icon{
    width:min-content ;
 }
 .skills_header{
    font-size: 10vw;
 }
 

 .skills_button{
    font-size: 4.5vw;
 }

 .skill{
    font-size:3vw ;
 }
 

}

/* Small Devices (Phones and Small Tablets) */
@media (min-width:450px) and  (max-width: 767px) {
 .skills_header{
    font-size: 10vw;
 }
 .skills_button{
    font-size: 4vw;
 }
 .skill{
    font-size: 3.5vw;
 }


}


/* Medium Devices (Tablets) */
@media (min-width: 768px) and (max-width: 991px) {
 .skills_button{
    font-size: 3.5vw;
 }
 .skill{
    font-size: 3vw;
 }

 
}

/* Large Devices (Desktops and Laptops) */
@media (min-width: 992px) and (max-width: 1199px) {
 .skills_button{
    font-size: 3vw;
 }

 .skill{
    font-size: 2.5vw;
 }
}

/* Extra Large Devices (Large Desktops and TVs) */
@media (min-width: 1200px) {
  /* Styles for devices wider than 1200px */
  /* ... */
}










</style>
