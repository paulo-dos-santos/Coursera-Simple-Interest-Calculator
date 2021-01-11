function compute() {
  let principal = document.getElementById("principal").value;
  // if is not a number or less or equal to 0
  if (isNaN(principal) || principal <= 0) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
    return;
  }
  // get the rate
  let rate = document.getElementById("rate").value;
  // get the years
  let years = document.getElementById("years").value;
  // if empty string or less that 1 or more that 10
  if (years == "" || years < 1 || years > 10) {
    alert("Enter the No. of Years");
    document.getElementById("years").focus();
    return;
  }
  // interest
  let interest = (principal * years * rate) / 100;
  // get actual Year + number or years selected by user (to int)
  let futureYear = new Date().getFullYear() + parseInt(years);

  // Template literals (Template strings) you can see more here:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  document.getElementById(
    "result"
  ).innerHTML = `If you deposit <span class="highlighted">${principal}</span>,<br/>
  at an interest rate of <span class="highlighted">${rate}%</span>.<br/>
  You will receive an amount of <span class="highlighted">${interest}</span>,<br/>
  in the year <span class="highlighted">${futureYear}</span>`;

  // pass focus to principal so the user can put another value
  document.getElementById("principal").focus();
}

function changeRate() {
  let rate = document.getElementById("rate").value;
  // Template literals (Template strings)
  document.getElementById("txt_rate").innerHTML = `${rate} %`;
}
