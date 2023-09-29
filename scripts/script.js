let gridSize = 20;

function genDivs(gridSize) {
    let container = document.querySelector(".container");
    container.style.gridTemplate = `repeat(${gridSize},1fr)/repeat(${gridSize},1fr)`;
    let pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => pixel.remove());
    for (currentRow = 0; currentRow < gridSize; currentRow++) {
        for (currentPixel = 0; currentPixel < gridSize; currentPixel++) {
            let pixel = document.createElement("div");
            pixel.setAttribute("class", "pixel");
            pixel.addEventListener("pointerover", addRgb);
            container.appendChild(pixel);
        }
    }
}

genDivs(gridSize);

function changeGridSize(input) {
    genDivs(input);
}

function addRgb(e) {
    e.target.style = `background-color: rgb(${Math.floor(
        Math.random() * 256
    )},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
    e.target.removeEventListener("pointerover", addRgb);
}

function addWb(e) {
    e.target.style = `background-color: black`;
    e.target.removeEventListener("pointerover", addWb);
}

function setBw() {
    let allPixels = document.querySelectorAll(".pixel");
    allPixels.forEach((pixel) => {
        pixel.style = "background-color:white";
        pixel.addEventListener("pointerover", addWb);
    });
}

function resetContainer() {
    let allPixels = document.querySelectorAll(".pixel");
    allPixels.forEach((pixel) => {
        pixel.style = "background-color:white";
        pixel.addEventListener("pointerover", addRgb);
    });
}
