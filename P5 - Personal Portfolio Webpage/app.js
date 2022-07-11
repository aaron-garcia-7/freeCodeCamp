//
// GSAP Animations
//

gsap.registerPlugin(ScrollTrigger);

// Intro Animation

gsap.from(".heroText", 1, { scale: 0.4 });

// Scroll To Top

gsap.from("#toTop", {
  scrollTrigger: {
    trigger: "#about",
    toggleActions: "play none none reverse",
    start: "top center",
    markers: false,
  },
  opacity: 0,
  duration: 0.4,
});

//
// Skill Bars
//

let skillsTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#skillGraph",
    toggleActions: "play none none reverse",
    start: "top 70%",
    markers: false,
  },
  defaults: {
    duration: 0.8,
  },
});

skillsTL
  .to(".bar1", { width: "90%" }, 0)
  .to(".bar2", { width: "85%" }, 0.1)
  .to(".bar3", { width: "75%" }, 0.2)
  .to(".bar4", { width: "80%" }, 0.3)
  .to(".bar5", { width: "90%" }, 0.4)
  .to(".bar6", { width: "75%" }, 0.5);

//
// Services Animation
//

let servicesTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#services",
    toggleActions: "play none none reverse",
    start: "top 25%",
    scrub: false,
    markers: false,
  },
  defaults: {
    duration: 0.8,
    opacity: 0,
    scale: 0.8,
  },
});

servicesTL
  .from(".card1", {}, 0)
  .from(".card2", {}, 0.3)
  .from(".card3", {}, 0.6)
  .from(".card4", {}, 0.9)
  .from(".card5", {}, 1.2)
  .from(".card6", {}, 1.5);

//
// Dynamic title change
//

const titleChange = document.querySelector("#titleChange");
const titles = [
  "Web Developer",
  "UX Designer",
  "React Developer",
  "Interaction Designer",
  "JavaScript Engineer",
  "Visual Designer",
];
let i = 0;
let n = 0;
let currentTitle = [];
let isDeleting = false;
let isEnd = false;

function typeEffect() {
  isEnd = false;
  titleChange.innerHTML = currentTitle.join("");

  if (i < titles.length) {
    if (!isDeleting && n <= titles[i].length) {
      currentTitle.push(titles[i][n]);
      n++;
      titleChange.innerHTML = currentTitle.join("");
    }
    if (isDeleting && n <= titles[i].length) {
      currentTitle.pop(titles[i][n]);
      n--;
      titleChange.innerHTML = currentTitle.join("");
    }
    if (n === titles[i].length) {
      isEnd = true;
      isDeleting = true;
    }
    if (isDeleting && n === 0) {
      currentTitle = [];
      isDeleting = false;
      i++;
      if (i === titles.length) {
        i = 0;
      }
    }
  }
  const spedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (100 - 200) + 150;
  const time = isEnd ? 2500 : isDeleting ? spedUp : normalSpeed;
  setTimeout(typeEffect, time);
}

window.setTimeout(typeEffect, 2000);

//
//// SideNav Animations
//

let navbar = document.querySelector("#navbar");

const linkHome = document.querySelector(".linkHome");
const linkAbout = document.querySelector(".linkAbout");
const linkServices = document.querySelector(".linkServices");
const linkResume = document.querySelector(".linkResume");
const linkPortfolio = document.querySelector(".linkPortfolio");
const linkContact = document.querySelector(".linkContact");

let allLinks = [
  linkHome,
  linkAbout,
  linkServices,
  linkResume,
  linkPortfolio,
  linkContact,
];

linkHome.addEventListener("mouseenter", exposeLinkText1);
linkHome.addEventListener("mouseleave", hideLinkText1);
linkAbout.addEventListener("mouseenter", exposeLinkText2);
linkAbout.addEventListener("mouseleave", hideLinkText2);
linkServices.addEventListener("mouseenter", exposeLinkText3);
linkServices.addEventListener("mouseleave", hideLinkText3);
linkResume.addEventListener("mouseenter", exposeLinkText4);
linkResume.addEventListener("mouseleave", hideLinkText4);
linkPortfolio.addEventListener("mouseenter", exposeLinkText5);
linkPortfolio.addEventListener("mouseleave", hideLinkText5);
linkContact.addEventListener("mouseenter", exposeLinkText6);
linkContact.addEventListener("mouseleave", hideLinkText6);

