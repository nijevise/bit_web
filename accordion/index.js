var course = document.getElementsByClassName('btn')
for( var i = 0; i < course.length; i++ ){
    course[i].addEventListener('click', function(){
        var content = this.nextElementSibling;
        if(content.style.display == "block"){
            content.style.display = "none";
        }else{
            content.style.display = "block";
        }
    })
}

var image = document.getElementsByClassName('pic');

for(var j = 0; j < image.length; j++){
    image[j].addEventListener('click', function(){
        var details = this.nextElementSibling;
        if(details.style.display == "none"){
            details.style.display = 'block';
        }else{
            details.style.display = "none"
        }
    })
}