var timeIsInMilitaryTime = false;
const d = new Date();
var date = d.getDate();
var hours = d.getHours();
var ampm;
ampm = hours >= 12 ? "PM" : "AM" 

function timeUpdate() { 
  var n = new Date();

  //add leading zero for hours
  if (hours < 10) {
    hours = hours.toString().padStart(2, '0');
  }

  var minutes = n.getMinutes();      
  //add leading zero for minutes
  if (minutes < 10) {
    minutes = minutes.toString().padStart(2, '0');
  }

  var seconds = n.getSeconds();
  //add leading zero for seconds
  if (seconds < 10) {
    seconds = seconds.toString().padStart(2, '0');
  }
  // timeToggle();
  var strTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
  document.getElementById('time-display').innerHTML = strTime;
  setInterval(timeUpdate, 1000)

}

function timeToggle() {
  if (timeIsInMilitaryTime === true) {
    //format for non-military time
    hours = hours % 12; //convert to non-military time
    timeIsInMilitaryTime = false; //change flag
    console.log('a')
  } else {
    hours = d.getHours();
    timeIsInMilitaryTime = true;
    console.log('b')
  }
}

// timeToggle(); // trying to make the default time be non-military
timeUpdate(); // call function so it shows time on opening page


var dayStr;
// var date = new Date();
var year = d.getFullYear() 
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var day = d.getDay();
day = days[day]; //convert interger day to human readable day
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var month = d.getMonth();
month = months[month] //convert interger month to human readable month

// var date = date.getDate();

var suffix;
function nthNumber(number) {
  if (number > 3 && number < 21) return "th";
  switch (number % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

suffix = nthNumber(date)

dayStr = day + ", " + month + " " + date + suffix + " " + year
document.getElementById('date-display').innerHTML = dayStr;

//Add button onto page
//Button triggers alert function
//Add second button onto page
//Second button triggers different alert function
//Function for military time
//Buttons in one line
//When one function is running, how do you end the other function?
//How do you get one function to stop and then trigger the next function?
//One function for getting time; one function for converting time to military or non-military time
//Global timeIsInMilitaryTime; variable

// function militaryTimeUpdate() {
//   const date = new Date();
//   var hours = date.getHours();
//   var ampm;
//   ampm = hours >= 12 ? "PM" : "AM" 

//   //add leading zero for hours
//   if (hours < 10) {
//     hours = hours.toString().padStart(2, '0');
//   }

//   var minutes = date.getMinutes();      
//   //add leading zero for minutes
//   if (minutes < 10) {
//     minutes = minutes.toString().padStart(2, '0');
//   }

//   var seconds = date.getSeconds();
//   //add leading zero for seconds
//   if (seconds < 10) {
//     seconds = seconds.toString().padStart(2, '0');
//   }

//   var strTime = hours + ":" + minutes + ":" + seconds + " " + ampm;

//   document.getElementById('time-display').innerHTML = strTime;
//   setInterval(militaryTimeUpdate, 1000)
// }
