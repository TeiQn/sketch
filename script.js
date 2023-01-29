const default_d = 16;
const default_c = "black";
const clear = document.getElementById("clear");
const sizeSubmit = document.querySelector(".sizeSubmit");
const gridSize = document.querySelector(".gridSize");

let currentColor = default_c;
let currentSize = default_d;

clear.onclick = () => reloadGrid();

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
    e.target.style.backgroundColor = "black";
};

function clearGrid() {
    grid.innerHTML = "";
};

function reloadGrid() {
    clearGrid();
    setupGrid(currentSize);
}

window.onload = () => {
    setupGrid(currentSize);
};

sizeSubmit.addEventListener("click", changeDim);

function changeDim(){
    currentSize = Number(gridSize.value);
    reloadGrid();
};