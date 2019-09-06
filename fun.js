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

// Message

const messagelist = ["VZ-VFCARE","VM-Career","VM-SWIGGY","VK-SBIUPI"];

document.getElementById("msg-1").innerHTML=messagelist[0];
document.getElementById("msg-2").innerHTML=messagelist[1];
document.getElementById("msg-3").innerHTML=messagelist[2];
document.getElementById("msg-4").innerHTML=messagelist[3];
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


