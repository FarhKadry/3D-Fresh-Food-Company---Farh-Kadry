// CARDS ARRAY
let cards = [
  {
    icon: "public/images/recycle.svg",
    title: "Recyclable Packaging",
    desc: "Track every step from farm to your doorstep",
    positionClass: ""
  },
  {
    icon: "public/images/electricity.svg",
    title: "Transparent Supply Chain",
    desc: "Track every step from farm to your doorstep",
    positionClass: "offers_card_position2"
  },
  {
    icon: "public/images/recycle.svg",
    title: "Recyclable Packaging",
    desc: "Track every step from farm to your doorstep",
    positionClass: ""
  },
  {
    icon: "public/images/sun.svg",
    title: "Natural Sunlight",
    desc: "Track every step from farm to your doorstep",
    positionClass: "offers_card_position2"
  }
];
let container = document.getElementById("cardsContainer1");
cards.forEach(card => {
  container.innerHTML += `
    <div class="offers_card move_focus scroll_animate ${card.positionClass}">
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

// ARPAGE1
const arButton1 = document.getElementById("arButton1");
const productModel1 = document.getElementById("productModel1");

arButton1.addEventListener("click", () => {
  if (productModel1.activateAR) {
    productModel1.activateAR();
  } else {
    alert("AR is not supported on this device.");
  }
});