let sideLinkText1 = document.querySelector(".sideLinkText1");
let sideLinkText2 = document.querySelector(".sideLinkText2");
let sideLinkText3 = document.querySelector(".sideLinkText3");
let sideLinkText4 = document.querySelector(".sideLinkText4");
let sideLinkText5 = document.querySelector(".sideLinkText5");
let sideLinkText6 = document.querySelector(".sideLinkText6");

const allLinkText = [
  sideLinkText1,
  sideLinkText2,
  sideLinkText3,
  sideLinkText4,
  sideLinkText5,
  sideLinkText6,
];

function exposeLinkText1() {
  sideLinkText1.classList.add("opacity1");
}
function hideLinkText1() {
  sideLinkText1.classList.remove("opacity1");
}

function exposeLinkText2() {
  sideLinkText2.classList.add("opacity1");
}
function hideLinkText2() {
  sideLinkText2.classList.remove("opacity1");
}

function exposeLinkText3() {
  sideLinkText3.classList.add("opacity1");
}
function hideLinkText3() {
  sideLinkText3.classList.remove("opacity1");
}

function exposeLinkText4() {
  sideLinkText4.classList.add("opacity1");
}
function hideLinkText4() {
  sideLinkText4.classList.remove("opacity1");
}

function exposeLinkText5() {
  sideLinkText5.classList.add("opacity1");
}
function hideLinkText5() {
  sideLinkText5.classList.remove("opacity1");
}

function exposeLinkText6() {
  sideLinkText6.classList.add("opacity1");
}
function hideLinkText6() {
  sideLinkText6.classList.remove("opacity1");
}

//
// // Burger Animations
//

const burger = document.querySelector("#burger");
const burgerLines = document.querySelectorAll(".burgerLine");
const navbarListItems = document.querySelectorAll(".navbarListItem");
const menuSlider = document.querySelector(".menuSlider");
const sideNavList = document.querySelector("#sideNavList");

burger.addEventListener("mouseenter", () => {
  burgerLines.forEach((line) => {
    line.classList.add("stretch");
  });
});

burger.addEventListener("mouseleave", () => {
  burgerLines.forEach((line) => {
    line.classList.remove("stretch");
  });
});

burger.addEventListener("click", () => {
  burgerLines.forEach((line) => {
    line.classList.toggle("active");
  });
  menuSlider.classList.toggle("active");
  navbar.classList.toggle("active");
  navbarListItems.forEach((li) => {
    li.classList.toggle("active");
  });
  sideNavList.classList.toggle("active");
  allLinks.forEach((link) => {
    link.classList.toggle("active");
    link.classList.toggle("jello");
  });
  allLinkText.forEach((linkText) => {
    linkText.classList.toggle("active");
  });
});

function closeMenu() {
  burgerLines.forEach((line) => {
    line.classList.remove("active");
  });
  menuSlider.classList.remove("active");
  navbar.classList.remove("active");
  navbarListItems.forEach((li) => {
    li.classList.remove("active");
  });
  sideNavList.classList.remove("active");
  allLinks.forEach((link) => {
    link.classList.remove("active");
  });
  // linkHome.classList.remove("active");
  // linkAbout.classList.remove("active");
  // linkServices.classList.remove("active");
  // linkResume.classList.remove("active");
  // linkPortfolio.classList.remove("active");
  // linkContact.classList.remove("active");

  allLinkText.forEach((linkText) => {
    linkText.classList.remove("active");
  });
}

window.addEventListener("resize", closeMenu);

//
// Menu Close on menu link select
//

allLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

//
// Portfolio Tile Shake ("Coming Soon Projects")
//

const tile3 = document.querySelector(".tile3");
const tile4 = document.querySelector(".tile4");

tile3.addEventListener("click", shakeBox3);
tile4.addEventListener("click", shakeBox4);

function shakeBox3() {
  tile3.classList.add("shake-horizontal");
  tile3.addEventListener("animationend", () => {
    tile3.classList.remove("shake-horizontal");
  });
}

function shakeBox4() {
  tile4.classList.add("shake-horizontal");
  tile4.addEventListener("animationend", () => {
    tile4.classList.remove("shake-horizontal");
  });
}

//
// Testimonials section using Swiper.js
//

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  speed: 600,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});
