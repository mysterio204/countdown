/**
 * Created by Thiemo on 07.02.19.
 */
const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
    week = day* 7;



var now = new Date().getTime();
var end = new Date('Mar 09, 2019 00:14:00').getTime();
var start = new Date('Jan 28, 2019 00:19:00').getTime();

var timeToGo = end - now;
var timePassed = now - start;
var duration = end - start;

var progress= (timePassed/duration)*100;

console.log(duration/(day) );
console.log(timePassed/(day));
console.log(progress);

document.getElementById('progress').style.width= progress+"%";


    var x = setInterval(function() {



            document.getElementById('weeks').innerText = Math.floor(timeToGo / (week)),
            document.getElementById('days').innerText = Math.floor(timeToGo % (week) / (day)),
            document.getElementById('hours').innerText = Math.floor((timeToGo % (day)) / (hour)),
            document.getElementById('minutes').innerText = Math.floor((timeToGo % (hour)) / (minute)),
            document.getElementById('seconds').innerText = Math.floor((timeToGo % (minute)) / second);

        //do something later when date is reached
        //if (distance < 0) {
        //  clearInterval(x);
        //  'IT'S MY BIRTHDAY!;
        //}

    }, second)




    var y = setInterval(function() {




            document.getElementById('weeks2').innerText = Math.floor(timePassed / (week)),
            document.getElementById('days2').innerText = Math.floor(timePassed % (week) / (day)),
            document.getElementById('hours2').innerText = Math.floor((timePassed % (day)) / (hour)),
            document.getElementById('minutes2').innerText = Math.floor((timePassed % (hour)) / (minute)),
            document.getElementById('seconds2').innerText = Math.floor((timePassed % (minute)) / second);

        //do something later when date is reached
        //if (distance < 0) {
        //  clearInterval(x);
        //  'IT'S MY BIRTHDAY!;
        //}


    }, second)