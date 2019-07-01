function getTime(){

    var time = new Date();
    document.getElementById('clock').innerHTML = time.toLocaleTimeString();
    }
    function remainingDays(){
        var days = new Date();
        var firstDay = days.getDate();
        var lastDay = 21;
        var restOfDays = lastDay - firstDay;
        document.getElementById('days').innerHTML = restOfDays + ' days left';
    
        if(restOfDays <= 0){
            document.getElementById('container').style.display = "none";
        }
    }
    
    setInterval(getTime, 1000);
    setTimeout(getTime, 0);
    remainingDays();