window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-10px";
    }
}