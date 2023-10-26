import images from "./data.js";
// console.log(images);
let slideEl = document.querySelector(".slide");
let prevEL = document.querySelector(".prev");
let nextEL = document.querySelector(".next");
let dotHolder = document.querySelector(".dot-holder");
let i = 0;
let imgEl = new Image();
slideEl.append(imgEl);
imgEl.src = images[0];

nextEL.addEventListener("click", function () {
  if (i < images.length - 1) {
    i++;
    console.log(i);
    imgEl.src = images[i];
    console.log("up");
  } else {
    i = 0;
    imgEl.src = images[i];
    console.log("down");
  }
});
prevEL.addEventListener("click", function () {
  if (i > 0) {
    i--;
    console.log(i);
    imgEl.src = images[i];
  } else {
    i = images.length - 1;
    imgEl.src = images[i];
    console.log("dowwn");
  }
});

let animator = [
  {
    opacity: 0,
  },
  {
    opacity: 1,
  },
];

for (let j = 0; j < images.length; j++) {
  let divEl = document.createElement("div");
  divEl.classList.add("dot");
  dotHolder.append(divEl);
}

//
const dots = [...document.querySelectorAll(".dot")];
dots.forEach((d, index) => {
  d.addEventListener("click", () => {
    imgEl.src = images[index];
  });
});
