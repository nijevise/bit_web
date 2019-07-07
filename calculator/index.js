var flag;

function enterNumber(number){
    var inputNum = document.getElementById('answer');
    inputNum.value += number;
    flag = 0;
}

function enterOperator(operator){
    if(flag==0){
        var sign = document.getElementById('answer');
        sign.value += operator;
        }
    }

function clearAll(C){
    document.getElementById('answer') = " ";
    document.getElementById('output') = " ";
}

function equal(){
    var result = document.getElementById('answer').value;
    document.getElementById('output').value = eval(result);
}