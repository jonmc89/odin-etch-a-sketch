const mainContainer = document.querySelector(".container");
const clearButton = document.querySelector(".clear_button");
const gridButton = document.querySelector(".number_of_square");
const blackButton = document.querySelector(".button_grey");
const blueButton = document.querySelector(".button_blue");
const yellowButton = document.querySelector(".button_yellow");
const redButton = document.querySelector(".button_red");
const purpleButton = document.querySelector(".button_purple");

function applyBaseColor(baseClass) {
  const gridSquares = document.querySelectorAll(".grid_square");
  gridSquares.forEach((gridSquare) => {
    gridSquare.classList.remove("grid_square_blue", "grid_square_yellow", "grid_square_red", "grid_square_purple");
    gridSquare.classList.add(baseClass);
  });
}

blackButton.addEventListener("click", () => {
  applyBaseColor("grid_square_black");
});

blueButton.addEventListener("click", () => {
  applyBaseColor("grid_square_blue");
});

yellowButton.addEventListener("click", () => {
  applyBaseColor("grid_square_yellow");
});

redButton.addEventListener("click", () => {
  applyBaseColor("grid_square_red");
});

purpleButton.addEventListener("click", () => {
  applyBaseColor("grid_square_purple");
});

gridButton.addEventListener("click", () => {
  let gridAmount = prompt("What size grid would you like?");
  
  if (gridAmount && !isNaN(gridAmount) && gridAmount > 0) {
    const squareSize = 600 / gridAmount;

    mainContainer.innerHTML = "";

    for (let i = 0; i < gridAmount * gridAmount; i++) {
      let gridSquare = document.createElement("div");
      gridSquare.className = "grid_square";
      gridSquare.style.width = `${squareSize}px`;
      gridSquare.style.height = `${squareSize}px`;
      mainContainer.appendChild(gridSquare);
      gridSquare.addEventListener("mouseover", () => {
        gridSquare.classList.add("grid_square_hovered");
      });
    }
  } else {
    alert("Please enter a valid grid size.");
  }
});

clearButton.addEventListener("click", () => {
  const gridSquares = document.querySelectorAll(".grid_square");
  gridSquares.forEach((gridSquare) => {
    gridSquare.className = "grid_square";
  });
});
