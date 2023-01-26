const default_d = 16
const default_c = "black"
const clear = document.getElementById("clear")

clear.onclick = () => reloadGrid();

const container = document.querySelector("#container");

const grid = document.createElement("div");
grid.id = "grid";

container.appendChild(grid);

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function setupGrid(size){
for (let x = 0; x < size * size; x++) {
    const box = document.createElement("div");
    box.addEventListener("mouseover", changeColor);
    box.addEventListener('mousedown', changeColor);
    grid.appendChild(box);
}
};

function changeColor(e) {
    if (e.type === "mouseover" && !mouseDown) return
    e.target.style.backgroundColor = "red"
};

function clearGrid() {
    grid.innerHTML = "";
};

function reloadGrid() {
    clearGrid();
    setupGrid(default_d);
}

window.onload = () => {
    setupGrid(default_d);
};