const slideshowElements = document.querySelectorAll('.slideshow-element');


let countElements = 1;



setInterval(()=>{
    let currentElement = document.querySelector(".current");
    countElements ++;
    currentElement.classList.remove("current");

    if(countElements > slideshowElements.length){
        slideshowElements[0].classList.add("current");
    }else{
        currentElement.nextElementSibling.classList.add("current");
    }

    
}, 2000)