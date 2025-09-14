/* PART 2: Functions with Parameters, Return, and Scope  */

// A function that can perform different math operations
function calculate(num1, num2, operation) {
  if (operation === "sum") {
    return num1 + num2;
  } else if (operation === "multiply") {
    return num1 * num2;
  } else {
    return "Invalid operation";
  }
}

// Function to show results in the page
function showResult(operation) {
  // Local variables (scope)
  let a = parseFloat(document.getElementById("num1").value);
  let b = parseFloat(document.getElementById("num2").value);

  // Call calculate() with parameters
  let result = calculate(a, b, operation);

  // Show result on page
  document.getElementById("calc-result").textContent = 
    "Result: " + result;
}

/* PART 3: CSS And JS Integration */

// Flip card animation
function flipCard() {
  let card = document.getElementById("myCard");
  card.classList.toggle("flipped"); // Add/remove class
}

// Toggle modal popup
function toggleModal() {
  let modal = document.getElementById("myModal");
  modal.classList.toggle("show");
}

// Start/stop loader
function toggleLoader() {
  let loader = document.getElementById("myLoader");
  if (loader.style.display === "block") {
    loader.style.display = "none"; // Stop loader
  } else {
    loader.style.display = "block"; // Show loader
  }
}
