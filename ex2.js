
prompt("2")
var color= document.querySelector("#color");
color.addEventListener("input", updateFirst);
       
function updateFirst(event) {
    var p = document.querySelector("p");
    if (p) {
        p.style.color = event.target.value;
    }
}
var size=document.querySelector("#size");
size.addEventListener("input",changeSize);
function changeSize(event){
    var p = document.querySelector("p");
    if (p) {
        p.style.fontSize = event.target.value +"px";
    }
}
var font= document.querySelector("#font");
font.addEventListener("change", changeFont);
       
function changeFont(event) {
    var p = document.querySelector("p");

    if (p) {
        p.style.fontFamily = event.target.value;
    }
}