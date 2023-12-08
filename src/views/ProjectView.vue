<script setup>
import { onMounted } from 'vue';
import project from '../models/project';
const projects = [new project("FitTracker",false),new project('Running Tracker',true),new project('Running Tracker',false),new project('Running Tracker',true),new project('Running Tracker',false)];


</script>
<template>
    <h1 class="page_header">
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
*{
    overflow: hidden;
}
.main_container{
    height: 80vh;
    width: 90vw;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 1vw;

    position: absolute;
    top: 20vh;
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
}
.project_label{
    position: relative;
    bottom: 12vh;
    left: 5vw;
}
</style>