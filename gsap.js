gsap.registerPlugin(ScrollTrigger);

        const carousel = document.getElementById('carousel');
        
        // CAROUSEL INFINITE
        const carouselContent = carousel.innerHTML;
        carousel.innerHTML += carouselContent + carouselContent + carouselContent;

        // SCROLL LOOP
        const itemWidth = carousel.scrollWidth / 4;

        // BASE AMIMATION
        const baseAnimation = gsap.to(carousel, {
            x: -itemWidth,
            duration: 20,
            ease: 'none',
            repeat: -1,
            modifiers: {
                x: function(x) {
                    return (parseFloat(x) % itemWidth) + 'px';
                }
            }
        });

        // CHANGE DIRECTION AND SPEED
        ScrollTrigger.create({
            trigger: '.carousel-wrapper',
            start: 'top bottom',
            end: 'bottom top',
            onUpdate: (self) => {
                // (velocity > 0), move right (positive timeScale)
                // (velocity < 0), move left (negative timeScale)
                const scrollVelocity = self.getVelocity();
                const speedModifier = 1 + (scrollVelocity / 500);
                
                gsap.to(baseAnimation, {
                    timeScale: speedModifier,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });
// TIMELINE
gsap.fromTo(".timeline_div", 
  {
    scaleY: 0
  },
  {
    scaleY: 1,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".p2_timeline",
      start: "top center",
      end: "bottom center",
      scrub: 1,
      markers: false
    }
  }
);