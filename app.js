//"How can I get my name to show up on the page?"
  // document.getElementById('time-display').innerHTML = "Tim"

//"How can I get the current hour to show up on the page?"
  // document.getElementById('time-display').innerHTML = date.getHours();

//"How can I get the current second to show up on the page?"
  // document.getElementById('time-display').innerHTML = date.getSeconds();

//"How could I get the current second to show up and tick each second?"

//What is the timeformat of .getHours, .getMinutes., getSeconds?
    //Does not show leading zero for single digit numbers

//How do you add '0' for single digit returns?
  //https://hardiquedasore.medium.com/simplest-way-to-add-a-leading-zero-to-a-number-in-javascript-b8724749486f

//"How do I show get seconds to increment in the string?" 
    // TRY TO UPDATE "SECONDS" --> DOESN'T WORK
    // function secondIncrement() {
    //   seconds = date.getSeconds();
    //   console.log('something')
    // }

    // setInterval(secondIncrement, 1000);

    //TRY TO UPDATE strTIME 
    function timeUpdate() {
      const date = new Date();
      var ampm;
      var hours = date.getHours();
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
      ampm = hours >= 12 ? "PM" : "AM" 
      var strTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
      document.getElementById('time-display').innerHTML = strTime;
    }

    setInterval(timeUpdate, 1000)
    
//"How can I get my name to show up underneath the time?"
  //document.getElementById('date-display').innerHTML = "Tim"
//"How can I get a day to show up underneath the time?"
    //"How do I change day number to a string?"
var dayStr;

var date = new Date();
var year = date.getFullYear() 
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var day = date.getDate();
day = days[day]; //convert interger day to human readable day

//"How can I get a month to show up underneath the time?"
    //"How do I change day number to a string?"
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var month = date.getMonth();
month = months[month] //convert interger month to human readable month

//"How can I get a date to show up underneath the time?"
    //"How do I added suffixes to dates?"
var date = date.getDate();
//function to add suffixes for dates
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

//"How can I get a year to show up underneath the time?"
// var year = date.getFullYear() // date.getFullYear() is not a function

//"How do I string together day, month, date, year in one line?"
dayStr = day + ", " + month + " " + date + suffix + " " + year
document.getElementById('date-display').innerHTML = dayStr;



// Function from SO 
// function formatAMPM(date) {
//   var hours = date.getHours();
//   var minutes = date.getMinutes();
//   var seconds = date.getSeconds();
//   var ampm = hours >= 12 ? 'PM' : 'AM';
//   hours = hours % 12;
//   hours = hours ? hours : 12; // the hour '0' should be '12'
//   minutes = minutes < 10 ? '0'+minutes : minutes;
//   var strTime = hours + ':' + minutes + ':' + seconds + " " + ampm;
//   document.getElementById("time-display").innerHTML = strTime
// }