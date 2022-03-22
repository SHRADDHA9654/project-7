var mybutton= document.querySelector("button");
var body = document.querySelector("body");



function colorchange(){
    var randomNum= generateRandomNumber()
    body.style.background= generateHexcolor();
}


mybutton.addEventListener("click" , colorchange)

//var colors=["red"," pink"," blue","yellow","orange","neon"]
var hexColors=["0"," 1"," 2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
var randomHexcol="#"


function generateRandomNumber(){
    var randomNumber = Math.floor(Math.random()*hexColors.length);
    
return randomNumber;
}

function generateHexcolor(){
    randomHexcol="#"
    for(var i=0; i<6; i++){
        var randomNum= generateRandomNumber()
        randomHexcol=randomHexcol+ hexColors[randomNum]
    }
    return randomHexcol
}