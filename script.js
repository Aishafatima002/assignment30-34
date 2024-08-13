//Question1
// let Date1= new Date();
// var date2=Date1.toString()
// document.write("<br>",date2)

//Question2
// function getMonth7() {
//     const my_month=[  "January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"]
// let date= new Date()
// let month= my_month[date.getMonth()]
// document.write("Current Month is: "+month)
//     }
//     getMonth7()
//  Question3
//  function getDay() {
//     const my_day=[  "monday","tues","wed","thrus","fri","sat","sun"]
//  let date= new Date()
//  let days= my_day[date.getDay()]
//  document.write("Today is: "+days)
//     }
//     getDay()

//Question4
// function checkWeekend() {
//     const now = new Date();
//     const day = now.getDay(); // 0 = Sunday, 6 = Saturday

//     if (day === 0 || day === 6) { // 0 is Sunday, 6 is Saturday
//         alert("It’s Fun day");
//     }
// }  
// checkWeekend()

// //Question5
// function checkDate() {
//     const now = new Date();
//     const dayOfMonth = now.getDate();

//     if (dayOfMonth < 16) {
//         alert("First fifteen days of the month");
//     } else {
//         alert("Last days of the month");
//     }
// }
// checkDate()
// //Question6
// function checkTimeOfDay() {
//     const now = new Date();
//     const hours = now.getHours();

//     if (hours < 12) {
//         document.write("It's AM");
//     } else {
//         document.write("It's PM");
//     }
// }
// checkTimeOfDay()
// //Question7
// function createDate() {
//     // Create a Date object for December 31, 2020
//     const laterDate = new Date(2020, 11, 31); // Months are 0-based, so 11 is December

//     console.log(laterDate);
//     document.write(`The date is: ${laterDate.toDateString()}`);
// }
// createDate()
// //Question8
// function calculateDaysPast() {
//     // Define the start date of Ramadan (June 18, 2015)
//     const startRamadan = new Date(2015, 5, 18); // Months are 0-based in JavaScript, so 5 is June

//     // Get the current date
//     const today = new Date();

//     // Calculate the difference in milliseconds
//     const timeDifference = today - startRamadan;

//     // Convert milliseconds to days
//     const daysPast = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

//     alert(`Days since 1st Ramadan (June 18, 2015): ${daysPast}`);
// }
// calculateDaysPast()
// //Question9
// function calculateElapsedSeconds() {
//     // Reference date (January 1, 2015)
//     const referenceDate = new Date(2015, 0, 1); // Months are 0-based, so 0 is January

//     // Get the current date
//     const currentDate = new Date();

//     // Calculate the difference in milliseconds
//     const millisecondsElapsed = currentDate - referenceDate;

//     // Convert milliseconds to seconds
//     const secondsElapsed = Math.floor(millisecondsElapsed / 1000);

//     // Display the result
//     document.getElementById('result').textContent = `Seconds elapsed since January 1, 2015: ${secondsElapsed}`;
// }
// calculateElapsedSeconds()

// //Question10
// function manipulateDate() {
//     // Create a Date object for the current date and time
//     let currentDate = new Date();

//     // Extract the hours
//     let hours = currentDate.getHours();

//     // Reset the date object to an hour ahead
//     currentDate.setHours(hours + 1);

//     // Display the updated date object in the browser
//     document.getElementById('result').textContent = `Updated Date and Time: ${currentDate.toString()}`;
// }
// manipulateDate()

//Question11
const currentDate = new Date();

// Copy the current date to a new Date object
const pastDate = new Date(currentDate);

// Subtract 100 years (in milliseconds) from the date
pastDate.setFullYear(currentDate.getFullYear() - 100);

// Convert the date to a string for displaying
const formattedDate = pastDate.toDateString();

// Show the date in an alert box
alert('Date 100 years back: ' + formattedDate);
//Question12
const age = prompt("Please enter your age:");

// Get the current year
const currentYear = new Date().getFullYear();

// Calculate the birth year
const birthYear = currentYear - parseInt(age, 10);

// Display the birth year in an alert box
alert("You were born in the year: " + birthYear);



//Question13
  // Prompt user for their name
  const customerName = prompt("Please enter your name:");

  // Get the current month
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  // Get number of units and charges per unit from user
  const units = parseFloat(prompt("Enter the number of units consumed:"));
  const chargesPerUnit = parseFloat(prompt("Enter the charges per unit:"));

  // Calculate Net Amount Payable and Gross Amount Payable
  const netAmount = (units * chargesPerUnit).toFixed(2);
  const latePaymentSurcharge = 50; // Example surcharge amount
  const grossAmount = (parseFloat(netAmount) + latePaymentSurcharge).toFixed(2);

  // Display the details
  document.write('<div class="bill-details">');
  document.write('<div><strong>Customer Name:</strong> ' + customerName + '</div>');
  document.write('<div><strong>Current Month:</strong> ' + currentMonth + '</div>');
  document.write('<div><strong>Number of Units:</strong> ' + units.toFixed(2) + '</div>');
  document.write('<div><strong>Charges per Unit:</strong> $' + chargesPerUnit.toFixed(2) + '</div>');
  document.write('<div><strong>Net Amount Payable (within Due Date):</strong> $' + netAmount + '</div>');
  document.write('<div><strong>Late Payment Surcharge:</strong> $' + latePaymentSurcharge.toFixed(2) + '</div>');
  document.write('<div><strong>Gross Amount Payable (after Due Date):</strong> $' + grossAmount + '</div>');
  document.write('</div>');