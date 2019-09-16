//Create 4 buttons (kybercrystals) 
    //Each crystal genrates a random number (1-12)
//Create a varible that generates a random score between 19-120 at the start of the game. 
    //for this variable, create a function that has a min value of 19 and max value of 120. 



$(document).ready(function() {
 

// var randomNumber = randomNumberGenarator(19,120)  //Generates random number between 19-120

var randomNumberGenarator = function(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;
};
console.log(randomNumberGenarator(19,120));


function randomCrystalValue() {

}

function add(num1, num2) {
    var result = num1 + num2
    return result;
}

$("#submitBtn").on("click", function(){
    var numOne = $("#number1-input").val();
    var numTwo = $("#number2-input").val();
    var result = add(numOne, numTwo);
    $("#resultBox").text(result);
})


var userScore = 0; //User score starting at zero
var wins = 0; //Wins start at 0
var losses = 0; //Losses start at 0 

});