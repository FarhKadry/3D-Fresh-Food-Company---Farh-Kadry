// let parent = document.getElementById("leafParent");
// let model  = document.getElementById("leafModel");

// // ORBITS
// let defaultOrbit =  "0deg 0deg 1m";
// let scrollOrbit  =  "0deg 0deg 0.5m";
// let hoverOrbit   = "0deg 0deg 0.5m";

// // SCROLL
// window.addEventListener("scroll", () => {
//     if (window.scrollY > 100) {
//         model.cameraOrbit = scrollOrbit;
//     } else {
//         model.cameraOrbit = defaultOrbit;
//     }
// });

// // MOUSEENTER PARENT
// parent.addEventListener("mouseenter", () => {
//     model.cameraOrbit = hoverOrbit;
// });

// // MOUSELEAVE PARENT
// parent.addEventListener("mouseleave", () => {
//     model.cameraOrbit = defaultOrbit;
// });
const cards = [
  {
    icon: "public/images/recycle.svg",
    title: "Recyclable Packaging",
    desc: "Track every step from farm to your doorstep",
    posClass: ""
  },
  {
    icon: "public/images/electricity.svg",
    title: "Transparent Supply Chain",
    desc: "Track every step from farm to your doorstep",
    posClass: "offers_card_position2"
  },
  {
    icon: "public/images/recycle.svg",
    title: "Recyclable Packaging",
    desc: "Track every step from farm to your doorstep",
    posClass: ""
  },
  {
    icon: "public/images/sun.svg",
    title: "Natural Sunlight",
    desc: "Track every step from farm to your doorstep",
    posClass: "offers_card_position2"
  }
]; const container = document.getElementById("cardsContainer");

cards.forEach(card => {
  container.innerHTML += `
    <div class="offers_card move_focus scroll_animate ${card.posClass}">
      <div class="title">
        <img src="${card.icon}">
        <h4 class="text_bold h4_2">${card.title}</h4>
        <p class="text_regular">${card.desc}</p>
        <button class="learn_more">
          Learn more <img src="public/images/arrowgreen.svg" alt="">
        </button>
      </div>
    </div>
  `;
});
