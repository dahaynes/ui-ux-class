// .on event listener documentation - https://api.jquery.com/on/#on-events-selector-data-handler

// Step 1: Hide a div
$("#button1").on("click", function(){
    $(".hideMe").slideToggle();
});

var buttonWidth = 150;
var buttonValue
// Step 2: Change a color
$('#button2').on("click", function(){
    
    console.log($(this).width())
    /* var buttonWidth = $(this).width(); */

    $(".cssChange").css("background-color", "red")
    buttonWidth = buttonWidth + 300
    buttonValue = buttonWidth + "px"
    $(".cssChange").animate({ width: buttonValue })
    console.log(buttonValue, buttonWidth)
    

});

// Step 3: Append content
$('#button3').on("click", function(){
    $(".appendMe").append("space-cat-taco").css("font-size", "30px");
});
