// Ensure GSAP and ScrollTrigger are loaded
gsap.registerPlugin(ScrollTrigger);

// Animate the products on scroll
gsap.utils.toArray('.product').forEach(product => {
    gsap.fromTo(product, 
        { opacity: 0, y: 50 }, 
        { 
            opacity: 1, 
            y: 0, 
            duration: .3, 
            scrollTrigger: {
                trigger: product,
                start: "top bottom",
                end: "bottom top",
                scrub: 0,
                markers: false
            }
        }
    );
});
