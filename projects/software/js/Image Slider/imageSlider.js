// Image Slider Program

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider); //activates the slider once DOM is loaded!!

function initializeSlider(){
    if(slides.length > 0){ //if there are slides, do this. If there are NO slides, dont.
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 6000);
    }
    
    // console.log(`intervalId = ${intervalId}`);
}
function showSlide(index){
    
    if(index >= slides.length){
        slideIndex = 0; //resets the index so  the images loop
    }
    else if(index < 0){
        slideIndex = slides.length - 1; //if we go less than the min number of INDEX, this will take us to the end 
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide"); //removes .displaySlide from all images first
    })
    slides[slideIndex].classList.add("displaySlide"); //adds .displaySlide to current image in index
        
}
function previousSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);//passes in slideIndex after detrementing it
}
function nextSlide(){
    clearInterval(intervalId);
    slideIndex++;
    showSlide(slideIndex);//passes in slideIndex after incrimenting it
    intervalId = setInterval(nextSlide, 6000);
}