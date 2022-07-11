//
// Landing Animation
//

const heroText = document.querySelector("#heroText");
const ctaBtn = document.querySelector("#ctaBtn");
const ctaBtn2 = document.querySelector("#ctaBtn2");

let timeline = gsap.timeline({ defaults: { duration: 1.2 } });

timeline
  .from(heroText, { opacity: 0, x: 400 })
  .from(ctaBtn, 2, { opacity: 0, ease: "back.out(1)", y: 200 }, 0.8)
  .from(ctaBtn2, 2, { opacity: 0 }, 1.4);

//
// Features Card animations
//

const featuresDiv = document.querySelector("#featuresDiv");
const features = document.querySelectorAll(".feature");

gsap.registerPlugin(ScrollTrigger);

let featuresTL1 = gsap.timeline({
  defaults: { duration: 1 },
  scrollTrigger: {
    trigger: featuresDiv,
    start: "top 30%",
    toggleActions: "restart none none reverse",
    markers: false,
    pin: false,
  },
});

featuresTL1.from(features, { opacity: 0, y: 200, stagger: 0.2, ease: "back" });

//
// Card Hover Animations
//

const feature1 = document.querySelector(".feature1");
const feature2 = document.querySelector(".feature2");
const feature3 = document.querySelector(".feature3");

// feature1.addEventListener("mouseenter", () => {
//   feature1.style.background = "#c0c9c4ad";
//   feature1.transitionDuration = "1s";
// });
// feature1.addEventListener("mouseleave", () => {
//   feature1.style.background = "#c0c9c469";
// });

//
// upArrow scroll animation
//

const featuresTitle = document.querySelector("#featuresTitle");

gsap.from(toTop, 2, {
  scrollTrigger: {
    trigger: featuresTitle,
    start: "top top",
    toggleActions: "restart none none reverse",
    markers: false,
    pin: false,
  },
  opacity: 0,
  y: 100,
  ease: "back",
});
gsap.to(upArrow, 1, {
  scrollTrigger: {
    trigger: "#videoDiv",
    start: "46px bottom",
    toggleActions: "restart none none reverse",
    markers: false,
    id: "Video Blue section",
  },
  color: "#ebebe9",
});
gsap.to(upArrow, 1, {
  scrollTrigger: {
    trigger: "#optionsDiv",
    start: "20px bottom",
    toggleActions: "restart none none none",
    markers: false,
    id: "Prices/ Light section",
  },
  color: "#000",
});
gsap.to(upArrow, 1, {
  scrollTrigger: {
    trigger: "#invite",
    start: "46px bottom",
    toggleActions: "restart none none reverse",
    markers: false,
    id: "subscribe/ blue section",
  },
  color: "#ebebe9",
});
gsap.to(upArrow, 1, {
  scrollTrigger: {
    trigger: "#footer",
    start: "40px bottom",
    toggleActions: "restart reverse reverse reverse",
    markers: false,
    id: "footer/ Light section",
  },
  color: "#000",
});

let header = document.querySelector("#header");
let headerImg = document.querySelector("#header-img");
let logoText = document.querySelector("#logoText");

gsap.to(header, 0.4, {
  scrollTrigger: {
    trigger: ctaBtn,
    toggleActions: "restart none none reverse",
    start: "top 80px",
    end: "40px bottom",
    markers: false,
  },
  height: "4rem",
});
gsap.to(headerImg, 0.1, {
  scrollTrigger: {
    trigger: ctaBtn,
    toggleActions: "restart none none reverse",
    start: "top 80px",
    end: "40px bottom",
    markers: false,
  },
  width: "2rem",
});
gsap.to(logoText, 0.4, {
  scrollTrigger: {
    trigger: ctaBtn,
    toggleActions: "restart none none reverse",
    start: "top 80px",
    end: "40px bottom",
    markers: false,
  },
  fontSize: "1rem",
});
