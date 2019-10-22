function work() {
    console.log("working");
    var btn = document.getElementById("btn");
    var zeichenkette = document.getElementById("zeichenkette").value;
    var pos = document.getElementById("pos").value;
    var bevor = document.getElementById("vor");
    var danach = document.getElementById("nach");
    var outVor =zeichenkette.slice(0,pos) ;
    var outNach =zeichenkette.slice(pos) ;
    var vorText = document.getElementById("vorText");
    var nachText = document.getElementById("nachText");
    if(bevor.checked) {
        vorText.innerHTML += "  " + outVor;
    }else {
        nachText.innerHTML += "  " +  outNach;
    }
}

