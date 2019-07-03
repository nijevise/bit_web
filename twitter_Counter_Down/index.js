var area = document.getElementById('textarea');
var counter = document.getElementById('counter');
var max = area.maxLength;

area.oninput = function(){

    counter.innerHTML = max - area.value.length;

    if(counter.innerHTML == 0){
        counter.style.display = "none";
    }else{
        counter.style.display = "block";
    }
}