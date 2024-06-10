function calcAge() { //make function for age
  // set the user input in variable
  let userDay = parseInt(document.getElementById("day").value),
    userMonth = parseInt(document.getElementById("month").value),
    userYear = parseInt(document.getElementById("year").value);
  // set the today information in the variables
  let date = new Date(),
    dd = date.getDate(),
    mm = date.getMonth() + 1,
    yy = date.getFullYear();
// set the result of the age in the variable
  let yearResult = document.querySelector(".year-result"),
    monthResult = document.querySelector(".month-result"),
    dayResult = document.querySelector(".day-result");
  // make array for all months with different days
  const allMonths = [
    31,
    (yy % 4 === 0 && yy % 100 !== 0) || yy % 400 === 0 ? 29 : 28, //february to make sure if this year is 29 days or 28
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  if (!userDay) {  //to check if the input of days is not empty
    document.querySelector(".dayerr").style.display = "block";
    document.getElementById("day").classList.add("errorr");
    document.querySelector(".days label").style.color = "var(--Light-red)";
    document.querySelector(".dayerr").textContent = "This field is required";
  } else if (userDay > allMonths[userMonth - 1]) { //if the user input day thats not in the selected month
    document.querySelector(".dayerr").style.display = "block";
    document.getElementById("day").classList.add("errorr");
    document.querySelector(".days label").style.color = "var(--Light-red)";
    document.querySelector(".dayerr").textContent = "Must be a valid day";
  } else if (userYear == yy && userMonth == mm && userDay > dd) {       //if the user day is in future 
    document.querySelector(".dayerr").style.display = "block";
    document.querySelector(".dayerr").textContent = "Must be in the past";
    document.getElementById("day").classList.add("errorr");
    document.querySelector(".days label").style.color = "var(--Light-red)";
  } else {
    document.querySelector(".dayerr").style.display = "none";
    document.getElementById("day").classList.remove("errorr");
    document.querySelector(".days label").style.color = "var(--Light-grey)";
  }

  if (!userMonth) {  //to check if the input of months is not empty
    document.querySelector(".montherr").style.display = "block";
    document.getElementById("month").classList.add("errorr");
    document.querySelector(".months label").style.color = "var(--Light-red)";
    document.querySelector(".montherr").textContent = "This field is required";
  } else if (userMonth > 12 || userMonth < 1) { //if the user month is not valid 
    document.querySelector(".montherr").style.display = "block";
    document.getElementById("month").classList.add("errorr");
    document.querySelector(".months label").style.color = "var(--Light-red)";
    document.querySelector(".montherr").textContent = "Must be a valid month";
  } else if (userYear == yy && userMonth > mm) {       //if the user month is in future 
    document.querySelector(".montherr").style.display = "block";
    document.querySelector(".montherr").textContent = "Must be in the past";
    document.getElementById("month").classList.add("errorr");
    document.querySelector(".months label").style.color = "var(--Light-red)";
  } else {
    document.querySelector(".montherr").style.display = "none";
    document.getElementById("month").classList.remove("errorr");
    document.querySelector(".months label").style.color = "var(--Light-grey)";
  }

  if (!userYear) {  //to check if the input of year is not empty
    document.querySelector(".yearerr").style.display = "block";
    document.getElementById("year").classList.add("errorr");
    document.querySelector(".years label").style.color = "var(--Light-red)";
    document.querySelector(".yearerr").textContent = "This field is required";
  } else if (userYear > yy) {       //if the user year is in future 
    document.querySelector(".yearerr").style.display = "block";
    document.querySelector(".yearerr").textContent = "Must be in the past";
    document.getElementById("year").classList.add("errorr");
    document.querySelector(".years label").style.color = "var(--Light-red)";
  } else {
    document.querySelector(".yearerr").style.display = "none";
    document.getElementById("year").classList.remove("errorr");
    document.querySelector(".years label").style.color = "var(--Light-grey)";
  }

  if (
    !userDay ||
    !userMonth ||
    !userYear ||
    userMonth > 12 ||
    userMonth < 1 ||
    userDay > allMonths[userMonth - 1] ||
    userYear > yy ||
    userYear == yy && userMonth > mm ||
    userYear == yy && userMonth == mm && userDay > dd
  ) {
    return;   //to not make the function work if there was any error
  }

  if (userDay > dd) {
    dd += allMonths[(mm - 2 + 12) % 12]; // Get days in previous month
    mm -= 1;
  }

  if (userMonth > mm) {
    mm += 12;
    yy -= 1;
  }
//  to print the result to user
  yearResult.innerHTML = yy - userYear;
  monthResult.innerHTML = mm - userMonth;
  dayResult.innerHTML = dd - userDay;
}
