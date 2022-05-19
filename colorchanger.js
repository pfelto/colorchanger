const ele = document.querySelector(":root");
let color = getComputedStyle(ele);
const button = document.getElementById("button");
const span = document.getElementById("color");

const bgcolors = ["red", "blue", "purple", "green", "yellow"];

button.addEventListener("click", () => {
  let curIndex = bgcolors.indexOf(color.getPropertyValue("--bg-color"));
  let nextIndex = curIndex + 1;
  if (nextIndex === bgcolors.length) nextIndex = 0;
  ele.style.setProperty("--bg-color", bgcolors[nextIndex]);
  span.textContent = color.getPropertyValue("--bg-color").toLocaleUpperCase();
});

window.addEventListener("DOMContentLoaded", () => {
  ele.style.setProperty("--bg-color", bgcolors[0]);
  span.textContent = color.getPropertyValue("--bg-color").toLocaleUpperCase();
});
