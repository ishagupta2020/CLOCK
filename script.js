function displayClock(){
    var myDate=new Date();
    var hours=myDate.getHours();
    var minutes=myDate.getMinutes();
    var seconds=myDate.getSeconds();    
    
    if(hours>=12 ){
        AM_or_PM.innerHTML="PM";
    }
    else{
            AM_or_PM.innerHTML="AM";
        }
        document.getElementById('hours').innerHTML=hours;
        document.getElementById('minutes').innerHTML=minutes;  
        document.getElementById('seconds').innerHTML=seconds;
        }
        setInterval(displayClock,1000);
    