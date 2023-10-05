//Get current time and format
function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ':' + seconds + " " + ampm;
  document.getElementById("time-display").innerHTML = strTime
}

formatAMPM(new Date)

// //Increment seconds every one second
// let seconds
// function getSecs(date) {
//   seconds = date.getSeconds();
// }
// getSecs(new Date);
// function incrementSeconds() {
//   seconds++
  
// }
// setInterval(incrementSeconds, 1000);

// getSecond(new Date)


// setInterval(() => {
//   clearInterval(incrementSecond)
// }, 3000);˜
