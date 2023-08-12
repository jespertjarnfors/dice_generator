let x;
let y;

let x_spin;
let y_spin;

let sum;

let resultsDisplay;

function diceRotation() {

  var diceAnimation = document.getElementById("click"); 

  diceAnimation.classList.remove("rotation");
  void diceAnimation.offsetWidth; // Forces the browser to trigger the animation reset instantly.
  diceAnimation.classList.add("rotation");

}

function numberGenerator() {

  x = document.getElementById("value_1").value;
  y = document.getElementById("value_2").value;

  x_spin = Math.floor(1 + Math.random() * x);
  y_spin = Math.floor(1 + Math.random() * y);

  sum = x_spin + y_spin;

  return x_spin, y_spin, sum;

}

function results() {

  let resultsArray = [x_spin, " + ", y_spin, " = ", sum]; // Created an Array to display the two spins and result in one variable.

  resultsDisplay = resultsArray.join(" "); // Removes the commas in the Array and replaces them with a space.
 
  return resultsDisplay;

}

function roll() {

  numberGenerator();

  results();

  
  if (x > 0 && y > 0) { 

    diceRotation();

    document.getElementById("result").innerHTML = resultsDisplay;

  } else {

    alert("You have to pick the amount of sides for your Die!");
    
  }
  test();
}


function test() {

  console.log(x_spin,y_spin);

}

