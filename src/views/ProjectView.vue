<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';
import project from '../models/project';

let headerColor = ref("#000");
let close_pc_button = ref(null);
let pc = ref(null);
let project_name = ref(null)

let project_name_in_focus = ref(null)

let project_type_str = ref(null);
let project_logo = ref(null);
let project_desc = ref(null);
let project_stack = ref(null);
let wwwImage =ref(null);
let ghImage =ref(null);
let playStoreImage =ref(null);



function closePc(){
    pc.value.style.visibility = 'hidden';
    playStoreImage.value.style.display = 'none'
    wwwImage.value.style.display = 'none'

}
function showLinks(project){
if(project.type===0){
    project_type_str.value='Mobile App'
    wwwImage.value.style.display='none'
    playStoreImage.value.style.display='block'
}else{
    project_type_str.value='Website'
    wwwImage.value.style.display='block'
    playStoreImage.value.style.display='none'
}
}
function showPc(project){
    //set project name
    project_name_in_focus.value=project.name;
    //set project type
    showLinks(project);
    
    //set image
    project_logo=project.logo;
    //set description
    project_desc.value=project.desc;
    project_stack.value=project.techstack;



    //toggle visibility
    pc.value.style.visibility = 'visible';

}

const projects = [
    new project("Fit Tracker",null,0,'./icon_app_fittrack.png' 
    ,  'This App Will Help You Keep Track Of Your Training, Eating and Weight schedule, Giving You An Overview Of Your Daily, Weekly And Monthly Habits!'
    , 'Frontend: XML, Java,Android Studio; Backend: Node.Js, MySQL;'
    ),
    new project('Infinite Swipe',null,1,'./icon_app_infiniteswipe.png'
    ,  'An Online Arcade Game Where You Can Spend Hours Avoiding Bombs And Trying To Keep Your Character Alive!'
    , 'Frontend: Vue.JS; Backend: Mars Engine (JavaScript), MySQL'),
    new project('Calculator',null,0,'./icon_app_calc.png'
    , 'A Simple Calculator App That Supports All Basic Arythmetic Operations'
    , 'Frontend: XML, Java,Android Studio; Backend: Backendless;'),
    new project('My Portfolio',null,1,'./icon_app_me.png'
    , 'The Website You Are Browsing Right Now Was Also Developed By Me From Scratch.'
    , 'Frontend: Vue.JS; Backend: Node.JS, MySQL;'),
    new project('Quote Stop',null,0,'./icon_app_qs.png'
    , 'Get Free, Unlimited Access To Thousands Of Inspiring Quotes With QuoteStop. Built With Quotable API'
    , 'Frontend: XML, Java, Android Studio; Backend: SQLite;'),
    new project('Compass',null,0,'./icon_app_compass.png'
    , 'In Case You Ever Get Lost, This Compass App Can Help You Find Your Way To Safety!'
    , 'Frontend: XML, Java, Android Studio; Backend: Backendless;'),
    new project('Flying Donut',null,0,'./icon_app_donut.png'
    , 'Try And Take The Donut To The Moon In This Infectious Mobile Game!'
    , 'Frontend: XML, Java, Android Studio; Backend: SQLite;'),
    new project('QuizMe',null,0,'./icon_app_quiz.png'
    , 'Test Your Knowledge Of 10 Diffrent Subjects With My App QuizMe'
    , 'Frontend: XML, Java, Android Studio; Backend: SQLite;'),
];

function evenSetter(){
    for(let i = 0; i <projects.length; i++){
        console.log(projects[i])
        if (i%2===0){
            console.log(projects[i].even)
            projects[i].setEven(true)
            console.log(projects[i].even)

        }
    }
}
onBeforeMount(()=>{
    evenSetter()
})
onMounted(()=>{
    evenSetter()

})


