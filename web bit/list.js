// function secList() {
//     var secList = document.body.childNodes[3];
//     secList.className = 'secList';
//     secList.style.backgroundColor = 'red';
// }

// secList();

// function selLi() {
//     var li = document.querySelectorAll('li')
//     for (var i = 0; i < li.length; i++) {
//         li[i].style.color = 'blue';
//     }
// }

// selLi();

// function lastLi() {
//     var thirdList = document.body.childNodes[5].children;
//     for (var i = 0; i < thirdList.length; i++) {
//         thirdList[i].className = 'third-li'
//         thirdList[i].style.backgroundColor = 'green';
//         thirdList[i].style.textTransform = 'uppercase';
//     }
// }

// lastLi();

// function rmClass(x) {
//     document.getElementsByClassName("active")[0].classList.remove("active");
//     var li = document.body.childNodes[3].children[0].children[0];
//     li.classList.add("active");
//     var liText = li.textContent;
//     alert(liText);
//     var liRepl = document.body.childNodes[3].children[0].lastElementChild;
//     liRepl.textContent = x;
// }
// rmClass('REPLACED');


// var parentDiv = document.querySelector("div");
// var select = document.createElement("select");
// select.innerHTML = "<option>Opcija 1</option><option>Opcija 2</option>"
// parentDiv.appendChild(select);

// function createSelect(arr) {
//     var sel = '<select name="dropdown"><option>' + arr[0] + '</option><option>' + arr[1] + '</option> <option>' + arr[2] + '</option></select > '
//     var divOne = document.getElementsByTagName('div')[0];
//     var divTwo = document.getElementsByTagName('div')[1];
//     divOne.innerHTML = sel;
//     divTwo.innerHTML = sel;
// }
// createSelect(['red', 'blue', 'green']);

function validateInput() {
    var arrInput = document.getElementsByTagName('input');
    for (var i = 0; i < arrInput.length; i++) {
        if (arrInput[i].hasAttribute('required')) {
            if (arrInput[i].value.length) {
                arrInput[i].style.borderColor = 'red';
            }
        }
    }
}
validateInput();


