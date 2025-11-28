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

// FAQJS
let faqs = [
  {
    question: "Where can I receive my products?",
    answer: "You can receive them at whichever location you set in our Hayat App."
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery usually takes between 2-4 business days."
  },
  {
    question: "Can I track my order?",
    answer: "Yes, you can track all orders through the Hayat App."
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we only ship within Egypt."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Visa, Mastercard, and cash on delivery."
  },
  {
    question: "Can I change my address?",
    answer: "Yes, you can change the address before the order is dispatched."
  }
];

// FAQ CARDS START
let faqContainer = document.querySelector(".faq_flex");
faqContainer.innerHTML = "";

for (let i = 0; i < faqs.length; i++) {

  faqContainer.innerHTML += `
    <div class="faq_card">
      <div class="flex_column">
        <h4>${faqs[i].question}</h4>
        <p class="faq_answer">${faqs[i].answer}</p>
      </div>
      <button class="icon_size1 icon_size2 offwhite_bg">
        <img class="icon1" src="public/images/arrowgreen.svg">
        <img class="icon2" src="public/images/arrowwhite.svg">
      </button>
    </div>
  `;
}

// ANSWERS
let allAnswers = document.querySelectorAll(".faq_answer");
allAnswers.forEach(a => {
  a.style.height = "0px";
  a.style.opacity = "0";
});


// CLICK TOGGLE 
let buttons = document.querySelectorAll(".icon_size2");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let answer = btn.parentElement.querySelector(".faq_answer");

    if (answer.style.height === "0px") {
      answer.style.height = answer.scrollHeight + "px";
      answer.style.opacity = "1";
    } else {
      answer.style.height = "0px";
      answer.style.opacity = "0";
    }
  });
});

// MODEL CONTROLS
let model = document.getElementById("productModel2");
// BUTTONS references
let btnTop = document.getElementById("control_top");
let btnBottom = document.getElementById("control_bottom");
let btnOG = document.getElementById("control_og");
let allButtons = [btnTop, btnBottom, btnOG];
//REMOVEACTIVE
function resetButtons() {
  allButtons.forEach(btn => {
    btn.style.background = "";
    btn.style.color = "";
  });
}
//BTNACTIVE
function activateButton(btn) {
  btn.style.background = "var(--mainaccent)";
  btn.style.color = "var(--offwhite)";
}
// TOPVIEW
btnTop.addEventListener("click", () => {
  resetButtons();
  activateButton(btnTop);
  model.setAttribute("camera-orbit", "0deg -90deg 50m"); 
});

// BOTTOMVIEW
btnBottom.addEventListener("click", () => {
  resetButtons();
  activateButton(btnBottom);
  model.setAttribute("camera-orbit", "0deg 180deg 50m"); 
});

//OGVIEW
btnOG.addEventListener("click", () => {
  resetButtons();
  activateButton(btnOG);
  model.setAttribute("camera-orbit", "240deg 70deg 50m");
});
