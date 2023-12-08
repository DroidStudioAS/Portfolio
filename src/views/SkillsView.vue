<template>
    <div class="main_container">
        <div class="skills_container">
            <h1 class="skills_header">Skills</h1>
            <div class="skills_buttons">
            <div class="skills_button">FrontEnd Web Development</div>
            <div class="skills_button">BackEnd Web Development</div>
            <div class="skills_button">Mobile App Development</div>
        </div>
        </div>
        <div class="skills_list_container">

        </div>
    </div>

    <div class="icon_container">

    </div>
</template>
<script setup>

</script>
<style scoped>
.main_container{
    background: #89B4BE;
    position: absolute;
    top: 0vh;
    height: 80vh;
    width: 90vw;

    display: flex;
    flex-flow: row wrap;
}
.icon_container{
    height: 20vh;
    width: 90vw;
    position: absolute;
    top: 80vh;
    left: 0vw;
    background: #89B4BE;
}
.skills_container{
    position: absolute;
    left:10vw;
}
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
.skills_header{
    font-size: 10cap;
    font-weight: 700;
    margin-bottom: 5vh;
}
</style>
