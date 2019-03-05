/*function findClass() {
    document.querySelector(".second-list").className = "second-list blue";
}

findClass();
function triggerElement() {
    var elementLi = document.querySelectorAll("li");
    for (var i = 0; i < elementLi.length; i++) {
        elementLi[i].className = "pink";
    }
}
triggerElement();

function colorUppercase() {
    var lastLiElement = document.querySelectorAll(".third-list li");
    for (var i = 0; i < lastLiElement.length; i++) {
        lastLiElement[i].className = "orange uppercase";
        //lastLiElement[i].className = "uppercase";
    }
}
colorUppercase();
*/
// Traversing
function firstElementsFive() {
    var elementLiList = document.querySelector(".fifth-list");

    elementLiList.firstElementChild.className = "active";
}

firstElementsFive();

function removeFirstFive() {
    document.getElementsByClassName("active")[0].classList.remove("active");
}
removeFirstFive();


// Access /Uppdate Text Node
function findText() {
    //alert(document.querySelectorAll(".first-list li")[0]);
    var element = document.querySelectorAll(".first-list li")[0].textContent;
    alert(element);
}
findText();