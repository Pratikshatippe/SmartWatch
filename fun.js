// Javascript file for smart watch application
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
document.getElementById("day").innerHTML = daylist[day];
var time1 = (
today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
)
document.getElementById("time").innerHTML = time1;

// show and hide
$(document).ready(function(){
    $('#message').click(function() {
      $("Div").hide();
    })