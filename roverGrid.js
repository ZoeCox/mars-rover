const roverImg = new Image();
const gridSize = 100;
roverImg.src = "./assets/roverImg.png";
const grid = document.querySelector("#grid");
for (let i = 0; i < gridSize; i++) {
  const divElement = document.createElement("div");
  divElement.id = `grid-div-${i}`;
  // console.log(divElement.id);
  divElement.innerHTML = i;
  grid.appendChild(divElement);
}

const block1 = document.querySelector("#grid-div-0");
// block1.appendChild(roverImg);
