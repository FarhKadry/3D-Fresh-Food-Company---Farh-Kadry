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
// CAROUSEL 1
let carousel = document.getElementById('carousel');
// CAROUSEL INFINITE
let carouselContent = carousel.innerHTML;
carousel.innerHTML += carouselContent + carouselContent + carouselContent;
// SCROLL LOOP
let itemWidth = carousel.scrollWidth / 4;
// BASE ANIMATION
let baseAnimation = gsap.to(carousel, {
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

// NORMAL ANIM
baseAnimation.timeScale(1);

// CHANGE DIRECTION BASED ON SCROLL
ScrollTrigger.create({
    trigger: '.carousel-wrapper',
    start: 'top bottom',
    end: 'bottom top',
    onUpdate: (self) => {
        let velocity = self.getVelocity();
        
        // OSCROLLING IN OPPOSITE DIRECTION
        if (velocity > 0) {
            // down = left
            gsap.to(baseAnimation, {
                timeScale: 1 + Math.abs(velocity / 400),
                duration: 0.5,
                ease: 'power1.out'
            });
        } else if (velocity < 0) {
            // up = right
            gsap.to(baseAnimation, {
                timeScale: -1 - Math.abs(velocity / 400),
                duration: 0.5,
                ease: 'power1.out'
            });
        } else {
            // normal animation
            gsap.to(baseAnimation, {
                timeScale: 1,
                duration: 0.5,
                ease: 'power1.out'
            });
        }
    }
});

// CAROUSEL 2
let carousel2 = document.getElementById('carousel2');
let carouselContent2 = carousel2.innerHTML;
carousel2.innerHTML += carouselContent2 + carouselContent2 + carouselContent2;
let itemWidth2 = carousel2.scrollWidth / 4;

let baseAnimation2 = gsap.to(carousel2, {
    x: itemWidth2,
    duration: 20,
    ease: 'none',
    repeat: -1,
    modifiers: {
        x: function(x) {
            let parsed = parseFloat(x);
            return -((-parsed % itemWidth2 + itemWidth2) % itemWidth2) + 'px';
        }
    }
});

// Start with default speed
baseAnimation2.timeScale(1);

// CAROUSEL 2 - OPPOSITE DIRECTION BEHAVIOR
ScrollTrigger.create({
    trigger: '.carousel-wrapper2',
    start: 'top bottom',
    end: 'bottom top',
    onUpdate: (self) => {
        let velocity = self.getVelocity();
        // OSCROLLING IN OPPOSITE DIRECTION
        if (velocity > 0) {
            // down =  right
            gsap.to(baseAnimation2, {
                timeScale: 1 + Math.abs(velocity / 400),
                duration: 0.5,
                ease: 'power1.out'
            });
        } else if (velocity < 0) {
            // up = left
            gsap.to(baseAnimation2, {
                timeScale: -1 - Math.abs(velocity / 400),
                duration: 0.5,
                ease: 'power1.out'
            });
        } else {
            // normal animation
            gsap.to(baseAnimation2, {
                timeScale: 1,
                duration: 0.5,
                ease: 'power1.out'
            });
        }
    }
});
const carousels = document.getElementById('carousels');

if (carousels) {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    let smoother = ScrollSmoother.create({
        wrapper: '#carousels',
        content: '#carousels > *',
        smooth: 1.2,
        effects: true
    });
}
