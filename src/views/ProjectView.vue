<script setup>
import { onMounted, ref } from 'vue';
import project from '../models/project';

let headerColor = ref("#fff");
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
    headerColor.value="#fff"
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
    top: 20vh;
    overflow-y: auto;
}
.page_header{
    position: absolute;
    top: 0%;
    left: 0%;

    width: 90vw;
    height: 20vh;
    font-size: 5cap;
    
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    color: black;
    z-index: 4;
    background: #89B4BE;

    transition: color 1s ease-in-out;
}
.project_label{
    position: relative;
    top: -11vh;
    left: 4vw;

    font-weight: 500;

}
</style>