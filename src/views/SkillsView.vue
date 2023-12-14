<template>
    <div class="main_container">
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
template{
    width: 100vw;
}
.main_container{
    background: #89B4BE;
    position: absolute;
    top: 0vh;
    left: 0vw;
    height: 180vh;
    width: 100vw;

    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.skills_header{
    font-size: 15vh;
    height: 15vh;
    width: 100vw;
    font-weight: 700;
    margin-bottom: 5vh;
    position: absolute;
    top: 1vh;

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
}
.skills_container{
    position: absolute;
    top: 20vh;
    left: 20vw;
    width: 80vw;
    display: flex;
    flex-flow: row nowrap;

}
.skills_list_container{
    display: flex;
    flex-flow: column wrap;
    justify-content: start;
    align-items: start;
    width: 20vw;
    position: absolute;
    top: -2vh;
    left: 40vw;


}
.icon_container{
    position: absolute;
    height: 80vh;
    width: 95vw;
    top: 80vh;
    left: 2.5vw;

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

    font-size:2vw ;
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
    width: 100vw;
 }
 .icon_container{
    width: 100vw;
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

 .skill{
    font-size:1.5cap ;
 }
 

}

/* Small Devices (Phones and Small Tablets) */
@media (min-width:450px) and  (max-width: 767px) {
    .main_container{
    height: 322vh;
    width: 100vw;
    
 }


 .skills_header{
    font-size: 6cap;
 }
 .skills_button{
    font-size: 1.1cap;
 }
 .skill{
    font-size: 3.5vw;
 }


}


/* Medium Devices (Tablets) */
@media (min-width: 768px) and (max-width: 991px) {
    .main_container{
    height: 260vh;
 }
 .skill{
    font-size: 3vw;
 }

 
}

/* Large Devices (Desktops and Laptops) */
@media (min-width: 992px) and (max-width: 1199px) {
 .main_container{
    height: 260vh;
    width: 100vw;
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
