gsap.registerPlugin(ScrollTrigger)


gsap.utils.toArray(".content").forEach(content=>{
    gsap.fromTo(content,
        {
            opacity:0,
            y:50
        },
    
        {
            opacity:1,
            y:0,
            duration:1,
            scrollTrigger:{
                trigger:content,
                start:"top 67%",
                end:"bottom 35%",
                scrub:true,

                // when you to animate set  of images arranged in matrix form which  enter with fade in effect with your start marker and  fade out with your  end marker then you have to use "onleave"  , "onenter" etc .

                onEnter: () => gsap.to(content, { opacity: 1, y: 0, duration: 1 }),
                onLeave: () => gsap.to(content, { opacity: 0, y: -50, duration: 1 }),
                onEnterBack: () => gsap.to(content, { opacity: 1, y: 0, duration: 1 }),
                onLeaveBack: () => gsap.to(content, { opacity: 0, y: 50, duration: 1 }),
                markers:false
            }
        }
    );
})
