// creating a timeline to use 
// page 1 video animation
// function loading_gsap(){
//     var tl=gsap.timeline()

// tl.to("#yellow1",{
//     top:"-100%",
//     delay:0.3,
//     duration:0.7,
//     ease:"expo.out"
// })

// tl.from("#yellow2",{
//     top:"100%",
//     delay:0.6,
//     duration:0.7,
//     ease:"expo.out"
// },"anim")
// tl.to("#loader h1",{
//     delay:0.6,
//     duration:0.7,
//     color:"black"
// },"anim")

// tl.to("#loader",{
//     opacity:0
// })

// tl.to("#loader",{
//     display:"none"
// })
// }
// loading_gsap()



//  locomotive syntax
scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
});


// back to top animation in footer
document.querySelector(".footer h2").addEventListener("click",()=>{
    scroll.scrollTo(0)
})


// image animation on page 2
var elems = document.querySelectorAll(".elem")
var main=document.querySelector("#page2")
elems.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
       var bgimg= ele.getAttribute("data-img")
       main.style.backgroundImage=`url(${bgimg})`

    })
})


// back to top option

