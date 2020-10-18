
function fade() {
    $(".preloader").fadeOut("slow")
}

setTimeout(fade, 1000);

$(".toggle").on("click",  function(){
    $(this).find(".toggleContainer").toggleClass("active")
    console.log($(this).siblings())
    $(this).siblings().find(".toggleContainer").removeClass("active")
    console.log("here")

})

$(".searchButton").on("click", function(){
    /* console.log("clicked on search") */
    $(".searchButton").toggleClass("active")

    if ($(".searchButton").hasClass("active")) {
        console.log("clicked on search menu")
        $(".searchBar").css("height", "100vh")
        $("#searchForm").css("opacity", "1")
        $("#searchIcon").removeClass("fa-search").addClass("fa-times")
    } else{
        $(".searchBar").css("height", "0vh")
        $("#searchForm").css("opacity", "0")
        $("#searchIcon").removeClass("fa-times").addClass("fa-search")
    }

})


