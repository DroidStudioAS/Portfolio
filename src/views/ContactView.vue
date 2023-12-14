<script setup>
import { ref } from 'vue';
import networkHelper from '../helpers/networkHelper';

let sendBtn = ref(null);

let message = ref('');
let subject = ref('');
let name = ref('');
let mail = ref('');

function sendRes(){
if(message.value.trim()==="" || subject.value.trim()==="" || name.value.trim()==="" || mail.value.trim()===""){
    console.log('SENDING STOPPED')
    console.log(message,subject,name,mail)
    return;
}

networkHelper.sendMsg(message.value,subject.value,name.value,mail.value);
}

</script>
<template>
<div class="page_container">
    <h1 class="page_header">
        Contact
    </h1>

  <form class="main_container">
    
    <div @click="sendRes()" ref="sendBtn" class="icon_container">
        <img src="/icon_mail.png">
    </div>
    <div class="message_field">
        <textarea v-model="message" placeholder="Feel Free To Message Us About Any Questions You Have" class="message_field" type="text_field"/>
    </div>
    <div class="contact_container">
        <div class="e_mail_container">
            <input v-model="subject" class="email" placeholder="Subject" type="email">
        </div>
        <div class="name_container"> 
            <input v-model="name" class="name" placeholder="Name" type="name">
        </div>
    </div>
    <div class="subject_container">
        <input v-model="mail" class="subject" placeholder="E-mail" type="text">
    </div>

</form>

  <div class="socials_container">
    <img src="/icon_social_linkedin.png"/>
    <img src="/icon_social_mail.png"/>
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
    width: 100vw;
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

    word-wrap: break-word;
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
    left: 30vw;
    width: 40vw;
    height: 5vh;
}
.socials_container{
    position: absolute;
    bottom: 0vh;
    width: 90vw;
    height: 15vh;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-content: center;

  
}



/***********Styles crucial for page layout End***********/

.icon_container{
    width: 12vw;
    height: 20vh;
    z-index: 4;
    background: #fff;

    border-radius: 50%;
    border: 15px 15px 0px 0px;
    border-style: solid;
    border-color: #000;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
}
.icon_container img{
    width: 10vw;
    height: 15vh;
}
.message_field{
    padding-top: 11vh;
    position: absolute;
    top: 5vh;

    width: 50vw;
    height: 40vh;

    border-radius:30px 30px 0px 0px;

    display: flex;
  text-align: center;

  font-size: large;
}
.subject_container input{
    height: 6vh;
    width: 40vw;
    border-radius: 0px 0px 15px 15px;

   text-align: center;
   font-size: large;

}
.name{
    height: 6vh;
    width: 25vw;
    border-radius: 0px 0px 15px 0px;

    text-align: center;
    font-size: large;

}
.email{
    height: 6vh;
    width: 25vw;
    border-radius: 0px 0px 0px 15px;

    text-align: center;
    font-size: large;

}
.socials_container img{
    margin-top: 2%;
    height:10vh;
    width: 5vw;
}
@media (min-width:767px) and (max-width:991px){
    .main_container{
        width: 100vw;
    }
    .page_header{
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        width: 100vw;
        left: 0;
    }
 

}
@media (max-width:766px){

    .main_container{
        width: 100vw;
    }
    .page_header{
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        width: 100vw;
        left: 0;
    }
    .socials_container{
        width: 80vw;
    }
    .socials_container img{
    margin-top: 2%;
    height:10vh;
    width: 15vw;
}
.icon_container{
    width: 30vw;
}
.icon_container img{
    width: 25vw;
}
.email{
    font-size: 1.2cap;
}
.name{
    font-size: 1.2cap;
}
.subject_container input{
    font-size: 1.1cap;
}

}
</style>