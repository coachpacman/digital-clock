function timeUpdate() {
  const date = new Date();
  var hours = date.getHours();
  var ampm;
  ampm = hours >= 12 ? "PM" : "AM" 

  //format for non-military time
  if (hours % 12 >= 1) {
    hours = hours % 12;
  }

  //add leading zero for hours
  if (hours < 10) {
    hours = hours.toString().padStart(2, '0');
  }

  var minutes = date.getMinutes();      
  //add leading zero for minutes
  if (minutes < 10) {
    minutes = minutes.toString().padStart(2, '0');
  }

  var seconds = date.getSeconds();
  //add leading zero for seconds
  if (seconds < 10) {
    seconds = seconds.toString().padStart(2, '0');
  }
  
  var strTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
  document.getElementById('time-display').innerHTML = strTime;
  setInterval(timeUpdate, 1000)

  
}

// timeUpdate(); // call function so it shows time on opening page

function militaryTimeUpdate() {
  const date = new Date();
  var hours = date.getHours();
  var ampm;
  ampm = hours >= 12 ? "PM" : "AM" 

  //add leading zero for hours
  if (hours < 10) {
    hours = hours.toString().padStart(2, '0');
  }

  var minutes = date.getMinutes();      
  //add leading zero for minutes
  if (minutes < 10) {
    minutes = minutes.toString().padStart(2, '0');
  }

  var seconds = date.getSeconds();
  //add leading zero for seconds
  if (seconds < 10) {
    seconds = seconds.toString().padStart(2, '0');
  }

  var strTime = hours + ":" + minutes + ":" + seconds + " " + ampm;

  document.getElementById('time-display').innerHTML = strTime;
  setInterval(militaryTimeUpdate, 1000)
}



var dayStr;
var date = new Date();
var year = date.getFullYear() 
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var day = date.getDate();
day = days[day]; //convert interger day to human readable day
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var month = date.getMonth();
month = months[month] //convert interger month to human readable month

var date = date.getDate();

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

function timeToggle() {
  var militaryTime;
  if (militaryTime) {
    militaryTimeUpdate();
    console.log('militaryTimeUpdate ran', 'militaryTime = ', militaryTime)
  } else {
    timeUpdate();
    console.log('timeUpdate ran', 'militaryTime = ', militaryTime)
    militaryTime = false;
  }
}

function alertOne() {
  alert("alert 1") 
}

function alertTwo() {
  alert("alert 2") 
}

//Add button onto page
//Button triggers alert function
//Add second button onto page
//Second button triggers different alert function
//Function for military time
//Buttons in one line
//When one function is running, how do you end the other function?
//How do you get one function to stop and then trigger the next function?