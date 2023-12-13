import gsap from "gsap";
import CSSPlugin from "gsap/CSSPlugin";

gsap.registerPlugin(CSSPlugin);

let timeline = gsap.timeline();

function animateElement(element){
    gsap.to(element,{
        backgroundColor:'red',
        duration:1
    });
    console.log('animation triggered');
}

function anotherFunction() {
    // Your other function logic here
}

// Export an object containing all the functions
const animationHelper = {
    animateElement,
    anotherFunction,
    // Add more functions here as needed
};

export default animationHelper;
