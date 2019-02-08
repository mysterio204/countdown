/**
 * Created by Thiemo on 07.02.19.
 */
const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
    week = day* 7;



var end = new Date('2019-03-09T14:00:00+12:00').getTime();
var start = new Date('2019-01-28T19:00:00+00:00').getTime();



    setInterval(function() {

        var now = new Date().getTime();
        var timeToGo = end - now;
        var timePassed = now - start;
        var duration = end - start;




        var progress= Math.floor((timePassed/duration)*100);




        document.getElementById('progress').style.width= progress+"%";
        document.getElementById('progressLabel').innerText = progress+"%";

            document.getElementById('weeks').innerText = Math.floor(timeToGo / (week)),
            document.getElementById('days').innerText = Math.floor(timeToGo % (week) / (day)),
            document.getElementById('hours').innerText = Math.floor((timeToGo % (day)) / (hour)),
            document.getElementById('minutes').innerText = Math.floor((timeToGo % (hour)) / (minute)),
            document.getElementById('seconds').innerText = Math.floor((timeToGo % (minute)) / second);




        document.getElementById('weeks2').innerText = Math.floor(timePassed / (week)),
            document.getElementById('days2').innerText = Math.floor(timePassed % (week) / (day)),
            document.getElementById('hours2').innerText = Math.floor((timePassed % (day)) / (hour)),
            document.getElementById('minutes2').innerText = Math.floor((timePassed % (hour)) / (minute)),
            document.getElementById('seconds2').innerText = Math.floor((timePassed % (minute)) / second);


        document.getElementById('weeks3').innerText = Math.floor(duration / (week)),
            document.getElementById('days3').innerText = Math.floor(duration % (week) / (day)),
            document.getElementById('hours3').innerText = Math.floor((duration % (day)) / (hour)),
            document.getElementById('minutes3').innerText = Math.floor((duration % (hour)) / (minute)),
            document.getElementById('seconds3').innerText = Math.floor((duration % (minute)) / second);


        //do something later when date is reached
        //if (distance < 0) {
        //  clearInterval(x);
        //  'IT'S MY BIRTHDAY!;
        //}
        console.log("what")

    }, second);




