document.getElementById("button").onclick = function() {
    document.getElementById("text").innerHTML = "Hello From Noel";

};

document.getElementById("secondButton").onclick = function(){
    document.getElementById("secondParagraph").innerHTML+=" awesome";
};

document.getElementById("createParagraph").onclick = function() {
    document.getElementById("emptyParagraph").innerHTML = "<h1>Lorem ipsum</h1>";

};

document.getElementById("stylebutton").onclick = function(){
    document.getElementById("sometext").style.display = "none";
}



