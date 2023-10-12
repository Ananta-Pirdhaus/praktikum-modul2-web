function appendToResult(value) {
  document.getElementById("result").value += value;
}

function calculateResult() {
  try {
    document.getElementById("result").value = eval(
      document.getElementById("result").value
    );
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}

function clearResult() {
  document.getElementById("result").value = "";
}

function clearEntry() {
  var currentValue = document.getElementById("result").value;
  document.getElementById("result").value = currentValue.slice(0, -1);
}