</script>
<template>
    <h1 class="page_header" :style="{color:headerColor}">
        Projects
    </h1>
    <div class="main_container">
        <div v-for="project in projects" 
        :key="project.name" >
        <div v-if="project.even===false"
        class="project_image_container"
        @click="showPc(project)">
            <img src="/icon_folder_even.png">
            <div class="project_label">
             {{ project.name }}
             </div>
        </div>
        <div v-else
        class="project_image_container"
        @click="showPc(project)">           
         <img src="/icon_folder_uneven.png">
         <div class="project_label">
        {{ project.name }}
       
        </div>
        </div>
       

        </div>
        <div ref="pc" class="project_component">
            <div  ref="close_pc_button" 
            class="close_pc_container"
            @click="closePc()" >
                <img src="/button_close_cp.png">
            </div>
            <div class="project_name_container">
                <h1 ref="project_name">
                   {{project_name_in_focus}}
                </h1>
            </div>
            <div class="project_type_container">
                <h2>
                     {{ project_type_str }}
                </h2>
            </div>
            <div  class="project_logo_container">
                <img 
                :src="project_logo" ref="project_logo">
            </div>
            <div class="project_description_container">
                <p>
                    {{ project_desc }}
                    {{ project_stack }}
                </p>
            </div>
            <div class="project_links_container">
                    <img src="/icon_www.png" ref="wwwImage">
                    <img src="/github-mark.png" ref="ghImage">
                    <img src="/icon_playstore.png"  ref="playStoreImage">
            </div> 
        </div>
</div>

</template>
<style scoped>
*{
    color: white;
}
/************CRUCIAL START*************/
.main_container{
    height: 80vh;
    width: 100vw;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 1vw;

    position: absolute;
    top: 25vh;
    overflow-y: auto;
}
.page_header{
    position: absolute;
    top: 0%;
    left: 0%;

    width: 100vw;
    height: 25vh;
    font-size: 10cap;
    font-weight: 700;
    
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    color: black;
    z-index: 4;
    background: #89B4BE;

    transition: color 1s ease-in-out;
    color: black;
}
.project_image_container{
    display: flex;
    flex-flow: column nowrap;

    justify-content: center;
    align-items: center;
    
}
.project_label{ 
    position:relative;
    bottom: 10vh;
    
 
   
   
    font-weight: 500;
    font-size: 2cap;
    display: flex;
    justify-content: start;
    align-items: center;

    color: white;
}
 /********project_component start*********/
.project_component{
    background: #4E7896;
    width: 50vw;
    height: 70vh;
    position: fixed;
    left: 25vw;

    display: flex;
    flex-flow: column nowrap;

    border-radius: 15px;

    visibility: hidden;

}
/********pc_layout_items*******/
/***50vh and 45vw is the space the children are working with***/
/** 
-10vh projectname (40 leftt)
-8vh projecttype (32 left)
-20vh description (12 left)
-8-8-10-8-10-8-10-20-7
*/
.close_pc_container{
    width: 5vw;
    height: 8vh;

    position: absolute;
    right: 0;

    border-radius: 15px;
}
.close_pc_container img {
    width: 50px;
    height: 50px;
    position: absolute;
    right: 0;
}
.project_name_container{
    width: 50vw;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5vw
}
.project_type_container{
    height: 10vh;
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2vw


}
.project_logo_container{
height: 15vh;
width: 50vw;
display: flex;
justify-content: center;
align-items: center;

}
.project_logo_container img{
height: 100px;
width: 100px;

justify-content: center;
align-items: center;
}
.project_description_container{
    width: 50vw;
    height: 30vh;
    
    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;
    padding: 15%;


    font-size: 1.5vw

}
.project_links_container{
    height: 10vh;
    width: 50vw;

    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;

    border-radius: 0 0 15px 15px;


    position: absolute;
    bottom: 0%;
}
.project_links_container img{
    height: 7vh;
}
  /********project_component end*********/


/************Crucial End*************/



/*******************Media Queries Start********************/
@media (min-width:767px) and (max-width:991px){
    .main_container{
        width: 100vw;
    }
    .page_header{
        width:100vw ;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 6cap;
    }
  
}
@media (max-width:767px){
    .page_header{
        width:100vw ;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 6cap;
    }
    .main_container{
        width: 100vw;
    }
 
 
}
@media (min-width:1200px){
    .main_container{
        padding-left: 15vw;
        padding-right: 15vw;

    }
}
/*******************Media Queries End********************/

</style>