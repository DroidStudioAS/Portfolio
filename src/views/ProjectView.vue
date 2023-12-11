<script setup>
import { onMounted, ref } from 'vue';
import project from '../models/project';

let headerColor = ref("#000");
const projects = [
    new project('Fit Tracker',false),
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
 
    <div class="main_container">
        <h1 class="page_header" :style="{color:headerColor}">
        Projects
    </h1>
        <div v-for="project in projects" :key="project.name" 
        class="project_container">
        <div v-if="project.even===true"
        class="project">
            <img src="/icon_folder_even.png">
        </div>
        <div v-else class="project">
            <img src="/icon_folder_uneven.png">
        </div>
        <div class="project_label">
        {{ project.name }}
        </div>
    
    </div>
</div>

</template>
<style scoped>

.main_container{
    height: 120vh;
    width: 90vw;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 1vw;

    position: absolute;
    top: 0vh;
}
.project_container{
    position: relative;
    top: 25vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: center; 
    align-items: center;

    
}
.project{
    width: 20vw;
    display: flex;
    flex-flow: column nowrap;
}

.page_header{
    position: absolute;
    top: 0%;
    left: 0%;

    width: 90vw;
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

.project_label{
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 500;
    width: 30vw;
    font-size: 3cap;
    color: white;
    width: 10vw;
    position: absolute;
    bottom: 50%;
    top: 50%;
    
    

   
}

    /*
15 vw(width>767 && width<991)
20 vw (width<767)
else 10vw */

@media (max-width:767px){
    .main_container{
       width: 80vw;
    }
    .page_header{
        font-size: 5cap;
    }
    .project_label{
        font-size: 1cap;
    }
 
}
@media (min-width:767px) and (max-width:991px){
    .main_container{
        width: 85vw;
        font-size: 1cap;
    }
    .project_label{
        font-size: 1cap;
    }

   
}

</style>