// /*function findClass() {
//     document.querySelector(".second-list").className = "second-list blue";
// }

// findClass();
// function triggerElement() {
//     var elementLi = document.querySelectorAll("li");
//     for (var i = 0; i < elementLi.length; i++) {
//         elementLi[i].className = "pink";
//     }
// }
// triggerElement();

// function colorUppercase() {
//     var lastLiElement = document.querySelectorAll(".third-list li");
//     for (var i = 0; i < lastLiElement.length; i++) {
//         lastLiElement[i].className = "orange uppercase";
//         //lastLiElement[i].className = "uppercase";
//     }
// }
// colorUppercase();
// */
// // // Traversing
// // function firstElementsFive() {
// //     var elementLiList = document.querySelector(".fifth-list");

// //     elementLiList.firstElementChild.className = "active";
// // }

// // firstElementsFive();

// // function removeFirstFive() {
// //     document.getElementsByClassName("active")[0].classList.remove("active");
// // }
// // removeFirstFive();


// // Access /Uppdate Text Node
// // function findText() {
// //     //alert(document.querySelectorAll(".first-list li")[0]);
// //     var element = document.querySelectorAll(".first-list li")[0].textContent;
// //     alert(element);
// // }
// // findText();

// /// InnerHTML

// var parent = document.querySelector('.fifth');
// var arrOption = ["option1", "option2", "option3"]
// // function selectLi() {
// //     var parentDiv = document.querySelector(".forth");
// //     var paragrafElement = document.createElement("p");
// //     a.innerHTML = "ovo je najveca glupost ikad";
// //     b.appendChild(a);
// // }
// // selectLi();

// function withDom(array, parent) {
//     var listItem = document.createElement('select');

//     listItem.innerHTML = '<option>' + array[0] + '</option>' + '<option>' + array[1] + '</option>';

//     parent.appendChild(listItem);
// }

// withDom(arrOption, parent);
// //ATTRIBUTES

// function validForm() {
//     var elements = document.getElementsByTagName("input");

//     for (var i = 0; i < elements.length; i++) {
//         if (!elements[i].hasAttribute("required") && !elements[i].hasAttribute("value.length")) {
//             var elem = elements[i].setAttribute("input").style.borderColor = "red";
//         }
//     } return elem;
// }
// console.log(validForm());

function clickTheButton() {
    document.getElementsByClassName('.btn').click();
}
clickTheButton();