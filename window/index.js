const openButton = document.querySelector("#openOverlay");
const body = document.body;

openButton.addEventListener("click", function(e) {
    e.preventDefault();
    const overlayElement = document.createElement("div");
    overlayElement.classList.add("overlay");

    const containerElement = document.createElement("div");
    containerElement.classList.add("modal-container");

    const contentElement = document.createElement("div");
    contentElement.classList.add("content");

    contentElement.innerHTML = "hello <b>world</b>!"

    const closeElement = document.createElement("a");
    closeElement.classList.add("close");
    closeElement.textContent = ("x");
    closeElement.href = "#";

    closeElement.addEventListener("click", function (e) {
        e.preventDefault();
        body.removeChild(overlayElement);
    });

    overlayElement.addEventListener("click", function(e) {
        if (!e.targer.classList.contains("content")) {
            closeElement.click();
        };
    })

    

    overlayElement.appendChild(containerElement);
    containerElement.appendChild(contentElement);
    contentElement.appendChild(closeElement);
    body.appendChild(overlayElement);
});