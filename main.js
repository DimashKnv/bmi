let ageInput = Number(document.getElementById("ageNumber").innerHTML);
const calculateButton = document.getElementById("calculateButton");

function calculateBMI(weight, height) {
  let heightInM = height / 100; // 180/100 = 1.8
  let bmi = weight / Math.pow(heightInM, 2); // 45 /1.8*1.8
  return bmi;
}

function getResult(bmi) {
  if (bmi > 25) {
    return "Перевес";
  } else if (bmi > 18) {
    return "Нормальный вес";
  } else {
    return "Недовес";
  }
}

function getInterpretation(bmi) {
  if (bmi > 25) {
    return "У Вас много лишнего веса, советуем Вам побольше двигаться";
  } else if (bmi > 18) {
    return "У Вас нормальный вес, Вам не о чем беспокоиться";
  } else {
    return "У Вас недовес, нужно есть больше еды";
  }
}

calculateButton.addEventListener("click", function () {
let heightInput = Number(document.getElementById("height").innerHTML);
let weightInput = Number(document.getElementById("weight").innerHTML);

  let bmi = calculateBMI(weightInput, heightInput); 
  let resultText = getResult(bmi);  
  let intText = getInterpretation(bmi); 

  let url = `result.html?bmi=${bmi}&resultText=${resultText}&intText=${intText}`;
  window.location.href = url;
});

const addWeightButton = document.getElementById("addWeightButton");
const subWeightButton = document.getElementById("subWeightButton");
const addAgeButton = document.getElementById("addAgeButton");
const subAgeButton = document.getElementById("subAgeButton");

function addWeight() {
  let weightInput = Number(document.getElementById("weight").innerHTML);
  return (weightInput += 1);
}

function subWeight() {
  let weightInput = Number(document.getElementById("weight").innerHTML);
  return (weightInput -= 1);
}

function addAge() {
  let ageInput = Number(document.getElementById("ageNumber").innerHTML);
  return (ageInput += 1);
}

function subAge() {
  let ageInput = Number(document.getElementById("ageNumber").innerHTML);
  return (ageInput -= 1);
}

addWeightButton.addEventListener("click", function () {
  let result = addWeight();
  document.getElementById("weight").innerHTML = result;
});

subWeightButton.addEventListener("click", function () {
  let result = subWeight();
  document.getElementById("weight").innerHTML = result;
});

addAgeButton.addEventListener("click", function () {
  let result = addAge();
  document.getElementById("ageNumber").innerHTML = result;
});

subAgeButton.addEventListener("click", function () {
  let result = subAge();
  document.getElementById("ageNumber").innerHTML = result;
});

const line = document.getElementById("line");
const height = document.getElementById("height");
const circle = document.getElementById("circle");
let circleIsDragging = false;

circle.addEventListener("mousedown", () => {
  circleIsDragging = true;
});

document.addEventListener("mousemove", (event) => {
  if (circleIsDragging) {
    const lineRect = line.getBoundingClientRect();
    const circleRect = circle.getBoundingClientRect();

    const circleX = event.clientX - lineRect.left;
    circleWidth = circleRect.width;
    lineWidth = lineRect.width;
    const newCircleX = Math.min(Math.max(circleX, 0), lineWidth - circleWidth);
    const newHeight = Math.round((newCircleX / (lineWidth - circleWidth)) * 250)
    height.textContent = newHeight

    circle.style.left = newCircleX + "px";
  }
});

document.addEventListener("mouseup", () => {
  circleIsDragging = false;
});
