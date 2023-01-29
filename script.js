const default_d = 16;
const default_c = "black";
const default_m = "default";
const clear = document.getElementById("clear");
const sizeSubmit = document.querySelector(".sizeSubmit");
const gridSize = document.querySelector(".gridSize");
const setColor = document.querySelector(".setColor");
const colorSubmit = document.querySelector(".colorSubmit");
const rainbow = document.getElementById("rainbow");

let currentColor = default_c;
let currentSize = default_d;
let currentMode = default_m;

clear.onclick = () => reloadGrid();
rainbow.onclick = () => rainbowify();

const container = document.querySelector("#container");

const head = document.createElement("h1");
head.textContent = "Pixel Sketch";
const grid = document.createElement("div");
grid.id = "grid";

container.appendChild(head);
container.appendChild(grid);
document.getElementById("grid").style.boxShadow = "10px 20px 30px gray";

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function setupGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let x = 0; x < size * size; x++) {
        const box = document.createElement("div");
        box.addEventListener("mouseover", changeColor);
        box.addEventListener('mousedown', changeColor);
        grid.appendChild(box);
}
};

function changeColor(e) {
    if (e.type === "mouseover" && !mouseDown) return;
    if (currentMode === "rainbowified") {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else if (currentMode === default_m){
    e.target.style.backgroundColor = currentColor;
    }
};

function clearGrid() {
    grid.innerHTML = "";
};

function reloadGrid() {
    clearGrid();
    setupGrid(currentSize);
    gridSize.value = "";
    setColor.value = "";
}

window.onload = () => {
    setupGrid(currentSize);
};

sizeSubmit.addEventListener("click", changeDim);
colorSubmit.addEventListener("click", switchColor);

function changeDim(){
    currentSize = Number(gridSize.value);
    reloadGrid();
};

function switchColor(){
    currentColor = String(setColor.value);
    currentMode = default_m;
};

function rainbowify(){
   currentMode = "rainbowified";
};