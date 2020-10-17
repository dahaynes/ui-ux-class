// Use jQuery to target the <h1> tag and make it red.
$("h1").css("color", "red");

// Use jQuery to target the blue class and make it blue.
$(".blue").css("color", "blue");
$(".blue").css("font-size", "25px");
// Use jQuery to target the addMe ID and change its HTML to Hello.
$("#addMe").html("Hello");


$("#big").on("click", function () {
    $("img").width(500) 
    /* $("#corona").css("width", "500px") */
    /* alert("BIG!") */
}); 

$("#normal").on("click", function () {
    $("img").width(200)
    /* $("#corona").css("width", "500px") */
    /* alert("BIG!") */
}); 


$("#small").on("click", function () {
    $("#corona").width(50)
    /* $("#corona").css("width", "500px") */
    /* alert("BIG!") */
}); 


$("#addMe").on("click", function () {
    $("#addMe").text("Add to cart!")
    /* $("#corona").css("width", "500px") */
    /* alert("BIG!") */
}); 


$("button").on("click", function () {
    $(this).text("Add to cart!").css("background-color", "blue")
    console.log(this)
    /* this -- this is a magic will figure out */
    
}); 