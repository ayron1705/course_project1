let popUp = document.querySelector(".popup");
let btnSS = document.querySelector(".btn_start_screen");
let btnClose = document.querySelector(".btn_popup_close");


btnSS.addEventListener("click", function () {
    popUp.classList.add("popup_show")
});

btnClose.addEventListener("click", function () {
    popUp.classList.remove("popup_show")
});