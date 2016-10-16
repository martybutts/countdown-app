function startTimer(id, deadline){
  var timerInterval = setInterval(function(){
    var clock = document.getElementById(id);
    var timer = updateTimer(deadline);

    clock.innerHTML = '<span>' + timer.days + '</span>'
                    + '<span>' + timer.hours + '</span>'
                    + '<span>' + timer.minutes + '</span>'
                    + '<span>' + timer.seconds + '</span>';
  }, 1000);
}


window.onload = function(){
  var deadline = new Date("January 1, 2045 00:00:01");
  startTimer("clock", deadline);
};
