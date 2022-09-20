let arrayHist = [];
const inputDistance = document.getElementById("inputDistance");
const inputTime = document.getElementById("inputTime");
const inputClear = document.getElementById("inputClear");
const inputCalc = document.getElementById("inputCalc");
const inputResult = document.getElementById("inputResult");
const textareaResult = document.getElementById("textareaResult");

inputCalc.onclick = function calculateAverageSpeed() {
  let result = (inputDistance.value / inputTime.value).toFixed(2);
  if (result > 0) {
    inputResult.value = result;
    arrayHist.push(result);
    localStorage.setItem("hist", arrayHist);
    textareaResult.textContent = arrayHist.join("\n");
  }
  else inputResult.value = "Valor inválido.";
}

inputClear.onclick = function clearAllInputs() {
  inputDistance.value = "";
  inputTime.value = "";
  inputResult.value = "";
}

window.onload = () => {
  arrayHist = localStorage.getItem("hist").split(",");
  textareaResult.textContent = arrayHist.join("\n");
}
