<template>
    <div class="main_container">
        <div class="skills_container">
            <h1 class="skills_header">Skills</h1>
            <div class="skills_buttons">
            <div @click="refreshList(1)" class="skills_button">FrontEnd Web Development</div>
            <div @click="refreshList(2)" class="skills_button">BackEnd Web Development</div>
            <div @click="refreshList(3)" class="skills_button">Mobile App Development</div>
        </div>
        </div>
        <div class="skills_list_container">
            <div v-for="(skill, index) in skills" :key="index"
            class="skill">
            {{ skill }}
            </div>
        </div>
    </div>

    <div class="icon_container">
        <img v-for="(icon, index) in icons" :key="index" class="icon" :src="icon">
    </div>
</template>
<script setup>
import { ref } from "vue";
import { useStore } from "../stores/counter";

const store = useStore();
let skills = ref([]);
let icons = ref(
    ['/icon_js.png',
    '/icon_html.png',
    '/icon_java.png',
    '/icon_php.png',
    '/icon_css.png',
    '/icon_skill_android.png/',
    '/icon_skill_gsap.png/',
    '/icon_skill_mtsql.png/',
    '/icon_skill_njs.png/',
    '/icon_skill_postman.png/',
    '/icon_skill_sb.png/',
    '/icon_skill_sqlite.png/',
    '/icon_skill_wp.png/',
    'icon_skill_vue.png'
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

.main_container{
    background: #89B4BE;
    position: absolute;
    top: 0vh;
    height: 220vh;
    width: 90vw;

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
}
.skills_container{
    position: absolute;
    top: 0vh;
    left:10vw;
    width: 30vw;
}
.skills_list_container{
    display: flex;
    flex-flow: column wrap;

    height: 80vh;
    width: 30vw;

    position: absolute;
    top: 25vh;
    left: 55vw;
    bottom: 0vh;


}
.icon_container{
    position: absolute;
    height: 90vh;
    width: 88vw;
    top: 100vh;
    left: 0vw;

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
    font-size: 3cap;
}
.skills_header{
    font-size: 10cap;
    font-weight: 700;
    margin-bottom: 5vh;
}
.skills_button{
    background: #777BB3;
    width: 35vw;
    height: 10vh;
    border-radius:30px 20px 30px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0px 50px 0px;
}
/*************End OF Skills container item styles*************/
/*************End OF Skills List Container item styles*************/
.skill{
    width: 20vw;
    height: 10vh;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: start;

    font-size:160% ;
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
    .main_container{
    height: 395vh;
 }
 .icon_container{
    width: 80vw;
 }
 .icon{
    width:min-content ;
 }
 .skills_header{
    font-size: 6cap;
 }
 .skills_button{
    font-size: 0.8cap;
 }
 .skills_list_container{
    top: 20vh;
 }
 .skill{
    font-size:1.5cap ;
 }
 
 
}

/* Small Devices (Phones and Small Tablets) */
@media (min-width:450px) and  (max-width: 767px) {
    .main_container{
    height: 322vh;
 }
 .icon_container{
    width: 80vw;
 }

 .skills_header{
    font-size: 6cap;
 }
 .skills_button{
    font-size: 1.1cap;
 }

 .skills_list_container{
    top: 20vh;
 }
}


/* Medium Devices (Tablets) */
@media (min-width: 768px) and (max-width: 991px) {
    .main_container{
    height: 260vh;
 }
 .icon_container{
    width: 85vw;
 }
 
}

/* Large Devices (Desktops and Laptops) */
@media (min-width: 992px) and (max-width: 1199px) {
 .main_container{
    height: 260vh;
 }
}

/* Extra Large Devices (Large Desktops and TVs) */
@media (min-width: 1200px) {
  /* Styles for devices wider than 1200px */
  /* ... */
}










</style>
