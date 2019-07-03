var slide = ["Berlin.jpeg", "Rome.jpeg", "Athens.jpeg"];
var i = 0;

function changeImage(){
    document.getElementById('slideShow').setAttribute('src', slide[i]);
    if(i < slide.length-1){
        i++
    }else{
        i = 0;
    }
    //setTimeout(changeImage, 2000);
}

changeImage();


