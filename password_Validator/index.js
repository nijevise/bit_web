var getInput = document.getElementById('input');
var getProgressBar = document.getElementById('progress');

document.getElementById('show').onclick = function(){
    if(this.checked){
        getInput.setAttribute('type', 'text');
    }else{
        getInput.setAttribute('type', 'password');
    }
}

getInput.oninput = function(){
    if(getInput.value.length == 0 | getInput.value.length < 6){
        getProgressBar.style.width = '0%'
        getProgressBar.innerHTML = '0%'
    }else if(getInput.value.length == 6 | getInput.value.length < 10){
        getProgressBar.style.width = '20%'
        getProgressBar.innerHTML = '20%'
    }else if(getInput.value.length == 10 | getInput.value.length < 15){
        getProgressBar.style.width = '50%'
        getProgressBar.innerHTML = '50%'
    }else if(getInput.value.length == 15 | getInput.value.length < 20){
        getProgressBar.style.width = '75%'
        getProgressBar.innerHTML = '75%'
    }else if(getInput.value.length == 20 ){
        getProgressBar.style.width = '100%'
        getProgressBar.innerHTML = "Your password is strong enough"
    }
}