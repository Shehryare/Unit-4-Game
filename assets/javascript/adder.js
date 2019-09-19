// 3 ways to write a stting

var wordCheck = function (palindromeParam) {
    //palindrome is a word that is spelled the same way forwards and backwards 
    for (var i = 0; i < wordCheck.length; i++) {
        if (wordCheck[i] !== [wordCheck.length - (i + 1)]) {    //if wordcheck
            return false;
        }
    }
    return true;
};

console.log(wordCheck("noon"));


function checkPalindrome(myString) {
    var isPalindrome = false;
    var reverseString = myString.split("").reverse().join("");  //. split breaks each individual letter into an array 
    //.reverse revereses the letters in the array and .join brings all the letters together into a word. 
    if (myString === reverseString) {
        isPalindrome = true;
    }
    return isPalindrome;
}

function isPalindrome(str) {
    //  reverse the string
    var strReverse = str.split("").reverse().join("");
    // chek if str is the same as strReverse
    return str.toLowerCase() === strReverse.toLowerCase;
}



 // Thing to remember: parseInt
 var sum = 0;
 sum = sum + 1; //sum 1
 sum = sum + 2; //sum 3


 sum += 1; // sum 4
 sum += 2; // sum 6
});

 $(".gemImage").on("click", function () {
        userScore += parseInt($(this).attr("value"));



//write a fcuntion that tkes in the array of cards
//sort cards by each suit 
    // create a variable for each suit 
// create for loop 

var deck = suits; cards;
var suits = ["clubs", "spades", "hearts", "diamonds"];
var cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

var cardCounter = function(ar)