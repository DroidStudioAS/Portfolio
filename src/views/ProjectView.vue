<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';
import project from '../models/project';

let headerColor = ref("#000");
let close_pc_button = ref(null);
let pc = ref(null);
let project_name = ref(null)

let project_name_in_focus = ref(null)

let project_type_str = ref(null);
let project_logo = ref(null);
let project_desc = ref(null);
let project_stack = ref(null);
let wwwImage =ref(null);
let ghImage =ref(null);
let playStoreImage =ref(null);
let project_gh_link = ref(null);
let www_link = ref(null);


let www_cont = ref(null);
let gh_cont = ref(null);
let ps_cont= ref(null);


function closePc(){
    pc.value.style.visibility = 'hidden';
    playStoreImage.value.style.display = 'none'
    wwwImage.value.style.display = 'none'
    gh_cont.value.style.display='none'

}
function showLinks(project){

gh_cont.value.style.display='block'
if(project.type===0){
    project_type_str.value='Mobile App'
    wwwImage.value.style.display='none'
    www_cont.value.style.display='none'
    //should be block but no play store acount active yet
    ps_cont.value.style.display = 'none'
    playStoreImage.value.style.display='none'
}else{
    project_type_str.value='Website'
    wwwImage.value.style.display='block'
    www_cont.value.style.display='block'

    playStoreImage.value.style.display='none'
    ps_cont.value.style.display='none'
}
}
function showPc(project){
    //set project name
    project_name_in_focus.value=project.name;
    project_gh_link.value=project.gitLink;
    www_link.value=project.webLink;

    //set project type
    showLinks(project);
    
    //set image
    project_logo=project.logo;
    //set description
    project_desc.value=project.desc;
    project_stack.value=project.techstack;



    //toggle visibility
    pc.value.style.visibility = 'visible';

}

const projects = [
    new project(
        "Fit Tracker",null,0,'./icon_app_fittrack.png' 
    ,  'This App Will Help You Keep Track Of Your Training, Eating and Weight schedule, Giving You An Overview Of Your Daily, Weekly And Monthly Habits!'
    , 'Frontend: XML, Java,Android Studio; Backend: Node.Js, MySQL;'
    , 'https://github.com/DroidStudioAS/FitTrack'
    ),
    new project(
        'Infinite Swipe',null,1,'./icon_app_infiniteswipe.png'
    ,  'An Online Arcade Game Where You Can Spend Hours Avoiding Bombs And Trying To Keep Your Character Alive!'
    , 'Frontend: Vue.JS; Backend: Mars Engine (JavaScript), MySQL',
    'https://github.com/DroidStudioAS/Infinite-Swipe',
    'https://181g123.e2.mars-hosting.com/'
    ),
    new project('Calculator',null,0,'./icon_app_calc.png'
    ,   'A Simple Calculator App That Supports All Basic Arythmetic Operations'
    ,   'Frontend: XML, Java,Android Studio; Backend: Backendless;'
    ,   'https://github.com/DroidStudioAS/Calculator'
    ),
    new project('My Portfolio',null,1,'./icon_app_me.png'
    ,   'The Website You Are Browsing Right Now Was Also Developed By Me From Scratch.'
    ,   'Frontend: Vue.JS; Backend: Node.JS, MySQL;'
    ,   'https://github.com/DroidStudioAS/Portfolio'
    ),
    new project('Quote Stop',null,0,'./icon_app_qs.png'
    , 'Get Free, Unlimited Access To Thousands Of Inspiring Quotes With QuoteStop. Built With Quotable API'
    , 'Frontend: XML, Java, Android Studio; Backend: SQLite;'
    , 'https://github.com/DroidStudioAS/QuoteStop'
    ),
    new project('RunTrack',null,0,'./icon_app_rt.png'
    , 'Track The Time You Spent, Distance You Passed And The Route You Took On Your Run With RunTrack'
    , 'Frontend: XML, Java, Android Studio, Google Maps API; Backend: Backendless;'),
    new project('Flying Donut',null,0,'./icon_app_donut.png'
    , 'Try And Take The Donut To The Moon In This Infectious Mobile Game!'
    , 'Frontend: XML, Java, Android Studio; Backend: SQLite;'
    ,'https://github.com/DroidStudioAS/Running-Tracker'
    ),
    new project('QuizMe',null,0,'./icon_app_quiz.png'
    , 'Test Your Knowledge Of 10 Diffrent Subjects With My App QuizMe'
    , 'Frontend: XML, Java, Android Studio; Backend: SQLite;'
    ,'https://github.com/DroidStudioAS/QuizMe'
    ),
];

function evenSetter(){
    for(let i = 0; i <projects.length; i++){
        console.log(projects[i])
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
    evenSetter()

})


