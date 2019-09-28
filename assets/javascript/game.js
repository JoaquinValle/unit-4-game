$(document).ready(function() {


var randomNumber = Math.floor(Math.random()*60)+ 60
$("#random-number").text(randomNumber)

var redGemNumber = 0
var blueGemNumber = 0
var yellowGemNumber = 0
var greenGemNumber = 0


var counter = 0
var wins = 0
var losses = 0

$("#counter").text(counter)
$("#wins").text(wins)
$("#losses").text(losses)

function gemClick(gemNumber, gemColor) {
    
    $("#"+gemColor+"Gem").off( "click").on("click", function() {
    counter = counter + gemNumber
    $("#counter").text(counter)
    console.log("Total: " + counter)
    if (counter === randomNumber) {
        wins++
        console.log("Wins: " + wins)
        $("#wins").text(wins)
        reset()
    }
    else if (counter > randomNumber) {
        losses++
        console.log("Losses:" + losses)
        $("#losses").text(losses)
        reset()
    }
});
}

function reset() {
    redGemNumber = Math.floor(Math.random() * 15) + 1
    blueGemNumber = Math.floor(Math.random() * 6) + 6
    yellowGemNumber = Math.floor(Math.random() * 7) + 13
    greenGemNumber = Math.floor(Math.random() * 9) + 4
    console.log("Red Gem: " + redGemNumber + ". Blue Gem: " + blueGemNumber + 
                ". Yellow Gem: " + yellowGemNumber + ". Green Gem: " + greenGemNumber + ".")
    counter = 0
    $("#counter").text(counter)
    randomNumber = Math.floor(Math.random()*60)+ 60
    $("#random-number").text(randomNumber)

    gemClick(redGemNumber,"red")
    gemClick(blueGemNumber, "blue")
    gemClick(yellowGemNumber, "yellow")
    gemClick(greenGemNumber, "green")
}

reset()

})

















