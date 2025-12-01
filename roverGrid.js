const roverImg = new Image();
roverImg.src = "./assets/roverImg.png";
// roverImg.style.objectFit = "scale";
const grid = document.querySelector("#grid");
for (let i = 0; i < 100; i++) {
  const divElement = document.createElement("div");
  divElement.id = `grid-div-${i}`;
  // console.log(divElement.id);
  divElement.innerHTML = i + 1;
  grid.appendChild(divElement);
}

const block1 = document.querySelector("#grid-div-0");
block1.appendChild(roverImg);
