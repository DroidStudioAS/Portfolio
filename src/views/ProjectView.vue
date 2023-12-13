<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';
import project from '../models/project';

let headerColor = ref("#000");
let close_pc_button = ref(null);
let pc = ref(null);

function closePc(){
    pc.value.style.visibility = 'hidden';
}
function showPc(){
    pc.value.style.visibility = 'visible';
}
const projects = [
    new project("Fit Tracker"),
    new project('Running Tracker'),
    new project('Infinite Swipe'),
    new project('Flying Donut'),
    new project('Tic Tac Toe'),
    new project('Running Tracker'),
    new project('Running Tracker'),
    new project('Running Tracker'),
    new project('Running Tracker'),
    new project('Running Tracker')
];

function evenSetter(){
    for(let i = 0; i <projects.length; i++){
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
        class="project_image_containet"
        @click="showPc()">
            <img src="/icon_folder_even.png">
            <div class="project_label">
             {{ project.name }}
             </div>
        </div>
        <div v-else
        class="project_image_containet"
        @click="showPc()">           
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

            </div>
            <div  class="project_name_container">
                <h1>
                    Lorem Ipsum
                </h1>
            </div>
            <div class="project_type_container">
                <h2>
                     Ipsum Lorem
                </h2>
            </div>
            <div class="project_logo_container">

            </div>
            <div class="project_description_container">
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.""

                </p>
            </div>
            <div class="project_links_container">
                <div>image</div>
                <div>image</div>
                <div>image</div>
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
height: 20vh;
width: 20vw;
}
.project_label{
    position: relative;
    width:8vw ;
    height: 5vh;
    bottom: 12vh;
    left:5vw ;
   
   
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
    width: 45vw;
    height: 50vh;
    position: fixed;
    left: 30vw;

    display: flex;
    flex-flow: column nowrap;

    border-radius: 15px;

}
/********pc_layout_items*******/
/***50vh and 45vw is the space the children are working with***/
/** 
-10vh projectname (40 leftt)
-8vh projecttype (32 left)
-20vh description (12 left)
*/
.close_pc_container{
    width: 5vw;
    height: 8vh;
    background: paleturquoise;

    position: absolute;
    right: 0;

    border-radius: 15px;
    
}
.project_name_container{
    width: 45vw;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 130%;
}
.project_type_container{
    height: 8vh;
    width: 45vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 130%;

}
.project_description_container{
    width: 40vw;
    height: 20vh;
    position: relative;
    left: 2.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
.project_links_container{
    height: 12vh;
    background: pink;
    width: 45vw;

    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
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
@media (max-width:766px){
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
    .project_label{
        left: 10vw;
        width: 20vw;
    }
}
/*******************Media Queries End********************/

</style>