</script>
<template>
    <div class="header_container">
        <div class="header_link_container">
            <a target="_blank" href="https://github.com/DroidStudioAS"><img src="/github-mark.png"></a>
            <span class="page_title">
            <h1>Projects</h1>
            </span>
        </div>
        
    </div> 
    <div class="main_container">
        <div v-for="project in projects" 
        :key="project.name" >
        <div v-if="project.even===false"
        class="project_image_container"
        @click="showPc(project)">
            <img src="/icon_folder_even.png">
            <div class="project_label">
             {{ project.name }}
             </div>
        </div>
        <div v-else
        class="project_image_container"
        @click="showPc(project)">           
         <img src="/icon_folder_uneven.png">
         <div class="project_label">
        {{ project.name }}
       
        </div>
        </div>
       

        </div>
        <div ref="pc"
         class="project_component">
            <div  ref="close_pc_button" 
            class="close_pc_container"
            @click="closePc()" >
                <img src="/button_close_cp.png">
            </div>
            <div class="project_name_container">
                <h2 ref="project_name">
                   {{project_name_in_focus}}
                </h2>
            </div>
            <div class="project_type_container">
                <h3>
                     {{ project_type_str }}
                </h3>
            </div>
            <div  class="project_logo_container">
                <img 
                :src="project_logo" ref="project_logo">
            </div>
            <div class="project_description_container">
                <p>
                    {{ project_desc }}
                    <br>
                    {{ project_stack }}
                </p>
            </div>
            <div class="project_links_container">
                 <a :href="www_link" target="_blank" ref="www_cont"> <img src="/icon_www.png" ref="wwwImage"></a>   
                 <a :href="project_gh_link" target="_blank" ref="gh_cont"> <img src="/github-mark.png" ref="ghImage"></a>  
                 <a ref="ps_cont"> <img src="/icon_playstore.png"  ref="playStoreImage"></a>  
            </div> 
        </div>
</div>

</template>
<style scoped>

/************CRUCIAL START*************/
*{
    color: white;
}
h1{
    color: black;
}

.header_link_container{
 width: 100vw;
 height: 25vh;

 padding-bottom: 5vh;

 display: flex;
 justify-content: center;
 align-items: center;

 background: #89B4BE;

 position: absolute;
 left: 0vw;
 top: 0vh;

 color: black;
}
.header_link_container img{
 height: 13vh;
 width: 13vh;

 display: flex;
 justify-content: center;
 align-items: center;
}
.page_title{
 width: 40vw;
 height: 25vh;

 display: flex;
 justify-content: start;
 align-items: center;

 font-size: 5vw;
 font-weight: 700;
 color: black;
 background: #89B4BE;
 transition: color 1s ease-in-out;
}
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
    height: 20vh;
    font-size: 10cap;
    font-weight: 700;
    


    color: black;
    background: #89B4BE;

    transition: color 1s ease-in-out;
    color: black;
}
.project_image_container{
    display: flex;
    flex-flow: column nowrap;

    justify-content: center;
    align-items: center;
    
}
.project_label{ 
    position:relative;
    bottom: 10vh;
    
 
   
   
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
    width: 50vw;
    height: 70vh;
    position: fixed;
    left: 25vw;

    display: flex;
    flex-flow: column nowrap;

    border-radius: 15px;

    visibility: hidden;

    color: white;

}
/********pc_layout_items*******/
/***50vh and 45vw is the space the children are working with***/
/** 
-10vh projectname (40 leftt)
-8vh projecttype (32 left)
-20vh description (12 left)
-8-8-10-8-10-8-10-20-7
*/
.close_pc_container{
    width: 5vw;
    height: 8vh;

    position: absolute;
    right: 0;

    border-radius: 15px;
}
.close_pc_container img {
    width: 50px;
    height: 50px;
    position: absolute;
    right: 0;
}
.project_name_container{
    width: 50vw;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5vw;
}
.project_type_container{
    height: 10vh;
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2vw


}
.project_logo_container{
height: 15vh;
width: 50vw;
display: flex;
justify-content: center;
align-items: center;

}
.project_logo_container img{
height: 100px;
width: 100px;

justify-content: center;
align-items: center;
}
.project_description_container{
    width: 50vw;
    height: 30vh;
    
    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;
    padding-bottom: 8vh;
    padding-left: 8vh;
    padding-right: 8vh;



    font-size: 1.5vw

}
.project_links_container{
    height: 10vh;
    width: 50vw;

    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;

    border-radius: 0 0 15px 15px;


    position: absolute;
    bottom: 0%;
}
.project_links_container img{
    height: 7vh;
}
  /********project_component end*********/


/************Crucial End*************/



/*******************Media Queries Start********************/
@media (min-width:767px) and (max-width:991px){
    .main_container{
        width: 100vw;
    }
    .page_title{
      font-size: 5vw;
    }
    .project_description_container{
        font-size: 1.9vw;
    }
  
}
@media (max-width:767px){
   .page_title{
     font-size: 5vw;
   }
    .main_container{
        width: 100vw;
    }
    .project_description_container{
        font-size: 2vw;
    }
    @media (max-width:500px) {
        .close_pc_container img{
            height: 30px;
            width: 30px;
        }
       .project_component{
        width: 80vw;
        left: 10vw;
       }
       .project_name_container{
        width: 80vw;
        font-size: 5vw;
       }
       .project_type_container{
        width: 80vw;
        font-size:5vw;
    }
       .project_logo_container{
        width: 80vw;
       }
       .project_description_container{
        width: 80vw;
        font-size: 3.5vw;
       }
       .project_links_container{
        width: 80vw;
       }
       .page_title{
        font-size: 5.2vw;
       }
    }

 
 
}
@media (min-width:1200px){
    .main_container{
        padding-left: 15vw;
        padding-right: 15vw;

    }
}
/*******************Media Queries End********************/

</style>