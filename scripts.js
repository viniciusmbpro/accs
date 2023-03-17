// menu
var ham = document.getElementById("hamburguer");
ham.addEventListener("click", function () {
    if (ham.parentNode.querySelector("#menu").style.left == "0px") {
        ham.parentNode.querySelector("#menu").style.left = "-290px";

        ham.style.left = "0px";
    } else {
        ham.parentNode.querySelector("#menu").style.left = "0px";

        ham.style.left = ham.parentNode.querySelector("#menu").offsetWidth + "px";
    }
});
ham.style.left = "0px";