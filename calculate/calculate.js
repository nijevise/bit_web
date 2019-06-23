function takeName(){
    name = document.getElementById('nameInput').value;
    return name
   }
  
  function takeAge(){
    age = document.getElementById('ageInput').value;
    return age * 365
  }
  
  document.getElementById('btn').onclick = function(){
    var x = takeName();
    var y = takeAge();
    if(x && y){
      document.getElementById('container').innerHTML = x + ' your age in days is ' + y+ " days."
      document.getElementById('container').style.display = "block";
    }else{
      alert("please, insert your name and age");
      document.getElementById('container').style.display = "none";
    }
  }