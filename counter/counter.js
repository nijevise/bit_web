var end = new Date('septembre 20, 2019, 23:59:59').getTime();
function timer(){
    var start = new Date().getTime();
    var difference = end - start;

    var hours = Math.floor((difference%(24*60*60*1000))/(60*60*1000));
    console.log(hours);
    var minutes = Math.floor((difference%(60*60*1000))/(60*1000));
    var seconds = Math.floor((difference%(60*1000))/1000);
    document.getElementById('counter').innerHTML = hours + ":"+ minutes+ ":" + seconds;

    if(difference < 0){
        document.getElementById('counter').innerHTML = '';  //hide counter
        document.getElementById('badge').style.display = "block";       //show badge
        document.getElementById('button').style.pointerEvents = "none"; //disables the link
    }
}

setInterval(timer, 1000);
setTimeout(timer, 0);