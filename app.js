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
  // renderDateAndTime();
  var strTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
  document.getElementById('time-display').innerHTML = strTime;

}

function toggleTime() {
  if (timeIsInMilitaryTime === true) {
    hours = d.getHours();
    timeIsInMilitaryTime = false; //change flag
    document.getElementById("toggle-button").innerHTML = "Change to 12-hour clock"
    console.log('a')
  } else {
    hours = d.getHours();
    //format for non-military time
    hours = hours % 12; //convert to non-military time
    if (hours === 0) { //account for the midnight hour
      hours = 12;
    }
    timeIsInMilitaryTime = true;
    document.getElementById("toggle-button").innerHTML = "Change to 24-hour clock"
    console.log('b')
  }
}
toggleTime();
timeUpdate();
setInterval(timeUpdate, 1000)


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
