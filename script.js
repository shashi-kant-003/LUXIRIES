//  locomotive syntax
scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
});


// back to top animation in footer
// document.querySelector(".footer h2").addEventListener("click",()=>{
//     scroll.scrollTo(0)
// })


// image animation on page 2
var elems = document.querySelectorAll(".elem")
var main=document.querySelector("#page2")
elems.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
       var bgimg= ele.getAttribute("data-img")
       main.style.backgroundImage=`url(${bgimg})`

    })
})


// gsap animation 


