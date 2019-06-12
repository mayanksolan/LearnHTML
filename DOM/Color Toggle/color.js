console.log("Connected");
var but = document.querySelector("button");
var bod = document.querySelector("body");
but.addEventListener("click", function() {
    console.log("Button Clicked!");
    bod.classList.toggle("bods");
});