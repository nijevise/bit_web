// console.log("1");
// setTimeout(function(){console.log("2")},5000);
// console.log("3");

var cats = new XMLHttpRequest();
cats.open('GET', 'https://api.thecatapi.com/v1/images/search');
cats.setRequestHeader("")
cats.onload = function () {
    if (cats.status >= 200 && cats.status < 400) {
        var data = JSON.parse(cats.responseText);
        console.log(data[0]);

    }
    var macaDiv = document.querySelector(".macaImg");
    console.log(macaDiv);
    macaDiv.innerHTML = '<img src="' + data[0].url + '">';

}
cats.send();