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