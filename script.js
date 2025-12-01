const turnLeftBtn = document.querySelector("#turn-left");
const turnRightBtn = document.querySelector("#turn-right");
const moveForwardBtn = document.querySelector("#move-forward");
const submitBtn = document.querySelector("#submit-btn");
const displayCommand = document.querySelector("#display-command");
const outputInfo = document.querySelector("#output-info");
const directionText = document.querySelector("#direction-count-text");
const buttons = [turnLeftBtn, turnRightBtn, moveForwardBtn];
let commandString = [];
const plateauXCoord = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const plateauYCoord = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const rover = {
  positionX: 0,
  positionY: 0,
  direction: 1,
};

const moveLimitHandler = () => {
  if (commandString.length >= 15) {
    alert(
      "You have reached the maximum number of moves, please submit current moves before adding more"
    );
    return;
  }
};

const directionCalc = (directionVal) => {
  switch (directionVal) {
    case 0:
      return "North";
      break;
    case 1:
      return "East";
      break;
    case 2:
      return "South";
      break;
    case 3:
      return "West";
      break;
  }
};

const directionHandler = (input) => {
  switch (input) {
    case turnLeftBtn:
      commandString.push("left");
      rover.direction === 0 ? (rover.direction = 3) : rover.direction--;
      console.log(rover.direction);
      break;
    case turnRightBtn:
      commandString.push("right");
      rover.direction === 3 ? (rover.direction = 0) : rover.direction++;
      console.log(rover.direction);
      break;
    case moveForwardBtn:
      commandString.push("forward");
      switch (rover.direction) {
        case 0:
          rover.positionY--;
          if (rover.positionY === -1) {
            rover.positionY = 10;
          }
          break;
        case 2:
          rover.positionY++;
          if (rover.positionY === 11) {
            rover.positionY = 0;
          }
          break;
        case 1:
          rover.positionX++;
          if (rover.positionX == 11) {
            rover.positionX = 0;
          }
          break;
        case 3:
          rover.positionX--;
          if (rover.positionX == -1) {
            rover.positionX = 10;
          }
          break;
      }
      console.log(rover.positionX, rover.positionY);
      break;
  }
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    outputInfo.innerHTML = "";
    moveLimitHandler();
    directionHandler(buttons[i]);
    directionText.innerHTML = `Directions: ${commandString.length}`;
    //fix outputting sixteen once limit is reached
    displayCommand.innerHTML = "";
    displayCommand.append(commandString);
    console.log(commandString);
  });
}

submitBtn.addEventListener("click", () => {
  commandString = [];
  displayCommand.innerHTML = "Path complete, please input more commands";
  outputInfo.innerHTML = `Rover position is ${rover.positionX},
  ${rover.positionY} and is facing ${directionCalc(rover.direction)} (${
    rover.positionX
  }:${rover.positionY}:${directionCalc(rover.direction)})`;
});
