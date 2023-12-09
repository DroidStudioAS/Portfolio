<script setup>

</script>
<template>
<div class="page_container">
    <h1>
        Contact
    </h1>
  <div class="main_container">
    <div class="icon_container">
        <img src="/icon_mail.png">
    </div>
    <div class="message_field">
        <input placeholder="Feel Free To Message Us About Any Questions You Have" class="message_field" type="text_field">
    </div>
    <div class="contact_container">
        <div class="e_mail_container">
            <input class="email" placeholder="E-Mail" type="email">
        </div>
        <div class="name_container"> 
            <input class="name" placeholder="Name" type="name">
        </div>
    </div>
    <div class="subject_container">
        <input placeholder="Subject" type="text">
    </div>
    

  </div>
</div>
</template>
<style scoped>
/***********Styles crucial for page layout Start***********/
.page_container{
    position: absolute;
    top: 0vh;
    left: 0vw;
    bottom: 0vh;
    height: 100vh;
    width: 90vw;
    background: #89B4BE;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
}

.main_container{
    height: 80vh;
    position: absolute;
    top: 20vh;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
}
.contact_container{
    display: flex;
    flex-flow: row nowrap;
    position: absolute;
    top: 50vh;
}

.subject_container{
    position: absolute;
    top: 56vh;
    height: 5vh;
}

.subject_container input{
    height: 6vh;
    width: 20vw;
    border-radius: 0px 0px 15px 15px;
}
.name{
    height: 6vh;
    width: 20vw;
    border-radius: 0px 0px 15px 0px;
}
.email{
    height: 6vh;
    width: 20vw;
    border-radius: 0px 0px 0px 15px;

}

/***********Styles crucial for page layout End***********/
.icon_container{
    width: 12vw;
    height: 20vh;
    z-index: 4;
    background: #fff;

    border-radius: 50%;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
}
.message_field{
    position: absolute;
    top: 5vh;

    width: 40vw;
    height: 40vh;

    border-radius:30px 30px 0px 0px;
}

</style>