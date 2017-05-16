$(document).ready(function () {
    var menu = $(".column-5");
    var menu_button = $(".hamburger_container");
    var count = 0;
    menu_button.click(slideDown);

    function slideDown() {

        if (count % 2 < 1) {
            console.log("test");
            $(".hamburger").attr("src", "../img/kruis.png");
            menu.slideDown("slow", function () {
                count++;
            });

        } else {
            $(".hamburger").attr("src", "../img/hamburger.png");
            menu.slideUp("slow", function () {
                count++;
            });
        }
    }

});
