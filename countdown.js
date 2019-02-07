/**
 * Created by Thiemo on 07.02.19.
 */
const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
    week = day* 7;

var countDown = new Date('Mar 09, 2019 00:14:00').getTime(),
    x = setInterval(function() {

        var now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById('weeks').innerText = Math.floor(distance / (week)),
        document.getElementById('days').innerText = Math.floor(distance % (week) / (day)),
            document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        //if (distance < 0) {
        //  clearInterval(x);
        //  'IT'S MY BIRTHDAY!;
        //}

    }, second)


var countUp = new Date('Jan 28, 2019 00:19:00').getTime(),
    x = setInterval(function() {

        var now = new Date().getTime(),
            distance2 = now - countUp;

        document.getElementById('weeks2').innerText = Math.floor(distance2 / (week)),
        document.getElementById('days2').innerText = Math.floor(distance2 % (week) / (day)),
            document.getElementById('hours2').innerText = Math.floor((distance2 % (day)) / (hour)),
            document.getElementById('minutes2').innerText = Math.floor((distance2 % (hour)) / (minute)),
            document.getElementById('seconds2').innerText = Math.floor((distance2 % (minute)) / second);

        //do something later when date is reached
        //if (distance < 0) {
        //  clearInterval(x);
        //  'IT'S MY BIRTHDAY!;
        //}

    }, second)