const divisibleDiv = document.getElementById("divisible");
const firstNumberDivision = document.getElementById("first-number-division");
const secondNumberDivision = document.getElementById("second-number-division");
const submitDivision = document.getElementById("submit-division");

submitDivision.addEventListener("click", (e) => {
  e.preventDefault();
  const number_a = firstNumberDivision.value;
  const number_b = secondNumberDivision.value;

  console.log(number_a + " " + number_b + "\n");

  if (number_b === "0") {
    divisibleDiv.innerHTML =
      "<p class='text-danger fs-4 text-center'>You dare go against the laws of science?</p>";
  } else if (number_a % number_b == "0") {
    divisibleDiv.innerHTML =
      "<p class='text-danger fs-4 text-center'>" +
      number_a +
      " is divisible by " +
      number_b +
      " !</p>";
  } else {
    divisibleDiv.innerHTML =
      "<p class='text-danger fs-4 text-center'>" +
      number_a +
      " is NOT divisible by " +
      number_b +
      " ...</p>";
  }
});
