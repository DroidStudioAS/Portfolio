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
        <div v-if="project.even===true">
            <img src="/icon_folder_even.png">
        </div>
        <div v-else>
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
    height: 80vh;
    width: 90vw;
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
    position: relative;
    top: -30%;
    

    font-weight: 500;
    font-size: 2cap;
    display: flex;
    justify-content: center;
    align-items: start;

    color: white;

}
</style>