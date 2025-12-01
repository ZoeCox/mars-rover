const grid = document.querySelector("#grid");
for (let i = 0; i < 100; i++) {
  const divElement = document.createElement("div");
  divElement.id = `grid-div-${i}`;
  console.log(divElement.id);
  divElement.innerHTML = i;
  grid.appendChild(divElement);
}
