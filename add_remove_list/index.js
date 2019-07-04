var input = document.getElementById('text');
var ul = document.getElementById('list');

document.getElementById('add').onclick = function(){
    if(input.value.length == 0){
        alert("please, insert item first")
    }else{
        var li = document.createElement('li');
        li.setAttribute("id", input.value);
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        
    }
}

document.getElementById('remove').onclick = function(){
    var item = document.getElementById(input.value);
    ul.removeChild(item)

}
