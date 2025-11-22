gsap.registerPlugin(ScrollTrigger);


        const carousel = document.getElementById('carousel');
        
        // Clone the carousel content multiple times for seamless loop
        const carouselContent = carousel.innerHTML;
        carousel.innerHTML += carouselContent + carouselContent + carouselContent;

        // Get the width of one set of items (original content)
        const itemWidth = carousel.scrollWidth / 4;

        // Base animation - moves left continuously (items appear to move right)
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

        // ScrollTrigger to modify speed and direction based on scroll
        ScrollTrigger.create({
            trigger: '.carousel-wrapper',
            start: 'top bottom',
            end: 'bottom top',
            onUpdate: (self) => {
                // When scrolling down (velocity > 0), move right (positive timeScale)
                // When scrolling up (velocity < 0), move left (negative timeScale)
                const scrollVelocity = self.getVelocity();
                const speedModifier = 1 + (scrollVelocity / 500);
                
                gsap.to(baseAnimation, {
                    timeScale: speedModifier,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });

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