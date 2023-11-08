const urlParams = new URLSearchParams(window.location.search);

const resultText = urlParams.get("resultText");
const bmi = urlParams.get("bmi");
const intText = urlParams.get("intText");

document.getElementById("resultText").innerHTML = resultText;
document.getElementById("bmi").innerHTML = bmi;
document.getElementById("interpText").innerHTML = intText;
