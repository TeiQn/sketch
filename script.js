const container = document.querySelector("#container");

for (x=0; x<256; x++) {
    const box = document.createElement("div");
    box.className = "box";
    box.textContent = "test";
    document.getElementById("container").appendChild(box);
} 

const box = document.getElementsByClassName("box");

box.addEventListener("mouseover", (event) => {
    box.classList.add("playing")
});