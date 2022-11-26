const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const item = document.querySelector("#item");

let currentRight = 0;
let currentleft = 0;

rightBtn.addEventListener("click", function(e) {
    e.preventDefault();
    currentRight += 70;

    item.style.transform = "translate-x(currentRight)"
});

leftBtn.addEventListener("click", function(e) {
    e.preventDefault();
});
