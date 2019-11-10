// Javascript file for smart watch application
$(document).ready(function(){
    $(".main").show();
    $(".mainMusic,.mainMsg,.mainTimer,.maincon-1,.maincon-2,.maincon-3,.maincon-4").hide();
    var today = new Date();
    var day = today.getDay();
    var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    $("#day").text(daylist[day]);
    var time1 = (today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));
    $("#time").text(time1);
    message();
    playMusic();
    timerStopwatch();
});
function message(){
    // Message

    const messagelist = [
      {name:"VZ-VFCARE", con:"hello! Now Upgrade to a 4G SIM and get 4GB data free for 10 days."},
      {name:"VM-Career", con:"This monday and tuesday, the answers to all your questions are here!"},
      {name:"VM-SWIGGY", con:"keep calm and party on this friday, with up to 50% off at big Hunger Fest!"},
      {name:"VZ-SBIUPI", con:"Dear SBI UPI User, your A/cX4890 - debited by Rs 40.0 on 05Sep10 Ref No 4256178"}
    ];
    
    $("#message").click(function(){
      $("#msg-1").text(messagelist[0].name);
      $("#msg-2").text(messagelist[1].name);
      $("#msg-3").text(messagelist[2].name);
      $("#msg-4").text(messagelist[3].name);
      $(".main,.mainMusic,.mainTimer,.maincon-1,.maincon-2,.maincon-3,.maincon-4").hide();
      $(".mainMsg").show();    
    });
    $("#msg-1").click(function(){
      $("#con-1").text(messagelist[0].con);
      $(".main,.mainMsg,.mainMusic,.mainTimer,.maincon-2,.maincon-3,.maincon-4").hide();
        $ (".maincon-1").show();
    });
    $("#msg-2").click(function(){
      $("#con-2").text(messagelist[1].con);
      $(".main,.mainMsg,.mainMusic,.mainTimer,.maincon-1,.maincon-3,.maincon-4").hide();
        $ (".maincon-2").show();
        
    });
    $("#msg-3").click(function(){
      $("#con-3").text(messagelist[2].con);
      $(".main,.mainMsg,.mainMusic,.mainTimer,.maincon-1,.maincon-2,.maincon-4").hide(); 
        $(".maincon-3").show(); 
    });
    $("#msg-4").click(function(){
      $("#con-4").text(messagelist[3].con);
        $(".main,.mainMsg,.mainMusic,.mainTimer,.maincon-1,.maincon-2,.maincon-3").hide(); 
        $ (".maincon-4").show();
    });
    $(".fa").click(function(){
      $(".mainMsg").show();
      $(".maincon-4,.maincon-3,.maincon-2,.maincon-1").hide();
    });
}

function playMusic(){
    $("#music").click(function(){
      $(".main,.mainMsg,.mainTimer,.maincon-1,.maincon-2,.maincon-3,.maincon-4").hide();
      $(".mainMusic").show();
    });
}

function timerStopwatch(){
    // reset button 
    $('#reset').click(function(){
      var sec=0, min=0, hour=0;
      document.getElementById('timer').innerHTML = hour + ":" + min + ":" + sec;
    });

    $("#stopwatch").click(function(){
      $(".main,.mainMsg,.mainMusic,.maincon-1,.maincon-2,.maincon-3,.maincon-4,.set,.chat").hide();
      $(".mainTimer").show();
      // Timer
        var timer = document.getElementById('timer');
        var startbtn = document.getElementById('start');
        var stopbtn = document.getElementById('stop');
        var watch = new Stopwatch(timer);
     
        // start and stop timer
        function start() {
            watch.start();
          }
          function stop() {
            watch.stop();
          }
          startbtn.addEventListener('click', function() {
           start();
          });
          stopbtn.addEventListener('click', function() {
            stop();
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
    });
  }


