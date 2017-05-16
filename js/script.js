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
        

                       