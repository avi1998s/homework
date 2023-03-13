let seconds = 0,timer,minutes=0,milSeconds=0,lap1=0,cunterLap=0,zero="0";

function playMilSeconds() {
    clearInterval(timer);
    document.querySelector("#mil_seconds").innerHTML=milSeconds;
    document.querySelector("#seconds").innerHTML=seconds;
    document.querySelector("#minutes").innerHTML=minutes;

    if (seconds<10){
        document.querySelector("#seconds").innerHTML=zero+seconds;
    }
    if (minutes<10){
        document.querySelector("#minutes").innerHTML=zero+minutes;
    }
    timer = setInterval (()=>{
        milSeconds++;
        if (milSeconds<10){
            document.querySelector("#mil_seconds").innerHTML=zero+milSeconds;
        }
        else{document.querySelector("#mil_seconds").innerHTML=milSeconds}
        playSeconds();
        playMinutes();
        
    }, 100);
}
function playSeconds() {
    if (milSeconds>=10){
        seconds++
        milSeconds=0;
        if (seconds<10){
            document.querySelector("#seconds").innerHTML=zero+seconds;
        }
        else{document.querySelector("#seconds").innerHTML=seconds}
    }
   
}
function playMinutes() {
    if (seconds>=60){
        minutes++
        seconds=0;        
        if (minutes<10){
            document.querySelector("#minutes").innerHTML=zero+minutes;
        }
        else{document.querySelector("#minutes").innerHTML=minutes}
    }
}
    
function stop() {
    clearInterval(timer);
}
function reset() {
    milSeconds="00";
    seconds="00";
    minutes="00";
    document.querySelector("#minutes").innerHTML=minutes;
    document.querySelector("#seconds").innerHTML=seconds;
    document.querySelector("#mil_seconds").innerHTML=milSeconds;
    document.querySelector("#p1").innerHTML="";
}
function lap(){
    cunterLap++
    if(milSeconds<10){
        lap1=minutes+":"+seconds+":"+zero+milSeconds;
        if(seconds<10){
            lap1=minutes+":"+zero+seconds+":"+zero+milSeconds;
            if(minutes<10){
                lap1=zero+minutes+":"+zero+seconds+":"+zero+milSeconds;
            }
        }
        else if (minutes<10){
            lap1=zero+minutes+":"+seconds+":"+zero+milSeconds;
        }
    } 
    else{lap1=minutes+":"+seconds+":"+milSeconds}
    document.querySelector("#p1").innerHTML+="lap number "+cunterLap+": "+"- "+ lap1+"<br>";
}
function start() {
    document.querySelector("#start_but").addEventListener("click", playMilSeconds);
    document.querySelector("#stop_but").addEventListener("click", stop);
    document.querySelector("#reset_but").addEventListener("click", reset);
    document.querySelector("#lap_but").addEventListener("click", lap);
}

start();