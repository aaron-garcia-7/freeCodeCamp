const searchBar = document.querySelector("#searchBar");

searchBar.addEventListener("search", () => {
  alert(`Yeah, so this doesn't actually work.`);
});

//
// Tesla Image Expand
//

// const imageExpand = () => {
//   const demoImg = document.querySelector("#demoImg");
//   const fullscreen = document.querySelector("#fullscreen");
//   const fullscreenClose = document.querySelector("#fullscreenClose");

//   demoImg.addEventListener("click", () => {
//     fullscreen.classList.remove("hidden");
//   });

//   fullscreenClose.addEventListener("click", () => {
//     fullscreen.classList.add("hidden");
//   });
// };

// imageExpand();

const demoImg = document.querySelector("#demoImg");
const fullscreen = document.querySelector("#fullscreen");
const fullscreenClose = document.querySelector("#fullscreenClose");

demoImg.addEventListener("click", () => {
  fullscreen.classList.remove("hidden");
  document.body.classList.add("overflowHidden");
});

fullscreenClose.addEventListener("click", () => {
  fullscreen.classList.add("hidden");
  document.body.classList.remove("overflowHidden");
});

//
// Another way to make the function below
//

// demoImg.addEventListener("click", openImg);
// fullscreenClose.addEventListener("click", closeImg);

// function openImg() {
//   fullscreen.classList.remove("hidden");
// }
// function closeImg() {
//   fullscreen.classList.add("hidden");
// }

//
// Continue below
//

fullscreen.addEventListener("click", (event) => {
  // console.log(event.target);
  let fullscreenImg = document.querySelector("#fullscreenImg");
  if (event.target.classList.contains("fullscreenImg")) {
    fullscreen.classList.add("overflowHidden");
  } else {
    fullscreen.classList.add("hidden");
    document.body.classList.remove("overflowHidden");
  }
});
