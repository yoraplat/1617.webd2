/*
document.addEventListener("onload", autoHeight);

function autoHeight(){
    var footer = document.querySelector("footer");
    var body = document.querySelector("body")
    var h = footer.height() - body.height();
    
    if (h > 0){
        footer.style.marginTop = h;
    }
}

//autoHeight();
        
*/

var button = document.querySelector(".hamburger");
var nav = document.querySelectorAll(".column-5");
var count = 0;

button.addEventListener("click", openAndClose);

function openAndClose() {

    if (count % 2 < 1) {
        button.src = "img/kruis.png";

        for (i = 0; i < nav.length; ++i) {
            nav[i].style.display = "block";
        }
        count++;

    } else {
        button.src = "img/hamburger.png";

        for (i = 0; i < nav.length; ++i) {
            nav[i].style.display = "none";
        }
        count++;

    }
}
