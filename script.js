const turnLeftBtn = document.querySelector("#turn-left");
const turnRightBtn = document.querySelector("#turn-right");
const moveForwardBtn = document.querySelector("#move-forward");
const textInput = document.querySelector("#text-direction-input");
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");
const displayCommand = document.querySelector("#display-command");
const outputInfo = document.querySelector("#output-info");
const buttons = [turnLeftBtn, turnRightBtn, moveForwardBtn];
const acceptedTextInput = ["l", "r", "m"];
let commandString = [];

const rover = {
  positionX: 0,
  positionY: 0,
  direction: 0,
};

const directionCalc = (directionVal) => {
  switch (directionVal) {
    case 0:
      return "N";
      break;
    case 1:
      return "E";
      break;
    case 2:
      return "S";
      break;
    case 3:
      return "W";
      break;
  }
};

const roverCompassHandler = () => {
  switch (rover.direction) {
    case 0:
      rover.positionY++;
      if (rover.positionY === 10) {
        rover.positionY = 0;
      }
      break;
    //north handling
    case 1:
      rover.positionX++;
      if (rover.positionX === 10) {
        rover.positionX = 0;
      }
      break;
    //east handling
    case 2:
      rover.positionY--;
      if (rover.positionY === -1) {
        rover.positionY = 9;
      }
      break;
    //south handling
    case 3:
      rover.positionX--;
      if (rover.positionX === -1) {
        rover.positionX = 9;
      }
      break;
    //west handling
    default:
      console.warn("Not a valid input for compass direction");
  }
};

const directionHandler = (input, leftOption, rightOption, forwardOption) => {
  switch (input) {
    case leftOption:
      commandString.push("left");
      rover.direction === 0 ? (rover.direction = 3) : rover.direction--;
      break;
    case rightOption:
      commandString.push("right");
      rover.direction === 3 ? (rover.direction = 0) : rover.direction++;
      break;
    case forwardOption:
      commandString.push("forward");
      roverCompassHandler();
      break;
    default:
      console.warn("Not a valid input for input direction");
  }
};

textInput.addEventListener("keydown", () => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
});

const textValidationHandler = (textArr) => {
  for (let i = 0; i < textArr.length; i++) {
    if (textArr[i] !== "l" && textArr[i] !== "r" && textArr[i] !== "m") {
      textArr.splice(i, 1);
      console.warn("Invalid input detected and has been removed");
    }
    outputInfo.innerHTML = "";
    directionHandler(textArr[i], "l", "r", "m");
    displayCommand.innerHTML = "";
  }
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    outputInfo.innerHTML = "";
    directionHandler(buttons[i], turnLeftBtn, turnRightBtn, moveForwardBtn);
    displayCommand.innerHTML = "";
    displayCommand.append(commandString);
    console.log(commandString);
  });
}

submitBtn.addEventListener("click", () => {
  let splitTextArr = textInput.value.toLowerCase().split("");
  textValidationHandler(splitTextArr);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
  commandString = [];
  displayCommand.innerHTML = "Path complete, please input more commands";
  outputInfo.innerHTML = `Rover position is ${rover.positionX},
  ${rover.positionY} and is facing ${directionCalc(rover.direction)} (${
    rover.positionX
  }:${rover.positionY}:${directionCalc(rover.direction)})`;
  textInput.value = "";
});

resetBtn.addEventListener("click", () => {
  location.reload();
});
