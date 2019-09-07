// Javascript file for smart watch application
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
document.getElementById("day").innerHTML = daylist[day];
var hours = today.getHours();
if(hours>12){
    hours = hours-12;
}
var minute = today.getMinutes();
var time1 = (hours+":"+minute);
document.getElementById("time").innerHTML = time1;
document.getElementById("top").innerHTML = time1;
document.getElementById("up").innerHTML = time1;
document.getElementById("btm").innerHTML = time1;
// Message

const messagelist = ["VZ-VFCARE","VM-Career","VM-SWIGGY","VZ-SBIUPI"];

document.getElementById("msg-1").innerHTML=messagelist[0];
document.getElementById("msg-2").innerHTML=messagelist[1];
document.getElementById("msg-3").innerHTML=messagelist[2];
document.getElementById("msg-4").innerHTML=messagelist[3];

// Timer
var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('start');
var watch = new Stopwatch(timer);

function start() {
    toggleBtn.textContent = 'Stop';
    watch.start();
  }
  function stop() {
    toggleBtn.textContent = 'Start';
    watch.stop();
  }
  toggleBtn.addEventListener('click', function() {
    watch.isOn ? stop() : start();
  });

function Stopwatch(elem) {
    var time = 0;
    var offset;
    var interval;
  
    function update() {
      if (this.isOn) {
        time += delta();
      }
      elem.textContent = timeFormatter(time);
    }
    function delta() {
      var now = Date.now();
      var timePassed = now - offset;
  
      offset = now;
      return timePassed;
    }
    function timeFormatter(time) {
      time = new Date(time);
  
      var hours = time.getHours().toString();
      var minutes= time.getMinutes().toString();
      var seconds = time.getSeconds().toString();
  
      if (hours.length < 2) {
        hours = '0' + hours; 
      }
      if (minutes.length < 2) {
        minutes = '0' + minutes;
      }
      while (seconds.length < 2) {
        seconds = '0' + seconds;
      }
      return hours + ' : ' + minutes + ' . ' + seconds;
    }
    this.start = function() {
      interval = setInterval(update.bind(this), 10);
      offset = Date.now();
      this.isOn = true;
    };
    this.stop = function() {
      clearInterval(interval);
      interval = null;
      this.isOn = false;
    };
    this.isOn = false;
  }
// show and hide
$(document).ready(function(){
    $(".main").show();
    $(".mainMsg").hide();
    $(".mainMusic").hide();
    $(".mainTimer").hide();

    $("#message").click(function(){
        $(".main").hide();
        $(".mainMsg").show();
        $(".mainMusic").hide();
        $(".mainTimer").hide();  
    });
    $("#msg-1").click(function(){
        $(".main").hide();
        $(".mainMsg").hide();
        $(".mainMusic").hide();
        $(".mainTimer").hide(); 
        $ ("#msg-1").show();
    });

    $("#music").click(function(){
        $(".main").hide();
        $(".mainMsg").hide();
        $(".mainMusic").show();
        $(".mainTimer").hide(); 
    });

    $("#stopwatch").click(function(){
        $(".main").hide();
        $(".mainMsg").hide();
        $(".mainMusic").hide();
        $(".mainTimer").show(); 
    });
});


