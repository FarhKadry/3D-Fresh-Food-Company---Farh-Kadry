// ARPAGE2
let arButton2 = document.getElementById("arButton2");
let productModel2 = document.getElementById("productModel2"); // Fixed typo

arButton2.addEventListener("click", () => {
  if (productModel2.canActivateAR) { // Also changed activateAR to canActivateAR for checking
    productModel2.activateAR();
  } else {
    alert("AR is not supported on this device.");
  }
});

gsap.registerPlugin(ScrollTrigger);

let video = document.getElementById("Video");

video.addEventListener("loadedmetadata", () => {
  gsap.to(video, {
    currentTime: video.duration,
    ease: "none",
    scrollTrigger: {
      trigger: "#vidSection",
      start: "top top",
      end: "center center",
      scrub: true,
    }
  });
});