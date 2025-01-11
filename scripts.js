const mainContainer = document.querySelector(".container");
const clearButton = document.querySelector(".clear_button");
const gridButton = document.querySelector(".number_of_square");

gridButton.addEventListener("click", () => {
  let gridAmount = prompt("What size grid would you like?");

  // Clear existing grid
  mainContainer.innerHTML = "";

  for (let i = 0; i < gridAmount; i++) {
    let gridSquare = document.createElement("div");
    gridSquare.className = "grid_square";
    mainContainer.appendChild(gridSquare);
    gridSquare.addEventListener("mouseover", () => {
      gridSquare.classList.add("grid_square_hovered");
    });
  }
});

clearButton.addEventListener("click", () => {
  const gridSquares = document.querySelectorAll(".grid_square");
  gridSquares.forEach((gridSquare) => {
    gridSquare.className = "grid_square";
  });
});
