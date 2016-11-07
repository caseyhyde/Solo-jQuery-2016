/*
jQuery Code Challenge

In this challenge you will be creating an application that will create colored
<div> tag each time the corresponding color is clicked. Also, as each color
(button) is clicked, it should increment the corresponding label. HTML and CSS
are provided, the focus here is jQuery.

Again, HTML and CSS are provided and shouldn't require code changes. To start
this code challenge fork this repository and clone it to your machine.
*/

/*****************
GLOBAL VARIABLES
******************/
var redCount = 0,
    yellowCount = 0,
    greenCount = 0,
    blueCount = 0,
    clickedColor = "";

//on document ready:
$(document).ready(function() {
  $("button").on('click', function() { //listen for a click on the buttons
    clickedColor = $(this).data('color'); //set clickedColor variable = 'color' data on the button we click
    switch (clickedColor) {
      case "red": //if clicked color red:
        redCount ++; //add to red count
        appendToDom(); //add a red block to the DOM
        updateCount(); //update the total count on the DOM
        break;
      case "blue": //if clicked color blue:
        blueCount ++; //same as above for blue
        appendToDom();
        updateCount();
        break;
      case "yellow": //if clicked color yellow:
        yellowCount ++; //same as above for yellow
        appendToDom();
        updateCount();
        break;
      case "green": //if clicked color green:
        greenCount ++; //same as above for green
        appendToDom();
        updateCount();
        break;
    }
  });

  function appendToDom() {
    $(".container").append('<div class="color-cube ' + clickedColor + '"></div>'); //add a div to the DOM
  }

  //update total count on DOM for all colors
  function updateCount() {
    $("#red").text("Total red: " + redCount);
    $("#yellow").text("Total yellow: " + yellowCount);
    $("#blue").text("Total green: " + greenCount);
    $("#green").text("Total blue: " + blueCount);
  }
});
