//prevent spoilerphobes from seeing spoilers
//solution: hide spoilers and reveal them through user interaction

//1. hide spoiler
$(".spoiler span").hide();

//2. add a button
$(".spoiler").append("<button>Reveal Spoiler!</button>")

//3. when button is pressed
$("button").click(function() {
  //show spoiler next to the button clicked
  $(this).prev().show();
  //hide button
  $(this).remove();
});
