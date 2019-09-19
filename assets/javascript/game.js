//Create 4 buttons (kybercrystals) 
//Each crystal genrates a random number (1-12)

//Create a varible that generates a random score between 19-120 at the start of the game. 
//for this variable, create a function that has a min value of 19 and max value of 120. 
//append random number to random tag in html

//create variables for scores
//creating random number for each jewel from 1-12

//creating reset function
//reset random # and log in back to html
// reset all random numbers on gems
//reset total to 0 and log it back into html

//creating function for if won
//create function for if loss

//creat event when user clicks on blue gem
//log new total back into total score in html
//if user total equal to random number run winner function otherwise if total larger run loser function
//repeat for all other gems 


$(document).ready(function () {


    //Create a varible that generates a random score between 19-120 at the start of the game. 
    //for this variable, create a function that has a min value of 19 and max value of 120. 
    var randomNumberGenarator = function () {
        var min = 19;
        var max = 120;
        var randomNumber = Math.floor(Math.random() * (max - min) + min);
        return randomNumber;
    };
    var randomNumber = randomNumberGenarator();
    console.log(randomNumber);



    //append random number to random tag in html
    $("#randomNumber").append(randomNumber);

    //delcare variables for score, wins and losses
    var userScore = 0;
    var wins = 0;
    var losses = 0;

    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    //create variables for scores to assign for each button
    var crystScores = function () {
        var min = 1;
        var max = 12;
        var score = Math.floor(Math.random() * (max - min) + min);
        return score;

    };
    console.log(crystScores());


    //Assingning each crystal the function: crystScores
    var greenNum = crystScores();
    var redNum = crystScores();
    var yellowNum = crystScores();
    var blueNum = crystScores();

    //assinging buttons to each crystal variable 
    $("#one").attr("value", blueNum)
    $("#two").attr("value", greenNum)
    $("#three").attr("value", redNum)
    $("#four").attr("value", yellowNum)









    //creating reset function

    var reset = function () {
        // Random Button gets new value
        var randomNumber = Math.floor(Math.random() * (max - min) + min);
        $('#randomNumber').text(randomNumber)

        // Crystals get new values
        var greenNum = crystScores();
        var redNum = crystScores();
        var yellowNum = crystScores();
        var blueNum = crystScores();
        //assinging new values to buttons
        $("#one").attr("value", blueNum)
        $("#two").attr("value", greenNum)
        $("#three").attr("value", redNum)
        $("#four").attr("value", yellowNum)


        // User score goes to zero
        userScore = 0
        $('#finalTotal').text(userScore);
        return userScore;

    };

    //adds the wins to the userScore
    function winner() {
        alert("You won!");
        wins++;
        $('#numberWins').text(wins);
        reset();
    }
    //adds the losses to the userScore
    function loser() {
        alert("You lose!");
        losses++;
        $('#numberLosses').text(losses);
        reset()
    };

    // 1. Click events for crystals

    //click event for blue gem
    $('#one').on('click', function () {
        userScore = userScore + blueNum;
        console.log("New userTotal= " + userScore);
        $('#finalTotal').text(userScore);
        if (userScore == randomNumber) {
            winner();
        }
        else if (userTotal > randomNumber) {
            loser();
        }
    });
    //click event for green gem
    $('#two').on('click', function () {
        userScore = userScore + greenNum;
        console.log("New userTotal= " + userScore);
        $('#finalTotal').text(userScore);
        //sets win/lose conditions
        if (userScore == randomNumber) {
            winner();
        }
        else if (userScore > randomNumber) {
            loser();
        }
    })
    //click event for red gem
    $('#three').on('click', function () {
        userScore = userScore + redNum;
        console.log("New userTotal= " + userScore);
        $('#finalTotal').text(userScore);
        //sets win/lose conditions
        if (userScore == randomNumber) {
            winner();
        }
        else if (userScore > randomNumber) {
            loser();
        };
    })
    //click event for yellow gem
    $('#four').on('click', function () {
        userScore = userScore + yellowNum;
        console.log("New userTotal= " + userScore);
        $('#finalTotal').text(userScore);
        //sets win/lose conditions
        if (userScore == randomNumber) {
            winner();
        }
        else if (userScore > randomNumber) {
            loser();
        };
    })

});


