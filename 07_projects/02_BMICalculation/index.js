const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  const p1 = document.querySelector(".result");

  if (height === " " || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter a valid Height ${height}`;
  } else if (weight === " " || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(1);
    result.innerHTML = `Your BMI is: ${bmi}`;
    if (bmi < 18.6) {
      p1.innerHTML = `Under-Weight`;
      p1.style.color = "red";
    }
    if (bmi >= 18.6 && bmi < 24.9) {
      p1.innerHTML = `Normal`;
      p1.style.color = "Green";
    } else {
      p1.innerHTML = `Over-Weight`;
      p1.style.color = "red";
    }
  }
});
