<script setup>
import { onMounted, ref } from 'vue';
import project from '../models/project';

let headerColor = ref("#000");
const projects = [
    new project("Fit Tracker",false),
    new project('Running Tracker',true),
    new project('Infinite Swipe',false),
    new project('Flying Donut',true),
    new project('Tic Tac Toe',false),
    new project('Running Tracker',true),
    new project('Running Tracker',false),
    new project('Running Tracker',true),
    new project('Running Tracker',false),
    new project('Running Tracker',true)
];

onMounted(()=>{
    headerColor.value="#000"
})


</script>
<template>
    <h1 class="page_header" :style="{color:headerColor}">
        Projects
    </h1>
    <div class="main_container">
        <div v-for="project in projects" :key="project.name" >
        <div v-if="project.even===true"
        class="project_image_containet">
            <img src="/icon_folder_even.png">
            <div class="project_label">
             {{ project.name }}
             </div>
        </div>
        <div v-else
        class="project_image_containet">           
         <img src="/icon_folder_uneven.png">
         <div class="project_label">
        {{ project.name }}
        </div>
        </div>
       

    </div>
</div>

</template>
<style scoped>

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
</style>