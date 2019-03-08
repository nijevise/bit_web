

// function validateInput() {
//     var arrInput = document.getElementsByTagName('input');
//     for (var i = 0; i < arrInput.length; i++) {
//         if (arrInput[i].hasAttribute('required')) {
//             if (arrInput[i].value.length) {
//                 arrInput[i].style.borderColor = "red";
//             }
//         }
//     }
// }
// validateInput();

var btn = document.querySelector('button');
var btnOff = document.getElementById('of')
var int

function btnActivate() {
    int = setInterval(function () {
        document.body.classList.toggle('dark')
    }, 200)
}

function btnDectivate() {
    clearInterval(int)
}

btn.addEventListener('click', btnActivate);
btnOff.addEventListener('click', btnDectivate);


// var inputElement = document.querySelector("input");
// var btn = document.querySelector("button");
// var parentElement = document.querySelector(".message-container");



// btn.onclick = function () {
//     var messageElement = document.createElement('p');
//     messageElement.innerHTML = "" + inputElement.value + "";
//     parentElement.appendChild(messageElement);
// }



/////////////////////////////////////


// var inputElement = document.querySelector("input");
// var btn = document.querySelector("button");
// var parentElement = document.querySelector(".message-container");



// btn.onclick = function () {
//     var messageElement = document.createElement('p');
//     messageElement.textContent = inputElement.value;

//     parentElement.appendChild(messageElement);
// }


// var field = document.querySelector('.container');
// field.style.backgroundImage = 'url("field.png")';
// field.style.backgroundSize = 'contain';
// field.style.backgroundRepeat = 'no-repeat';
// var player = document.createElement('img');
// player.src = 'player.png';
// field.appendChild(player);
// document.createElement('button');

// field.style.width = '100%';
// field.style.height = '500px';
// player.style.width = '10%';
// player.style.position = 'absolute'


// field.addEventListener('click', positionPlayer);

// function positionPlayer(event) {
//     player.style.left = event.clientX + 'px'
//     player.style.top = event.clientY + 'px';
// }

///////////////////////////////////////////////////

// var imgInfo = document.querySelectorAll('img');
// function borderTest() {
//     this.style.border = '3px solid red'
// }

// for (var i = 0; i < imgInfo.length; i++) {
//     imgInfo[i].addEventListener('click', borderTest)

//     if (imgInfo[i].classList.contains('img-first')) {
//         imgInfo[i].removeEventListener('click', borderTest)
//     }
// }
