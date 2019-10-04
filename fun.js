// Javascript file for smart watch application
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
document.getElementById("day").innerHTML = daylist[day];
var time1 = (today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));
document.getElementById("time").innerHTML = time1;
// Message

const messagelist = [
    {name:"VZ-VFCARE", con:"hello! Now Upgrade to a 4G SIM and get 4GB data free for 10 days."},
    {name:"VM-Career", con:"This monday and tuesday, the answers to all your questions are here!"},
    {name:"VM-SWIGGY", con:"keep calm and party on this friday, with up to 50% off at big Hunger Fest!"},
    {name:"VZ-SBIUPI", con:"Dear SBI UPI User, your A/cX4890 - debited by Rs 40.0 on 05Sep10 Ref No 4256178"}
];

// This for display message list in message 
document.getElementById("msg-1").innerHTML=messagelist[0].name;
document.getElementById("con-1").innerHTML=messagelist[0].con;

document.getElementById("msg-2").innerHTML=messagelist[1].name;
document.getElementById("con-2").innerHTML=messagelist[1].con;

document.getElementById("msg-3").innerHTML=messagelist[2].name;
document.getElementById("con-3").innerHTML=messagelist[2].con;

document.getElementById("msg-4").innerHTML=messagelist[3].name;
document.getElementById("con-4").innerHTML=messagelist[3].con;


// Timer
var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('start');
var watch = new Stopwatch(timer);
// reset button 
 var sec=0, min=0, hour=0;
 function reset(){
  sec=0;
  min=0;
  hour=0;
 document.getElementById('timer').innerHTML = hour + ":" + min + ":" + sec;
}
// start and stop timer
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
      var now = performance.now();
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
      hours= hours-5;
      minutes = minutes-30;
      return hours + ':' + minutes + ':' + seconds;
    }
   
    this.start = function() {
      interval = setInterval(update.bind(this), 10);
      offset = performance.now();
      this.isOn = true;
    };
    this.stop = function() {
      clearInterval(interval);
      interval = null;
      this.isOn = false;
    };
  }

// show and hide
$(document).ready(function(){
    $(".main").show();
    $(".mainMusic,.mainMsg,.mainTimer,.maincon-1,.maincon-2,.maincon-3,.maincon-4").hide();

    $("#message").click(function(){
      $(".main,.mainMusic,.mainTimer,.maincon-1,.maincon-2,.maincon-3,.maincon-4").hide();
      $(".mainMsg").show();    
    });
    $("#msg-1").click(function(){
      $(".main,.mainMsg,.mainMusic,.mainTimer,.maincon-2,.maincon-3,.maincon-4").hide();
        $ (".maincon-1").show();
    });
    $("#msg-2").click(function(){
      $(".main,.mainMsg,.mainMusic,.mainTimer,.maincon-1,.maincon-3,.maincon-4").hide();
        $ (".maincon-2").show();
        
    });
    $("#msg-3").click(function(){
      $(".main,.mainMsg,.mainMusic,.mainTimer,.maincon-1,.maincon-2,.maincon-4").hide(); 
        $(".maincon-3").show(); 
    });
    $("#msg-4").click(function(){
        $(".main,.mainMsg,.mainMusic,.mainTimer,.maincon-1,.maincon-2,.maincon-3").hide(); 
        $ (".maincon-4").show();
    });
    $(".fa").click(function(){
      $(".mainMsg").show();
      $(".maincon-4,.maincon-3,.maincon-2,.maincon-1").hide();
    });

    $("#music").click(function(){
      $(".main,.mainMsg,.mainTimer,.maincon-1,.maincon-2,.maincon-3,.maincon-4").hide();
      $(".mainMusic").show();
    });

    $("#stopwatch").click(function(){
      $(".main,.mainMsg,.mainMusic,.maincon-1,.maincon-2,.maincon-3,.maincon-4").hide();
      $(".mainTimer").show();
    });
});


