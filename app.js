let button=document.querySelector("button");

button.addEventListener("click",()=>{
      let height = parseFloat(document.getElementById("height").value) / 100;
  let weight = parseFloat(document.getElementById("weight").value);
  let bmi = weight / (height * height);

  document.getElementById("bmi-result").value = bmi.toFixed(2);

  let condition = "";
  if (bmi < 18.5) {
    condition = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    condition = "Normal  weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    condition = "Overweight";
  } else {
    condition = "Obese";
  }

  document.getElementById("condition").innerText = `Weight Condition : ${condition}`;


});
