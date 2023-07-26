function roll() {

  let x = document.getElementById("value").value;
 
  let sum = Math.floor(1 + Math.random() * x);
  

  if (x > 0) {
    
    document.getElementById("result").innerHTML = sum;

  } else {

    alert("You have to pick the amount of sides for your Dice!");

  }
}
