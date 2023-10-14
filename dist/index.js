let button = document.querySelector(".toggle-theme");
let body = document.querySelector("body");
let clicked = true;
button.addEventListener("click", (e) => {
  e.preventDefault;
  if (clicked === false) {
    button.classList = "toggle-theme button-dark";
    body.classList = "body bg-dark";
    return (clicked = true);
  }
  if (clicked === true) {
    button.classList = "toggle-theme button-white";
    body.classList = "body bg-white";
    return (clicked = false);
  }
});
