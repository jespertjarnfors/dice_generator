function roll() {

  let x = document.getElementById("value_1").value;
  let y = document.getElementById("value_2").value;

  let x_spin = Math.floor(1 + Math.random() * x);
  let y_spin = Math.floor(1 + Math.random() * y);

  let sum = x_spin + y_spin;

  let resultsDisplay = [x_spin, " + ", y_spin, " = ", sum]; // Created an Array to display the two spins and result in one variable.

  let removeComma = resultsDisplay.join(" "); // Removes the commas in the Array and replaces them with a space.

  var diceAnimation = document.getElementById("click"); 

  if (x > 0 && y > 0) { 

    diceAnimation.classList.remove("rotation");
    void diceAnimation.offsetWidth; // Forces the browser to trigger the animation reset instantly.
    diceAnimation.classList.add("rotation");
    document.getElementById("result").innerHTML = removeComma;

  } else {

    alert("You have to pick the amount of sides for your Die!");
    
  }

  // The test below measures if the two randomly-generated die equals the sum.
  
  function test () {

    if (((x_spin = 7) + (y_spin = 5)) != 12) {
      console.log('Test failed, sum is not equal.');
    }
    else {
      console.log('Test successful.');
    }
  }
  
  test();
}


