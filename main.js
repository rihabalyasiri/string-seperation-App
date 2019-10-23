function work() {
    console.log("working");

    // defining variables depend on the Id of the elements in HTML
    var btn = document.getElementById("btn");
    var zeichenkette = document.getElementById("zeichenkette").value;
    var pos = document.getElementById("pos").value;
    var vorText = document.getElementById("vorText");
    var nachText = document.getElementById("nachText");
    var bevor = document.getElementById("vor");
    var danach = document.getElementById("nach");

    // searching the position of the position in text 
    var teilPos = zeichenkette.search(pos);

    // making position for the front part and end part
    var vorPos = teilPos;
    var nachPos =teilPos + pos.length ;
    

    // seperate the text depends on the position that i found
    var outVor =zeichenkette.slice(0,vorPos) ;
    var outNach =zeichenkette.slice(nachPos) ;
    

    // showing the text depend on which option is chosed
    if(bevor.checked) {
        vorText.innerHTML += "  " + outVor;
    }else {
        nachText.innerHTML += "  " +  outNach;
    }
}

