document.getElementById("bmiForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const height = parseFloat(document.getElementById("height").value) / 100; // convert cm to meters
  const weight = parseFloat(document.getElementById("weight").value);

  if (isNaN(height) || isNaN(weight)) {
    document.getElementById("result").textContent =
      "Please enter valid numbers.";
    return;
  }

  const bmi = weight / (height * height);
  let resultText = `Your BMI is ${bmi.toFixed(2)}. `;

  if (bmi < 18.5) {
    resultText += "You are underweight.";
  } else if (bmi < 24.9) {
    resultText += "You have a normal weight.";
  } else if (bmi < 29.9) {
    resultText += "You are overweight.";
  } else {
    resultText += "You are obese.";
  }

  document.getElementById("result").textContent = resultText;
});
