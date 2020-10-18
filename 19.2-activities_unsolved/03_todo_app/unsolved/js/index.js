// Create event listener to enter items below
$("#enter").on("click", function(){
    console.log("Enter click event")
    var task = 0;
    task = $("#todoItem").val();
    console.log(task);
    $("#todoList").append(
        "<div class='task'>" + task + "<div class='x fas fa-times'</div> </div>" );
})
// Create event listener to delete items below
// we are searching the entire webpage or document
// the class is .x because we are search forthe class='x'
$(document).on("click", ".x", function(){
    $(this).parent().remove();
    //what are the properties of this?
    console.log(this.value)

});

// Create event listener to toggle 

$(document).on("click", ".task", function(){
    
    $(this).toggleClass("done");
    if ( $(this).hasClass("done")  ){
        $(this).find("div").removeClass("fa-times");
        $(this).find("div").addClass("fa-check");
        console.log("highlighting green");
    } else {
        $(this).find("div").addClass("fa-check") 
        $(this).find("div").addClass("fa-times");
    }
/*     if (this.hasClass("done")) {
        

    } else {

    } */

})