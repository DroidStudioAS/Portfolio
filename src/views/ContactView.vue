<script setup>
import { ref } from 'vue';
import networkHelper from '../helpers/networkHelper';

let sendBtn = ref(null);
let feedback = ref(null);

let message = ref('');
let subject = ref('');
let name = ref('');
let mail = ref('');

let success = ref(false);
let feedback_text = ref(null);

const email = ref('aleksandar.smiljanic19@gmail.com');

function copyEmailToClipboard() {
  const textArea = document.createElement('textarea');
  textArea.value = email.value;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);

  // Optionally, provide user feedback
  alert('aleksandar.smiljanic19@gmail.com copied to clipboard!');
}

function sendRes(){
if(message.value.trim()==="" || subject.value.trim()==="" || name.value.trim()==="" || mail.value.trim()===""){
    console.log('SENDING STOPPED')
    console.log(message,subject,name,mail)
    feedback_text.value="Please Fill Out All The Neccessary Information"
    feedback.value.style.visibility = 'visible'
    return;
}
networkHelper.sendMsg(message.value,subject.value,name.value,mail.value);
feedback_text.value='Your Message Has Been Sent! I Will Get Back To You At This Mail: ' +   mail.value  + ' Adress, As Soon As Possible. Thank You For Your Intrest!';
feedback.value.style.visibility = 'visible'

}
function dismissFeedback(){
    feedback.value.style.visibility = 'hidden'

}

</script>
<template>
<div class="page_container">
    <h1 class="header">
        Contact
    </h1>

  <form class="main_container">
    
    <div class="icon_container">
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
    <div @click="sendRes()" ref="sendBtn" class="sendButton">
        Send
    </div>  

 <div ref="feedback" class="feedback_container">
    <div>
       <p>
        {{ feedback_text }}
       </p> 
    </div>
    <div @click="dismissFeedback()" class="dismiss_button">
        Ok
    </div>

 </div>

  <div class="socials_container">
   <a target="_blank" href="https://www.linkedin.com/in/aleksandar-smiljanic-335a8a23a/">
    <img src="/icon_social_linkedin.png"/>
   </a>
   
    <img @click="copyEmailToClipboard()" src="/icon_social_mail.png"/>
  </div>

</div>
</template>
<style scoped>
/***********Styles crucial for page layout Start***********/
p{
    color: white;
}

.page_container{
    position: absolute;
    top: 0vh;
    left: 0vw;
    bottom: 0vh;
    height: 102vh;
    width: 100vw;
    background: #89B4BE;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    
}
.header{
font-family:header;
font-size: 6vw;
font-weight: 600;
color: black;
}

.main_container{
    height: 80vh;
    position: absolute;
    top: 22vh;
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
    left: 0w;
    width: 40vw;
    height: 5vh;
}
.socials_container{
    position: absolute;
    bottom: 0vh;
    width: 90vw;
    height: 17vh;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-content: center;

  
}
.feedback_container{
    width: 40vw;
    height: 40vh;
    padding: 2vh;
    background: #4E7896;
    position: absolute;
    top: 30vh;

    visibility: hidden;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;

    font-size: 2vw;

    z-index: 6;
    border-radius: 15px;

}
.dismiss_button{
  height: 10vh;
  width: 13vw;

  font-size: x-large;
  color: #89B4BE;

  background: #000;
  border-radius:30px 20px 30px 20px;
  
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
}



/***********Styles crucial for page layout End***********/
.mail{
    color: white;
    text-decoration: underline;
}
.icon_container{
    width: 120px;
    height: 120px;
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
    width: 100px;
    height: 100px;
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
    height:50px;
    width: 50px;
}
.sendButton{
    position: absolute;
    top: 85vh;

    width: 15vw;
    height: 10vh;
    background: white;
    border-radius: 15px;

    font-size: xx-large;
    color: black;

    display: flex;
    justify-content: center;
    align-items: center;


}
@media (max-width:991px){
    .main_container{
        width: 100vw;
    }
    .header{
        font-size: 10vw;
    }
    
    .feedback_container{
        font-size: 2.5vw;
    }

  
 

}

@media (max-width:500px){
    .feedback_container{
        width: 50vw;
        font-size: 3.5vw;
    }
    .socials_container{
        gap: 50vw;
    }
    .sendButton{
        width: 25vw;
    }
  
}
</style>