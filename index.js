var bill = document.querySelector("#note");
var buttons = document.querySelectorAll(".btn");
var customPercent = document.querySelector(".custom");
var people = document.querySelector("#people");


let billInput = 0;
let peopleInput = 0;

document.querySelector("#note").addEventListener("input", billCal);
document.querySelector("#people").addEventListener("input", peopleValue);
document.querySelector(".custom").addEventListener("input", customNumber);
document.querySelector(".reset").addEventListener("click", resetCal);




function billCal() {
  billInput = Number(bill.value);

  if(billInput === 45 ){
    alert ("Hi Dad Shanice, Sammi is saying Hello");
  }
  document.querySelector(".total-cash").innerHTML = "$" + billInput.toFixed(2);
}


buttons.forEach((e) => {
  e.addEventListener("click", function(e) {
    buttonValue = Number(e.target.value);

    if (peopleInput >= 1) {
      tipTotal = buttonValue * billInput;
      tipPerPerson = tipTotal / peopleInput;
       amtPerPerson = (tipTotal + billInput) / peopleInput;
      document.querySelector(".tip-person").innerHTML = "$" + tipPerPerson.toFixed(2);
      document.querySelector(".total-cash").innerHTML = "$" + amtPerPerson.toFixed(2);
    } else {
      alert("Number of people can't be zero");
    }

  });
});


function customNumber (){

    if (peopleInput >= 1) {
      percentValue = Number(customPercent.value) / 100;
      feesValue = billInput * percentValue;
      totalValue = (billInput + feesValue) / peopleInput;
      tipPerPerson = feesValue / peopleInput;
      document.querySelector(".tip-person").innerHTML = "$" + tipPerPerson.toFixed(2);
      document.querySelector(".total-cash").innerHTML = "$" + totalValue.toFixed(2);
    } else {
      alert("Number of people can't be zero");
    }

}



function peopleValue() {
  billInput = Number(bill.value);
  peopleInput = Number(people.value);
  total = billInput / peopleInput;
  document.querySelector(".total-cash").innerHTML = "$" + total.toFixed(2);
  if (peopleInput === 0) {
    document.querySelector(".total-cash").innerHTML = "$0.00";
  }
}





function resetCal() {
  bill.value = "";
  people.value = "";
  customPercent.value = "";
  buttonValue = "";

  billInput = 0;
  peopleInput = 0;
  tipPerPerson = 0;

  zero = billInput * peopleInput;
  document.querySelector(".tip-person").innerHTML = "$" + tipPerPerson.toFixed(2);
  document.querySelector(".total-cash").innerHTML = "$" + zero.toFixed(2);

}
