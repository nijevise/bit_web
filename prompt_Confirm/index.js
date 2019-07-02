document.getElementById('link').onclick = function(){
    var confirmation = confirm("Do you wanna to go to Start IT site?")
    if(confirmation){
        var ok = prompt("Please, enter your age")
        if(ok == ""){
            document.getElementById('link').href = "#";
            document.getElementById('text').innerHTML= "Please, enter your age!"
        }else if(!ok){
            document.getElementById('link').href = "#";
            document.getElementById('text').innerHTML= " "
        }else if(isNaN(ok)){
            document.getElementById('link').href = "#";
            document.getElementById('text').innerHTML= "Please, enter the number"
        }else if(ok < 18){
            document.getElementById('link').href = "#";
            document.getElementById('text').innerHTML= "Sorry, you are not allowed to go!"
        }else{
            document.getElementById('link').href = "https://startit.rs/";
        }
    }else{
        document.getElementById('link').href = "#";
    }
}