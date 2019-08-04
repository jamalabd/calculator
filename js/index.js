/* jshint esversion:8 */

function printTime() {
  const currentTime = new Date();
  let hour = currentTime.getHours();
  let minute = currentTime.getMinutes();
  let second = currentTime.getSeconds();
  const timeOfDay = hour < 12 ? 'AM':'PM';


  minute = minute < 10 ? '0' : '' + minute;
  second = second < 10 ? '0' : '' + second;


  hour = hour > 12 ? hour - 12: hour;
  hour = hour === 0 ? 12: hour;
  const clockString = `${hour}:${minute}:${second} ${timeOfDay}`;
  document.getElementById('container__clock').innerHTML = clockString;
}





setInterval(printTime, 0);
