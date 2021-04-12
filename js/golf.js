const click = document.getElementById("btn-click").onclick = golfScore;

//var names = ["Hole-in-one!", "Eagle!", "Birdie!", "Par!", "Bogey!", "Double Bogey!", "Go Home!"];
function golfScore(par, strokes) {

par = Math.floor(Math.random()*10);
document.getElementById("golf-par").innerHTML = par;
strokes = Math.floor(Math.random()*10);
document.getElementById("golf-strokes").innerHTML = strokes;

return (strokes == 1) ? document.getElementById ("nickname").innerText = "Hole-in-One!":
(strokes <= par -2) ? document.getElementById ("nickname").innerText = "Eagle!":
(strokes <= par -1) ? document.getElementById ("nickname").innerText = "Birdie!":
(strokes === par) ? document.getElementById ("nickname").innerText = "Par!":
(strokes === par + 1) ? document.getElementById ("nickname").innerText = "Bogey!":
(strokes === par + 2) ? document.getElementById ("nickname").innerText = "Double Bogey!":
document.getElementById("nickname").innerHTML ="Go Home!";
}


/*
if (strokes == 1) {
    return names [0];
} else if (strokes <= par -2 ) {
    return names [1];
} else if (strokes <= par -1 ) {
    return names [2];
} else if (strokes === par ) {
    return names [3];
} else if (strokes === par + 1 ) {
    return names [4];
} else if (strokes === par + 2 ) {
    return names [5];
} else {
    return names [6];
}


 // Change values to test
//console.log(golfScore(5, 4));
*/