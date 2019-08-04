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

const btn = document.getElementById('container__btn');

function calc() {
  const value1 = parseInt(document.getElementById('value1').value);
  const value2 = parseInt(document.getElementById('value2').value);
  const selector = document.getElementById('selector').value;
  let res;

  if(selector === 'add'){
    res = value1 + value2;
  }else if (selector === 'sub'){
    res = value1 - value2;
  }else if (selector === 'maul'){
    res = value1 * value2;
  }else if (selector === 'div'){
    res = value1 / value2;
  }

  alert(res);

}



setInterval(printTime, 0);
btn.addEventListener('click', ()=>{
  calc();
});
